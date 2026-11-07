(() => {
  const PROJECT_TAG_LIBRARY = {
    ROBOTICS: 'Robotics',
    EMBEDDED: 'Embedded Systems',
    REINFORCEMENT_LEARNING: 'Reinforcement Learning',
    SIM2REAL: 'Sim-to-Real',
    DEPLOYMENT: 'Deployment',
    FREERTOS: 'FreeRTOS',
    MOTION_CONTROL: 'Motion Control',
    MOTOR_CONTROL: 'Motor Control',
    SLAM: 'SLAM',
    LIDAR: 'LiDAR',
    MECHANICAL_DESIGN: 'Mechanical Design',
    UNDERWATER_ROBOTICS: 'Underwater Robotics',
    VECTOR_PROPULSION: 'Vectored Propulsion',
    WATERPROOF_ENGINEERING: 'Waterproof Engineering',
    AGRICULTURAL_ROBOTICS: 'Agricultural Robotics',
    MULTI_ROBOT_COLLABORATION: 'Multi-Robot Collaboration',
    WIKI: 'Wiki',
    KNOWLEDGE_BASE: 'Knowledge Base',
    OPEN_SOURCE: 'Open Source',
    STM32: 'STM32',
    STM32F103: 'STM32F103',
    VOICE_CONTROL: 'Voice Control',
    IMU: 'IMU',
    LD3320: 'LD3320',
    ROBOTIC_ARM: 'Robotic Arm',
    DJI: 'DJI',
    M3508: 'M3508',
    PID: 'PID',
    SENSOR_FUSION: 'Sensor Fusion',
    LEGGED_ROBOT: 'Legged Robot',
    ROBOCON: 'ROBOCON',
    ROBOT_CONTROL: 'Robot Control',
    COMPETITION: 'Competition',
    RS485: 'RS485',
    ABSOLUTE_ENCODER: 'Absolute Encoder',
    POSITIONING: 'Positioning',
    HUMANOID_ROBOTICS: 'Humanoid Robotics',
    MOTION_CAPTURE: 'Motion Capture',
    ROBOT_PERCEPTION: 'Robot Perception',
    AMPLITUDE_MOTION_PRIORS: 'AMP',
    PPO: 'PPO',
    URDF: 'URDF',
    EXOSKELETON: 'Exoskeleton',
    MYOSUITE: 'MyoSuite',
    TCN: 'TCN',
    PYTHON: 'Python',
    PYQT: 'PyQt',
    ONNX: 'ONNX',
    MUJOCO: 'MuJoCo',
    TERRAIN_GENERATION: 'Terrain Generation',
    ROBOMASTER: 'RoboMaster',
    STM32F407: 'STM32F407',
    DIGITAL_SERVO: 'Digital Servo',
    POWER_ELECTRONICS: 'Power Electronics',
    CHASSIS_DESIGN: 'Chassis Design',
    SUSPENSION_DESIGN: 'Suspension Design',
  };

  const PROJECTS = [
    {
      img: 'assets/images/project-1.jpg',
      imageFit: 'cover',
      titleKey: 'projects.item0.title',
      descKey: 'projects.item0.desc',
      tags: [
        PROJECT_TAG_LIBRARY.ROBOMASTER,
        PROJECT_TAG_LIBRARY.ROBOT_CONTROL,
        PROJECT_TAG_LIBRARY.ROBOT_PERCEPTION,
        PROJECT_TAG_LIBRARY.MECHANICAL_DESIGN,
        PROJECT_TAG_LIBRARY.COMPETITION,
      ],
      links: [],
    },
    {
      img: 'assets/images/project-4.jpg',
      imageFit: 'cover',
      titleKey: 'projects.item1.title',
      descKey: 'projects.item1.desc',
      tags: [
        PROJECT_TAG_LIBRARY.ROBOMASTER,
        PROJECT_TAG_LIBRARY.MOTION_CONTROL,
        PROJECT_TAG_LIBRARY.ROBOT_CONTROL,
        PROJECT_TAG_LIBRARY.MECHANICAL_DESIGN,
        PROJECT_TAG_LIBRARY.COMPETITION,
      ],
      links: [],
    },
    {
      img: 'assets/images/project-2.jpg',
      imageFit: 'cover',
      titleKey: 'projects.item2.title',
      descKey: 'projects.item2.desc',
      tags: [
        PROJECT_TAG_LIBRARY.ROBOMASTER,
        PROJECT_TAG_LIBRARY.MOTOR_CONTROL,
        PROJECT_TAG_LIBRARY.M3508,
        PROJECT_TAG_LIBRARY.SENSOR_FUSION,
        PROJECT_TAG_LIBRARY.COMPETITION,
      ],
      links: [],
    },
    {
      img: 'assets/images/project-3.jpg',
      imageFit: 'cover',
      titleKey: 'projects.item3.title',
      descKey: 'projects.item3.desc',
      tags: [
        PROJECT_TAG_LIBRARY.EMBEDDED,
        PROJECT_TAG_LIBRARY.STM32,
        PROJECT_TAG_LIBRARY.DIGITAL_SERVO,
        PROJECT_TAG_LIBRARY.SENSOR_FUSION,
        PROJECT_TAG_LIBRARY.COMPETITION,
      ],
      links: [],
    },
  ];

  const TIMELINE_EVENTS = [
    'timeline.event4',
    'timeline.event3',
    'timeline.event2',
    'timeline.event1',
  ];

  const TECH_STACK = [
    {
      category: 'skills.hardware',
      items: [
        { name: 'SolidWorks', icon: 'fas fa-drafting-compass' },
        { name: 'AutoCAD', icon: 'fas fa-cube' },
        { name: '嘉立创EDA', icon: 'fas fa-pencil-ruler' },
      ],
    },
    {
      category: 'skills.embedded',
      items: [
        { name: 'MCU', icon: 'fas fa-microchip' },
        { name: 'RTOS', icon: 'fas fa-cogs' },
        { name: 'C/C++', icon: 'fas fa-code' },
      ],
    },
    {
      category: 'skills.robotics',
      items: [
        { name: 'URDF', icon: 'fas fa-sitemap' },
        { name: 'ROS 1 / ROS 2', icon: 'fas fa-robot' },
      ],
    },
    {
      category: 'skills.simulation',
      items: [
        { name: 'MATLAB', icon: 'fas fa-calculator' },
      ],
    },
    {
      category: 'skills.software',
      items: [
        { name: 'Linux', icon: 'fab fa-linux' },
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'CMake', icon: 'fas fa-gears' },
        { name: 'Docker', icon: 'fab fa-docker' },
      ],
    },
  ];

  const CONTACT_LINKS = [
    { icon: 'fas fa-envelope', key: 'contact.email', link: 'mailto:2503183563@qq.com' },
    { icon: 'fab fa-github', key: 'contact.github', link: 'https://github.com/xunkeran' },
    { icon: 'fas fa-robot', key: 'contact.playground', link: 'playground/' },
  ];

  function qs(selector, root = document) {
    return root.querySelector(selector);
  }

  function qsa(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  }

  function clear(el) {
    if (!el) return;
    el.innerHTML = '';
  }

  function t(key) {
    return window.i18n?.get ? window.i18n.get(key) : key;
  }

  function renderSpanTags(tags, className) {
    if (!Array.isArray(tags)) return '';
    return tags.map((tag) => `<span class="${className}">${tag}</span>`).join('');
  }

  function renderProjectTags(tags) {
    if (!Array.isArray(tags)) return '';
    return `<div class="project-tags">${renderSpanTags(tags, 'project-tag')}</div>`;
  }

  function renderProjectActions(links) {
    if (!Array.isArray(links) || links.length === 0) return '';

    const items = links
      .filter((link) => link.href)
      .map((link) => {
        const label = link.labelKey ? t(link.labelKey) : link.label;
        const icon = link.icon || 'fas fa-arrow-up-right-from-square';

        return `
          <a href="${link.href}" target="_blank" rel="noopener noreferrer" class="project-action" aria-label="${label}">
            <i class="${icon}"></i>
            <span>${label}</span>
          </a>
        `;
      })
      .join('');

    return items ? `<div class="project-actions">${items}</div>` : '';
  }

  function initThemeToggle() {
    const toggleBtn = qs('.theme-toggle');
    const htmlEl = document.documentElement;
    if (!toggleBtn) return;

    const savedTheme = localStorage.getItem('theme') || htmlEl.getAttribute('data-theme') || 'light';
    htmlEl.setAttribute('data-theme', savedTheme);

    toggleBtn.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';

      htmlEl.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      console.log(`[Theme] Switched to ${newTheme}`);
    });
  }

  function initLangToggle() {
    const toggleBtn = qs('.lang-toggle');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
      const current = window.i18n.currentLang();
      const next = current === 'en' ? 'zh' : 'en';
      console.log(`[Lang] Switching to ${next}...`);
      window.i18n.changeLang(next);
    });
  }

  function initProjects() {
    const grid = qs('.projects-grid');
    if (!grid) return;
    clear(grid);

    PROJECTS.forEach((project) => {
      const tagsHtml = renderProjectTags(project.tags);
      const actionsHtml = renderProjectActions(project.links);
      const hasThumbnail = Boolean(project.img);
      const thumbnailHtml = project.img
        ? `
        <div class="project-thumbnail-wrapper">
          <img src="${project.img}" alt="${t('projects.imgAlt')}" class="project-thumbnail${project.imageFit === 'cover' ? ' project-thumbnail--cover' : ''}">
        </div>
      `
        : '';
      const metaHtml = hasThumbnail
        ? `${tagsHtml}${actionsHtml}`
        : `<div class="project-meta-row">${tagsHtml}${actionsHtml}</div>`;

      const card = document.createElement('div');
      card.className = hasThumbnail ? 'card project-card' : 'card project-card project-card--text-only';
      card.innerHTML = `
        ${thumbnailHtml}
        <div class="project-info">
          <h3>${t(project.titleKey)}</h3>
          <p>${t(project.descKey)}</p>
          ${metaHtml}
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function initTimeline() {
    const container = qs('.timeline-container');
    if (!container) return;
    clear(container);

    TIMELINE_EVENTS.forEach((key) => {
      const item = document.createElement('div');
      item.className = 'timeline-item';
      item.innerHTML = `
        <div class="timeline-dot"></div>
        <span class="timeline-date">${t(`${key}.date`)}</span>
        <div class="timeline-content">
          <h3>${t(`${key}.title`)}</h3>
          <p>${t(`${key}.desc`)}</p>
        </div>
      `;
      container.appendChild(item);
    });
  }

  function initTechStack() {
    const container = qs('.skills-wrapper');
    if (!container) return;
    clear(container);

    TECH_STACK.forEach((group) => {
      const itemsHtml = group.items
        .map((s) => `<div class="skill-badge"><i class="${s.icon}"></i> ${s.name}</div>`)
        .join('');

      const col = document.createElement('div');
      col.className = 'skill-category';
      col.innerHTML = `<h3>${t(group.category)}</h3><div class="skill-list">${itemsHtml}</div>`;
      container.appendChild(col);
    });
  }

  function initContactLinks() {
    const container = qs('.intro-contact-links');
    if (!container) return;
    clear(container);

    CONTACT_LINKS.forEach((contact) => {
      const label = t(contact.key);
      const item = document.createElement('a');
      item.className = 'intro-contact-link';
      item.href = contact.link;
      if (!contact.link.startsWith('mailto:')) {
        item.target = '_blank';
        item.rel = 'noopener noreferrer';
      }
      item.title = label;
      item.setAttribute('aria-label', label);
      item.innerHTML = `<span>${label}</span><i class="${contact.icon}"></i>`;
      container.appendChild(item);
    });
  }

  function initSmoothScroll() {
    qsa('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        let target;
        try {
          target = qs(href);
        } catch {
          return;
        }

        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      });
    });
  }

  function initRevealMotion() {
    const targets = [
      ...qsa('.projects-grid .card'),
      ...qsa('.timeline-container .timeline-item'),
      ...qsa('.skills-wrapper .skill-category'),
    ];

    if (!targets.length) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    targets.forEach((el, index) => {
      el.classList.add('reveal');
      el.style.setProperty('--reveal-delay', `${(index % 6) * 60}ms`);
    });

    if (reducedMotion || typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    targets.forEach((el) => observer.observe(el));
  }

  document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initLangToggle();
    initSmoothScroll();
  });

  window.addEventListener('i18nLoaded', () => {
    console.log('[main] i18n loaded, rendering content...');
    initProjects();
    initTimeline();
    initTechStack();
    initContactLinks();
    initRevealMotion();
  });
})();
