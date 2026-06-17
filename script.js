const translations = {
  uk: {
    brand: "dev.portfolio",
    navProjects: "Проєкти",
    navStack: "Стек",
    navContact: "Контакт",
    heroStatus: "Відкрито до роботи",
    heroTitle: "Розробник, який створює спокійні, швидкі, корисні інтерфейси.",
    heroText:
      "Перетворюю ідеї на охайні веб-продукти: чистий UI, надійну логіку й деталі, через які сторінка відчувається живою.",
    seeProjects: "Дивитись проєкти",
    contactMe: "Написати",
    terminalName: "frontend developer / student of applied computer science",
    terminalStatus: "відкритий до продуктових команд / фріланс-проєктів / стажування / навчання / благодійних проєктів",
    terminalTyping: "завантажую проєкти, стек, нотатки...",
    metricProjects: "завершених проєктів",
    metricYears: "роки навчання й розробки",
    metricReply: "середній час відповіді",
    aboutKicker: "Про мене",
    aboutTitle: "Фокус на інтерфейсах, які легко використовувати й важко не помітити.",
    aboutText:
      "Це placeholder для біографії. Напиши кілька точних речень про те, що ти створюєш, як думаєш і з якими командами або клієнтами хочеш працювати.",
    projectsKicker: "Вибрані роботи",
    projectsTitle: "Проєкти, які варто показати першими.",
    allProjects: "GitHub",
    projectOneTitle: "Фінансовий dashboard",
    projectOneText: "Чиста аналітична панель із графіками, фільтрами та перевикористовуваними UI-компонентами.",
    projectTwoTitle: "Telegram workflow bot",
    projectTwoText: "Невеликий інструмент автоматизації для збору заявок і структурованих оновлень.",
    projectThreeTitle: "Персональний лендінг",
    projectThreeText: "Швидка портфоліо-сторінка з двомовним контентом і легким terminal-inspired motion.",
    openCase: "Відкрити кейс",
    stackKicker: "Стек",
    stackTitle: "Інструменти, з якими подобається релізити.",
    servicesKicker: "Послуги",
    servicesTitle: "З чим можу допомогти.",
    serviceOne: "Лендінги та портфоліо",
    serviceTwo: "Frontend-фічі та UI-системи",
    serviceThree: "Автоматизації та невеликі інструменти",
    nowKicker: "Зараз",
    nowTitle: "Що вивчаю та будую.",
    nowOne: "Прокачую продуктове мислення й frontend-архітектуру.",
    nowTwo: "Збираю портфоліо-проєкти з реальними сценаріями.",
    nowThree: "Досліджую motion, accessibility та performance-деталі.",
    notesKicker: "Нотатки",
    notesTitle: "Короткі думки з робочого столу.",
    noteOne: "Як я підходжу до нового інтерфейсу",
    noteTwo: "Що я зрозумів під час створення ботів",
    noteThree: "Чому дрібні деталі роблять продукт преміальним",
    contactKicker: "Контакт",
    contactTitle: "Є вакансія, проєкт або ідея?",
    contactText: "Надішли контекст, терміни й посилання. Я відповім, якщо є справжній збіг.",
    footer: "Зібрано на HTML, CSS, JS. Спроєктовано для редагування.",
  },
  en: {
    brand: "dev.portfolio",
    navProjects: "Projects",
    navStack: "Stack",
    navContact: "Contact",
    heroStatus: "Available for work",
    heroTitle: "Developer who builds calm, fast, useful interfaces.",
    heroText:
      "I turn ideas into polished web products: clean UI, reliable logic, and details that make the page feel alive.",
    seeProjects: "View projects",
    contactMe: "Contact me",
    terminalName: "frontend developer / student of applied computer science",
    terminalStatus: "open to product teams and freelance work",
    terminalTyping: "loading projects, stack, notes...",
    metricProjects: "finished projects",
    metricYears: "years learning and building",
    metricReply: "average reply time",
    aboutKicker: "About",
    aboutTitle: "Focused on interfaces that are easy to use and hard to ignore.",
    aboutText:
      "This is a placeholder bio. Write a few sharp sentences about what you build, how you think, and what kind of teams or clients you want to work with.",
    projectsKicker: "Selected work",
    projectsTitle: "Projects worth showing first.",
    allProjects: "GitHub",
    projectOneTitle: "Finance dashboard",
    projectOneText: "A clean analytics panel with charts, filters, and reusable UI components.",
    projectTwoTitle: "Telegram workflow bot",
    projectTwoText: "A small automation tool for collecting requests and sending structured updates.",
    projectThreeTitle: "Personal landing page",
    projectThreeText: "A fast portfolio page with bilingual content and subtle terminal-inspired motion.",
    openCase: "Open case",
    stackKicker: "Stack",
    stackTitle: "Tools I like to ship with.",
    servicesKicker: "Services",
    servicesTitle: "What I can help with.",
    serviceOne: "Landing pages and portfolios",
    serviceTwo: "Frontend features and UI systems",
    serviceThree: "Automation scripts and small tools",
    nowKicker: "Now",
    nowTitle: "Currently learning and building.",
    nowOne: "Improving product thinking and frontend architecture.",
    nowTwo: "Building portfolio projects with real-world workflows.",
    nowThree: "Exploring motion, accessibility, and performance details.",
    notesKicker: "Notes",
    notesTitle: "Short thoughts from the workbench.",
    noteOne: "How I approach a new interface",
    noteTwo: "Things I learned while building bots",
    noteThree: "Why small details make products feel premium",
    contactKicker: "Contact",
    contactTitle: "Have a role, project, or idea?",
    contactText: "Send the context, timeline, and links. I will reply when there is a real fit.",
    footer: "Built with HTML, CSS, JS. Designed to be edited.",
  },
};

const languageButtons = document.querySelectorAll(".lang-btn");
const translatableElements = document.querySelectorAll("[data-i18n]");
const revealElements = document.querySelectorAll(
  ".section-shell, .project-card, .terminal, .metrics div, .note-row a"
);

function setLanguage(language) {
  const dictionary = translations[language] || translations.uk;

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.documentElement.lang = language;
  localStorage.setItem("portfolioLanguage", language);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

revealElements.forEach((element) => element.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach((element) => observer.observe(element));

setLanguage(localStorage.getItem("portfolioLanguage") || "uk");
