const validLangs = ['en', 'zh'];
const validThemes = ['dark', 'light'];

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

    document.querySelectorAll('[data-target-theme]').forEach(btn => {
        btn.addEventListener('click', () => setTheme(btn.getAttribute('data-target-theme')));
    });

    document.querySelectorAll('[data-target-lang]').forEach(btn => {
        btn.addEventListener('click', () => setLang(btn.getAttribute('data-target-lang')));
    });
});
