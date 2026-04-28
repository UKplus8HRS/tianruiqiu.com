const validLangs = ['en', 'zh'];
const validThemes = ['dark', 'light'];
let currentLang = 'en';

function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
}

function updateUrlParam(key, value) {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.replaceState({ path: url.toString() }, '', url.toString());
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);
    updateUrlParam('theme', theme);
    document.querySelectorAll('[data-target-theme]').forEach(btn => {
        const active = btn.getAttribute('data-target-theme') === theme;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', String(active));
    });
}

function setLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    localStorage.setItem('portfolio_lang', lang);
    updateUrlParam('lang', lang);
    document.querySelectorAll('[data-target-lang]').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-target-lang') === lang);
    });
    document.querySelectorAll('[data-en]').forEach(el => {
        el.innerHTML = el.getAttribute(`data-${lang}`);
    });
    const title = document.body.getAttribute(`data-title-${lang}`);
    if (title) document.title = title;
    updateStoryCaption();
}

function initReveal() {
    const revealItems = document.querySelectorAll('[data-reveal]');
    if (!revealItems.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        revealItems.forEach(item => item.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
    });

    revealItems.forEach(item => observer.observe(item));
}

function updateStoryCaption() {
    const activeStep = document.querySelector('.story-step.is-active') || document.querySelector('.story-step');
    const caption = document.getElementById('storyCaption');
    if (!activeStep || !caption) return;

    const text = activeStep.getAttribute(`data-story-caption-${currentLang}`);
    if (text) caption.textContent = text;
}

function activateStoryStep(step) {
    const image = document.getElementById('storyImage');
    if (!step || !image) return;

    document.querySelectorAll('.story-step').forEach(item => {
        item.classList.toggle('is-active', item === step);
    });

    const nextSrc = step.getAttribute('data-story-image');
    if (nextSrc && !image.src.endsWith(nextSrc.replace('../', ''))) {
        image.classList.add('is-swapping');
        window.setTimeout(() => {
            image.src = nextSrc;
            image.onload = () => image.classList.remove('is-swapping');
            window.setTimeout(() => image.classList.remove('is-swapping'), 420);
        }, 120);
    }

    updateStoryCaption();
}

function initDrawingStory() {
    const steps = Array.from(document.querySelectorAll('.story-step'));
    if (!steps.length) return;

    steps.forEach(step => {
        step.addEventListener('click', () => activateStoryStep(step));
    });

    const observer = new IntersectionObserver(entries => {
        const visible = entries
            .filter(entry => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) activateStoryStep(visible.target);
    }, {
        threshold: [0.35, 0.5, 0.7],
        rootMargin: '-18% 0px -32% 0px'
    });

    steps.forEach(step => observer.observe(step));
    activateStoryStep(document.querySelector('.story-step.is-active') || steps[0]);
}

function initModelViewerControls() {
    const modelViewer = document.querySelector('.robot-model-viewer');
    const resetButton = document.querySelector('[data-model-reset]');
    if (!modelViewer || !resetButton) return;

    const defaultOrbit = modelViewer.getAttribute('camera-orbit') || '-42deg 58deg auto';
    const defaultFieldOfView = modelViewer.getAttribute('field-of-view') || '30deg';
    const defaultTarget = modelViewer.getAttribute('camera-target') || 'auto';

    function resetCamera() {
        modelViewer.cameraOrbit = defaultOrbit;
        modelViewer.cameraTarget = defaultTarget;
        modelViewer.fieldOfView = defaultFieldOfView;
        modelViewer.setAttribute('camera-orbit', defaultOrbit);
        modelViewer.setAttribute('camera-target', defaultTarget);
        modelViewer.setAttribute('field-of-view', defaultFieldOfView);

        if (typeof modelViewer.jumpCameraToGoal === 'function') {
            modelViewer.jumpCameraToGoal();
        }
    }

    resetButton.addEventListener('click', () => {
        resetButton.blur();
        resetCamera();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const initialTheme = validThemes.includes(getParam('theme'))
        ? getParam('theme')
        : (validThemes.includes(localStorage.getItem('portfolio_theme'))
            ? localStorage.getItem('portfolio_theme')
            : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));

    const initialLang = validLangs.includes(getParam('lang'))
        ? getParam('lang')
        : (validLangs.includes(localStorage.getItem('portfolio_lang'))
            ? localStorage.getItem('portfolio_lang')
            : 'en');

    setTheme(initialTheme);
    setLang(initialLang);
    initReveal();
    initDrawingStory();
    initModelViewerControls();

    document.querySelectorAll('[data-target-theme]').forEach(btn => {
        btn.addEventListener('click', () => setTheme(btn.getAttribute('data-target-theme')));
    });

    document.querySelectorAll('[data-target-lang]').forEach(btn => {
        btn.addEventListener('click', () => setLang(btn.getAttribute('data-target-lang')));
    });
});
