const translations = {
  en: {
    "meta.title": "Tianrui Qiu | Pixel Portfolio",
    "meta.description":
      "Tianrui Qiu's personal portfolio, featuring frontend work, software projects, and contact links.",
    "language.aria": "Switch language to Chinese",
    "language.label": "中文",
    "loader.label": "LOAD TIANRUI",
    "nav.work": "Work",
    "nav.skills": "Skills",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.eyebrow": "Pixel Portfolio / Personal Homepage",
    "hero.title": "Hi, I'm Tianrui Qiu.",
    "hero.lead":
      "I design and build calm, useful web experiences with frontend craft, product thinking, and a practical engineering mindset.",
    "hero.viewWork": "View Work",
    "hero.contact": "Get in Touch",
    "hero.factOne": "Frontend-focused",
    "hero.factTwo": "Open to opportunities",
    "hero.factThree": "Based in the UK",
    "hero.imageAlt": "Pixel art developer workspace with a laptop and warm window light",
    "marquee.frontend": "Frontend",
    "marquee.responsive": "Responsive UI",
    "marquee.pages": "GitHub Pages",
    "marquee.pixel": "Pixel Style",
    "marquee.product": "Product Thinking",
    "about.eyebrow": "About",
    "about.title": "A personal site with a softer signal.",
    "about.body":
      "This page is built to feel approachable while still being useful for hiring conversations. Replace this paragraph with a short summary of your background, target role, and the kind of work you want to do next.",
    "work.eyebrow": "Selected Work",
    "work.title": "Projects worth opening.",
    "projects.one.type": "Portfolio",
    "projects.one.title": "Personal Website",
    "projects.one.body":
      "A lightweight GitHub Pages site with responsive layout, custom domain setup, and a friendly pixel-inspired visual system.",
    "projects.two.type": "Web App",
    "projects.two.title": "Project Placeholder",
    "projects.two.body":
      "Add a real project here. Focus on the problem, your contribution, the stack, and the result instead of a long feature list.",
    "projects.three.type": "Engineering",
    "projects.three.title": "Technical Build",
    "projects.three.body":
      "Use this card for a course project, research tool, automation script, or any work that shows your technical decision-making.",
    "skills.eyebrow": "Toolkit",
    "skills.title": "Skills in progress.",
    "skills.frontend.title": "Frontend",
    "skills.frontend.body": "HTML, CSS, JavaScript, TypeScript, React, responsive UI",
    "skills.engineering.title": "Engineering",
    "skills.engineering.body": "Git, GitHub, API integration, debugging, deployment workflows",
    "skills.design.title": "Design Sense",
    "skills.design.body": "Layout, visual hierarchy, accessibility basics, product polish",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's build the next screen.",
    "contact.body":
      "Replace these links with your real email, GitHub, LinkedIn, and resume. Keep this area direct so recruiters can act quickly.",
    "contact.email": "Email"
  },
  zh: {
    "meta.title": "邱天睿 | 像素风个人主页",
    "meta.description": "邱天睿的个人作品集网站，展示前端作品、软件项目和联系方式。",
    "language.aria": "Switch language to English",
    "language.label": "EN",
    "loader.label": "加载天睿",
    "nav.work": "作品",
    "nav.skills": "技能",
    "nav.about": "关于",
    "nav.contact": "联系",
    "hero.eyebrow": "像素风作品集 / 个人主页",
    "hero.title": "你好，我是邱天睿。",
    "hero.lead": "我喜欢设计和构建清爽、实用的网页体验，关注前端细节、产品思维和可靠的工程实现。",
    "hero.viewWork": "查看作品",
    "hero.contact": "联系我",
    "hero.factOne": "专注前端",
    "hero.factTwo": "正在寻找机会",
    "hero.factThree": "目前在英国",
    "hero.imageAlt": "像素风开发者工作台，包含笔记本电脑和温暖窗光",
    "marquee.frontend": "前端开发",
    "marquee.responsive": "响应式界面",
    "marquee.pages": "GitHub Pages",
    "marquee.pixel": "像素风格",
    "marquee.product": "产品思维",
    "about.eyebrow": "关于",
    "about.title": "一个更温和、有记忆点的个人主页。",
    "about.body":
      "这个页面希望在保持亲和力的同时，也能服务求职沟通。这里可以替换成你的背景、目标岗位，以及你接下来希望参与的工作方向。",
    "work.eyebrow": "精选作品",
    "work.title": "值得点开的项目。",
    "projects.one.type": "作品集",
    "projects.one.title": "个人网站",
    "projects.one.body": "一个部署在 GitHub Pages 上的轻量个人网站，包含响应式布局、自定义域名和友好的像素风视觉系统。",
    "projects.two.type": "网页应用",
    "projects.two.title": "项目占位",
    "projects.two.body": "在这里加入真实项目。重点写清楚问题、你的贡献、技术栈和结果，而不是堆很长的功能列表。",
    "projects.three.type": "工程实践",
    "projects.three.title": "技术项目",
    "projects.three.body": "这里适合放课程项目、研究工具、自动化脚本，或任何能体现技术判断力的作品。",
    "skills.eyebrow": "工具箱",
    "skills.title": "持续积累的技能。",
    "skills.frontend.title": "前端",
    "skills.frontend.body": "HTML、CSS、JavaScript、TypeScript、React、响应式界面",
    "skills.engineering.title": "工程",
    "skills.engineering.body": "Git、GitHub、API 集成、调试、部署流程",
    "skills.design.title": "设计感",
    "skills.design.body": "布局、视觉层级、基础无障碍、产品细节打磨",
    "contact.eyebrow": "联系",
    "contact.title": "一起进入下一屏。",
    "contact.body": "把这里替换成你的真实邮箱、GitHub、LinkedIn 和简历链接。联系区域要直接，让招聘者能快速行动。",
    "contact.email": "邮箱"
  }
};

const supportedLanguages = ["en", "zh"];
const languageToggle = document.querySelector("[data-language-toggle]");

const getInitialLanguage = () => {
  const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
  const savedLanguage = window.localStorage.getItem("site-language");
  const browserLanguage = window.navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";

  if (supportedLanguages.includes(requestedLanguage)) return requestedLanguage;
  if (supportedLanguages.includes(savedLanguage)) return savedLanguage;
  return browserLanguage;
};

const setLanguage = (language) => {
  const dictionary = translations[language] || translations.en;

  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = dictionary["meta.title"];
  document.querySelector('[name="description"]').setAttribute("content", dictionary["meta.description"]);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (dictionary[key]) {
      element.setAttribute("alt", dictionary[key]);
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (dictionary[key]) {
      element.setAttribute("aria-label", dictionary[key]);
    }
  });

  if (languageToggle) {
    languageToggle.textContent = dictionary["language.label"];
    languageToggle.dataset.currentLanguage = language;
  }

  window.localStorage.setItem("site-language", language);
};

setLanguage(getInitialLanguage());

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const nextLanguage = languageToggle.dataset.currentLanguage === "zh" ? "en" : "zh";
    setLanguage(nextLanguage);
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("in-view"));
}

const tiltItems = document.querySelectorAll("[data-tilt]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
  tiltItems.forEach((item) => {
    item.addEventListener("pointermove", (event) => {
      const rect = item.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      item.style.transform = `perspective(900px) rotateX(${y * -4}deg) rotateY(${x * 5}deg) translateY(-3px)`;
    });

    item.addEventListener("pointerleave", () => {
      item.style.transform = "";
    });
  });
}
