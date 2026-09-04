/**
 * Matin Talkhabi - Personal Website Engine
 * High-performance Canvas Trail, 3D Tilt, Interactive CLI Terminal, Modals, and Bilingual i18n
 */

(function () {
    'use strict';

    /* ==========================================================================
       1. Internationalization (i18n) Dictionary & Manager
       ========================================================================== */
    const translations = {
        en: {
            title: "Matin Talkhabi - Full-Stack Developer | Python, Django & React",
            status: "Available for opportunities",
            scholarBadge: "National Elites Foundation Scholar",
            name: "Matin Talkhabi",
            bio: "Dedicated Full-Stack Developer and Computer Engineering scholar recognized by the National Elites Foundation. Specialized in scalable web apps, cutting database bottlenecks by 95%, and automated AI pipelines.",
            typewriter: [
                "Full-Stack Developer",
                "Python & Django Architect",
                "React & Modern Web UI",
                "Database Optimization Specialist",
                "National Elites Foundation Scholar"
            ],
            dockProjects: "Projects",
            dockSkills: "Skills",
            dockResume: "Resume",
            dockTerminal: "Terminal",
            dockCopyEmail: "Copy Email",
            toastEmailCopied: "Email (matintalkhabidev@gmail.com) copied to clipboard!",
            toastEmailFail: "Failed to copy email.",
            
            // Projects Modal
            projectsTitle: "Featured Engineering Repositories",
            searchPlaceholder: "Search 40+ repositories by name, tag, or language...",
            filterAll: "All Repositories",
            filterFullstack: "Full-Stack & Web",
            filterAutomation: "Python & Automation",
            filterAiBots: "Bots & AI",
            filterTools: "Tools & Networking",
            filterAlgorithms: "Algorithms & Systems",
            noProjects: "No repositories match your search query.",
            btnLive: "Live Demo",
            btnCode: "GitHub Code",

            // Skills Modal
            skillsTitle: "Skills, Stack & Honors",
            catLanguages: "Programming Languages",
            catBackend: "Backend & Database Optimization",
            catFrontend: "Frontend Architecture",
            catDevOps: "DevOps, Linux & Automation",
            catCerts: "Certifications & Honors (100% Score)",

            // Resume Modal
            resumeTitle: "Professional Resume & Background",
            resumeRole: "Full-Stack Developer & Technical Lead",
            resumeEduTitle: "Education",
            resumeExpTitle: "Work Experience",
            btnDownloadResume: "Download Official Resume (PDF)",

            // Terminal
            termTitle: "matin@portfolio:~$ - Full-Stack CLI Shell",
            termWelcome: "Welcome to Matin Talkhabi's interactive shell. Type 'help' to see all available commands.",
            termHelpHeader: "Available commands:",
            termHelpWhoami: "Display personal summary & scholarly honors",
            termHelpSkills: "List technical skills & stack",
            termHelpExperience: "Show work history & technical lead accomplishments",
            termHelpProjects: "Display GitHub & production projects",
            termHelpCertifications: "View Quera 100% score certifications",
            termHelpContact: "Show direct contact information",
            termHelpResume: "Download official PDF resume",
            termHelpMatrix: "Run matrix digital rain animation",
            termHelpClear: "Clear terminal screen",
            termHelpExit: "Close the terminal"
        },
        fa: {
            title: "متین تلخابی - توسعه‌دهنده فول‌استک | پایتون، جنگو و ری‌اکت",
            status: "آماده برای پروژه‌ها و همکاری",
            scholarBadge: "بورسیه بنیاد ملی نخبگان",
            name: "متین تلخابی",
            bio: "توسعه‌دهنده فول‌استک و پژوهشگر مهندسی کامپیوتر دانشگاه قم، برگزیده بنیاد ملی نخبگان. متخصص در بهینه‌سازی ۹۵ درصدی باتل‌نک‌های پایگاه‌داده، جنگو، ری‌اکت و اتوماسیون با هوش مصنوعی.",
            typewriter: [
                "توسعه‌دهنده فول‌استک",
                "معمار جنگو و پایتون",
                "متخصص ری‌اکت و فرانت‌اند مدرن",
                "بهینه‌سازی دیتابیس (-۹۵٪ کوئری‌ها)",
                "بورسیه بنیاد ملی نخبگان"
            ],
            dockProjects: "پروژه‌ها",
            dockSkills: "مهارت‌ها",
            dockResume: "رزومه",
            dockTerminal: "ترمینال",
            dockCopyEmail: "کپی ایمیل",
            toastEmailCopied: "آدرس ایمیل (matintalkhabidev@gmail.com) کپی شد!",
            toastEmailFail: "خطا در کپی ایمیل.",

            // Projects Modal
            projectsTitle: "پروژه‌های شاخص مهندسی و گیت‌هاب",
            searchPlaceholder: "جستجوی بیش از ۴۰ پروژه با نام، برچسب یا زبان...",
            filterAll: "همه پروژه‌ها",
            filterFullstack: "فول‌استک و وب",
            filterAutomation: "پایتون و اتوماسیون",
            filterAiBots: "بات‌ها و هوش مصنوعی",
            filterTools: "ابزارها و شبکه",
            filterAlgorithms: "الگوریتم و سیستم‌ها",
            noProjects: "پروژه‌ای با این عبارت جستجو یافت نشد.",
            btnLive: "مشاهده زنده",
            btnCode: "سورس در گیت‌هاب",

            // Skills Modal
            skillsTitle: "مهارت‌ها، تخصص‌ها و افتخارات",
            catLanguages: "زبان‌های برنامه‌نویسی",
            catBackend: "بک‌اند و بهینه‌سازی پایگاه‌داده",
            catFrontend: "معماری فرانت‌اند",
            catDevOps: "دواپس، لینوکس و اتوماسیون",
            catCerts: "مدارک و افتخارات کوئرا (نمره ۱۰۰٪ کامل)",

            // Resume Modal
            resumeTitle: "رزومه و سوابق شغلی",
            resumeRole: "توسعه‌دهنده فول‌استک و سرپرست فنی",
            resumeEduTitle: "تحصیلات دانشگاهی",
            resumeExpTitle: "سوابق کاری و اجرایی",
            btnDownloadResume: "دانلود فایل رسمی رزومه (PDF)",

            // Terminal
            termTitle: "matin@portfolio:~$ - شبیه‌ساز خط فرمان",
            termWelcome: "به خط فرمان تعاملی متین تلخابی خوش آمدید. برای مشاهده دستورات کلمه 'help' را وارد کنید.",
            termHelpHeader: "دستورات قابل استفاده:",
            termHelpWhoami: "نمایش بیوگرافی و افتخارات علمی",
            termHelpSkills: "لیست مهارت‌ها و استک فنی",
            termHelpExperience: "سوابق کاری در رویال نوین و سلفچگان",
            termHelpProjects: "مشاهده پروژه‌های گیت‌هاب و لایو",
            termHelpCertifications: "مشاهده مدارک با نمره ۱۰۰٪ از کوئرا",
            termHelpContact: "اطلاعات تماس مستقیم و شبکه‌ها",
            termHelpResume: "دانلود رزومه رسمی PDF",
            termHelpMatrix: "اجرای افکت دیجیتال باران ماتریکس",
            termHelpClear: "پاک‌کردن کنسول ترمینال",
            termHelpExit: "بستن ترمینال"
        }
    };

    let currentLang = localStorage.getItem('site_lang') || 'en';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('site_lang', lang);

        const dict = translations[lang] || translations.en;
        document.documentElement.lang = lang;
        document.documentElement.dir = (lang === 'fa') ? 'rtl' : 'ltr';
        document.title = dict.title;

        // Update all text nodes with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.textContent = dict[key];
            }
        });

        // Update lang switch button text
        const langBtn = document.getElementById('lang-toggle-btn');
        if (langBtn) {
            langBtn.textContent = (lang === 'en') ? 'فا' : 'EN';
        }

        // Update search placeholder
        const searchInput = document.getElementById('project-search-input');
        if (searchInput && dict.searchPlaceholder) {
            searchInput.placeholder = dict.searchPlaceholder;
        }

        // Restart typewriter with new language words
        startTypewriter();
    }

    /* ==========================================================================
       2. High-Performance Retina Canvas Mouse Trail
       ========================================================================== */
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas ? canvas.getContext('2d') : null;
    let isTabActive = true;
    let mouseMoved = false;

    const pointer = {
        x: window.innerWidth * 0.5,
        y: window.innerHeight * 0.5
    };

    const trailParams = {
        pointsNumber: 35,
        widthFactor: 0.32,
        spring: 0.38,
        friction: 0.52,
        hue: 195,
        saturation: 0.85
    };

    const trail = new Array(trailParams.pointsNumber);
    for (let i = 0; i < trailParams.pointsNumber; i++) {
        trail[i] = { x: pointer.x, y: pointer.y, dx: 0, dy: 0 };
    }

    function setupCanvas() {
        if (!canvas || !ctx) return;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        ctx.scale(dpr, dpr);
    }

    function updatePointer(x, y) {
        pointer.x = x;
        pointer.y = y;
    }

    window.addEventListener('mousemove', e => {
        mouseMoved = true;
        updatePointer(e.clientX, e.clientY);
    });

    window.addEventListener('touchmove', e => {
        if (e.touches.length > 0) {
            mouseMoved = true;
            updatePointer(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, { passive: true });

    document.addEventListener('visibilitychange', () => {
        isTabActive = !document.hidden;
    });

    function renderCanvas(t) {
        if (!isTabActive || !canvas || !ctx) {
            requestAnimationFrame(renderCanvas);
            return;
        }

        if (!mouseMoved) {
            pointer.x = (0.5 + 0.25 * Math.cos(0.0018 * t) * Math.sin(0.004 * t)) * window.innerWidth;
            pointer.y = (0.5 + 0.18 * Math.cos(0.0035 * t)) * window.innerHeight;
        }

        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        trail.forEach((p, idx) => {
            const prev = idx === 0 ? pointer : trail[idx - 1];
            const spring = idx === 0 ? 0.45 * trailParams.spring : trailParams.spring;
            p.dx += (prev.x - p.x) * spring;
            p.dy += (prev.y - p.y) * spring;
            p.dx *= trailParams.friction;
            p.dy *= trailParams.friction;
            p.x += p.dx;
            p.y += p.dy;
        });

        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        for (let i = 1; i < trail.length - 1; i++) {
            ctx.beginPath();
            ctx.moveTo(trail[i].x, trail[i].y);
            const xc = 0.5 * (trail[i].x + trail[i + 1].x);
            const yc = 0.5 * (trail[i].y + trail[i + 1].y);
            ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
            ctx.lineWidth = trailParams.widthFactor * (trailParams.pointsNumber - i);
            ctx.strokeStyle = `hsl(${(trailParams.hue + i * 2.5) % 360}, ${trailParams.saturation * 100}%, 60%)`;
            ctx.stroke();
        }

        trailParams.hue += 0.15;
        requestAnimationFrame(renderCanvas);
    }

    /* ==========================================================================
       3. 3D Tilt Card Effect
       ========================================================================== */
    const profileCard = document.querySelector('.profile-card');

    function init3DTilt() {
        if (!profileCard) return;

        profileCard.addEventListener('mousemove', e => {
            const rect = profileCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;

            const rotateX = -deltaY * 11;
            const rotateY = deltaX * 11;

            profileCard.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
            profileCard.style.setProperty('--glare-x', `${(x / rect.width * 100).toFixed(1)}%`);
            profileCard.style.setProperty('--glare-y', `${(y / rect.height * 100).toFixed(1)}%`);
        });

        profileCard.addEventListener('mouseleave', () => {
            profileCard.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }

    /* ==========================================================================
       4. Typewriter Effect
       ========================================================================== */
    let typewriterTimer = null;
    const typewriterEl = document.getElementById('typewriter-text');

    function startTypewriter() {
        if (!typewriterEl) return;
        if (typewriterTimer) clearTimeout(typewriterTimer);

        const words = translations[currentLang]?.typewriter || translations.en.typewriter;
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function step() {
            const currentWord = words[wordIndex % words.length];

            if (isDeleting) {
                typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 35 : 75;

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2400; // Pause after completing title
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex++;
                typeSpeed = 400;
            }

            typewriterTimer = setTimeout(step, typeSpeed);
        }

        step();
    }

    /* ==========================================================================
       5. Project Filter Tabs & Live Search
       ========================================================================== */
    function initProjectFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectItems = document.querySelectorAll('.project-item');
        const searchInput = document.getElementById('project-search-input');
        const countBadge = document.getElementById('project-count');
        const noProjectsMsg = document.getElementById('no-projects-msg');

        let currentFilter = 'all';
        let searchQuery = '';

        function applyFilters() {
            let visibleCount = 0;
            const q = searchQuery.toLowerCase().trim();

            projectItems.forEach(item => {
                const category = item.getAttribute('data-category') || '';
                const textContent = item.textContent.toLowerCase();

                const matchesCategory = (currentFilter === 'all' || category.includes(currentFilter));
                const matchesSearch = (!q || textContent.includes(q));

                if (matchesCategory && matchesSearch) {
                    item.style.display = 'flex';
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            });

            if (countBadge) {
                countBadge.textContent = visibleCount;
            }

            if (noProjectsMsg) {
                noProjectsMsg.style.display = (visibleCount === 0) ? 'block' : 'none';
            }
        }

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilter = btn.getAttribute('data-filter') || 'all';
                applyFilters();
            });
        });

        if (searchInput) {
            searchInput.addEventListener('input', e => {
                searchQuery = e.target.value;
                applyFilters();
            });
        }

        // Initialize total count
        if (countBadge) {
            countBadge.textContent = projectItems.length;
        }
    }

    /* ==========================================================================
       6. Modals Management
       ========================================================================== */
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            if (modalId === 'terminal-modal') {
                const termInput = document.getElementById('terminal-input');
                if (termInput) setTimeout(() => termInput.focus(), 150);
            }
        }
    }

    function closeModal(modal) {
        if (modal) {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
        }
    }

    function closeAllModals() {
        document.querySelectorAll('.modal-overlay.active').forEach(closeModal);
    }

    document.querySelectorAll('[data-modal-target]').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            const targetId = btn.getAttribute('data-modal-target');
            openModal(targetId);
        });
    });

    document.querySelectorAll('.modal-close-btn, .modal-overlay').forEach(el => {
        el.addEventListener('click', e => {
            if (e.target === el) {
                const modal = el.closest('.modal-overlay') || el;
                closeModal(modal);
            }
        });
    });

    window.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            closeAllModals();
        } else if (e.key === '`' || e.key === '~') {
            const termModal = document.getElementById('terminal-modal');
            if (termModal) {
                if (termModal.classList.contains('active')) {
                    closeModal(termModal);
                } else {
                    openModal('terminal-modal');
                }
            }
        }
    });

    /* ==========================================================================
       7. Toast Notification & Copy Email
       ========================================================================== */
    const toastEl = document.getElementById('toast-notification');
    let toastTimer = null;

    function showToast(message) {
        if (!toastEl) return;
        const msgEl = document.getElementById('toast-message');
        if (msgEl) msgEl.textContent = message;

        toastEl.classList.add('show');
        if (toastTimer) clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
            toastEl.classList.remove('show');
        }, 3200);
    }

    const emailAddress = "matintalkhabidev@gmail.com";

    function copyEmailToClipboard() {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(emailAddress)
                .then(() => {
                    const dict = translations[currentLang] || translations.en;
                    showToast(dict.toastEmailCopied);
                })
                .catch(() => {
                    promptCopyFallback();
                });
        } else {
            promptCopyFallback();
        }
    }

    function promptCopyFallback() {
        window.prompt("Copy email address:", emailAddress);
    }

    document.querySelectorAll('.copy-email-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            copyEmailToClipboard();
        });
    });

    /* ==========================================================================
       8. Interactive CLI Terminal Engine
       ========================================================================== */
    const terminalOutput = document.getElementById('terminal-output');
    const terminalInput = document.getElementById('terminal-input');
    const cmdHistory = [];
    let historyIndex = -1;

    function appendTerminalLine(text, className = '') {
        if (!terminalOutput) return;
        const line = document.createElement('div');
        line.className = `term-line ${className}`;
        line.textContent = text;
        terminalOutput.appendChild(line);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    function appendHtmlTerminalLine(html, className = '') {
        if (!terminalOutput) return;
        const line = document.createElement('div');
        line.className = `term-line ${className}`;
        line.innerHTML = html;
        terminalOutput.appendChild(line);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    function runMatrixEffect() {
        appendTerminalLine("[*] Initializing Matrix digital rain...", "system");
        const matrixChars = "0123456789ABCDEF@#$%&*+-/<>~";
        let matrixInterval = setInterval(() => {
            let row = "";
            for (let i = 0; i < 50; i++) {
                row += matrixChars[Math.floor(Math.random() * matrixChars.length)] + " ";
            }
            appendTerminalLine(row, "success");
        }, 110);

        setTimeout(() => {
            clearInterval(matrixInterval);
            appendTerminalLine("[+] Matrix sequence completed.", "system");
        }, 3200);
    }

    const terminalCommands = {
        help: () => {
            const dict = translations[currentLang] || translations.en;
            appendTerminalLine(dict.termHelpHeader, "system");
            appendTerminalLine(`  help           - ${dict.termHelpHeader}`, "dim");
            appendTerminalLine(`  whoami         - ${dict.termHelpWhoami}`, "dim");
            appendTerminalLine(`  skills         - ${dict.termHelpSkills}`, "dim");
            appendTerminalLine(`  experience     - ${dict.termHelpExperience}`, "dim");
            appendTerminalLine(`  projects       - ${dict.termHelpProjects}`, "dim");
            appendTerminalLine(`  certifications - ${dict.termHelpCertifications}`, "dim");
            appendTerminalLine(`  contact        - ${dict.termHelpContact}`, "dim");
            appendTerminalLine(`  resume         - ${dict.termHelpResume}`, "dim");
            appendTerminalLine(`  matrix         - ${dict.termHelpMatrix}`, "dim");
            appendTerminalLine(`  clear          - ${dict.termHelpClear}`, "dim");
            appendTerminalLine(`  exit           - ${dict.termHelpExit}`, "dim");
        },
        whoami: () => {
            appendTerminalLine("Matin Talkhabi (متین تلخابی) - Full-Stack Developer", "success");
            appendTerminalLine("• Scholar: National Elites Foundation Scholarship Recipient (بنیاد ملی نخبگان)", "warning");
            appendTerminalLine("• Education: B.Sc. in Computer Engineering, University of Qom (2023 - Present)", "dim");
            appendTerminalLine("• Core Focus: High-throughput backend systems, Django/Python, React.js, and DB query optimization (-95%).", "dim");
        },
        skills: () => {
            appendTerminalLine("TECHNICAL SKILLS & COMPETENCIES:", "system");
            appendTerminalLine("  • Languages: Python, JavaScript (ES6+), HTML5, CSS3, C#, C++, PHP", "dim");
            appendTerminalLine("  • Backend:   Django, RESTful APIs, Database Optimization, Redis Caching, PostgreSQL/MySQL", "dim");
            appendTerminalLine("  • Frontend:  React.js, Tailwind CSS, Responsive UI Design, Canvas 2D", "dim");
            appendTerminalLine("  • DevOps:    Linux Server Administration, Docker, Git/GitHub, CI/CD, VoIP (Issabel/Asterisk)", "dim");
            appendTerminalLine("  • AI & Tool: Multi-agent AI Workflows, OpenCV, Task Automation", "dim");
        },
        experience: () => {
            appendTerminalLine("PROFESSIONAL EXPERIENCE:", "system");
            appendHtmlTerminalLine("<b>1. Royal Novin</b> (Jul 2023 – Present) | Full-Stack Developer & Technical Lead", "success");
            appendTerminalLine("   • End-to-end e-commerce ecosystem architect (https://novintoshak.ir/).", "dim");
            appendTerminalLine("   • Reduced home page DB queries from 180 to 8 requests (-95% query bottlenecks).", "dim");
            appendTerminalLine("   • Built dynamic Admin/User dashboards using Django, React.js, and Tailwind CSS.", "dim");
            appendTerminalLine("   • Developed automated Python multi-agent AI SEO pipeline.", "dim");
            appendHtmlTerminalLine("<b>2. Salafchegan Special Economic Zone</b> (Jan 2024 – May 2025) | Software Developer", "success");
            appendTerminalLine("   • Streamlined internal workflows with real-time Python database sync scripts.", "dim");
            appendTerminalLine("   • Hardened web app security posture and audited legacy infrastructure.", "dim");
            appendTerminalLine("   • Integrated open-source VoIP (Issabel/Asterisk), cutting corporate subscription costs.", "dim");
        },
        certifications: () => {
            appendTerminalLine("OFFICIAL CERTIFICATIONS (QUERA COLLEGE - 100% PERFECT SCORES):", "system");
            appendHtmlTerminalLine("1. Advanced Algorithmic Thinking & Data Structures (100%) - <a href='https://quera.org/certificate/DyWDRI81/' target='_blank' style='color:#38bdf8'>Verify</a>", "dim");
            appendHtmlTerminalLine("2. SQL & Database Design (100%) - <a href='https://quera.org/certificate/GXJgK2s7/' target='_blank' style='color:#38bdf8'>Verify</a>", "dim");
            appendHtmlTerminalLine("3. Front-End Web Development (100%) - <a href='https://quera.org/certificate/6iyRXR8o/' target='_blank' style='color:#38bdf8'>Verify</a>", "dim");
            appendHtmlTerminalLine("4. Task-Oriented Data Analysis with Excel (100%) - <a href='https://quera.org/certificate/GXJgK2s7/' target='_blank' style='color:#38bdf8'>Verify</a>", "dim");
        },
        projects: () => {
            appendTerminalLine("KEY REPOSITORIES & PRODUCTION SYSTEMS:", "system");
            appendHtmlTerminalLine("• <b>novintoshak.ir</b>: Modular e-commerce platform (Django, React, Redis, -95% DB queries)", "dim");
            appendHtmlTerminalLine("• <b>warehouse-monitor</b>: Real-time Digikala warehouse capacity monitor with SMS alerts", "dim");
            appendHtmlTerminalLine("• <b>Dong-Bot</b>: Group expense management Telegram bot (Python)", "dim");
            appendHtmlTerminalLine("• <b>auto-daily-selfie</b>: Startup camera capture with OpenCV face detection & Jalali date", "dim");
            appendHtmlTerminalLine("• <b>Professional-DNS-Tool</b>: High-speed DNS latency benchmarking & switcher for Windows", "dim");
            appendHtmlTerminalLine("• <b>leetcode-solutions</b>: Optimized algorithmic problem solutions in Python", "dim");
            appendHtmlTerminalLine("• <b>Sort-video-with-AI</b>: Automated video categorizer powered by Liara AI models", "dim");
            appendHtmlTerminalLine("• <b>BaseDjangoApi</b>: Production-ready DRF boilerplate with JWT, Celery, Docker, MinIO", "dim");
            appendTerminalLine("(Click 'Projects' in the bottom dock to explore with interactive tags)", "warning");
        },
        contact: () => {
            appendTerminalLine("CONTACT CHANNELS:", "system");
            appendTerminalLine("  • Email:    matintalkhabidev@gmail.com", "dim");
            appendTerminalLine("  • Phone:    +989025967864 (Qom, Iran)", "dim");
            appendTerminalLine("  • Telegram: https://t.me/KMmatin_00", "dim");
            appendTerminalLine("  • LinkedIn: https://www.linkedin.com/in/matin-talkhabi", "dim");
            appendTerminalLine("  • GitHub:   https://github.com/Matin-Talkhabi", "dim");
        },
        resume: () => {
            appendTerminalLine("[*] Initiating resume PDF download...", "system");
            const link = document.createElement('a');
            link.href = 'matin-talkhabi-resume.pdf';
            link.download = 'Matin-Talkhabi-Resume.pdf';
            link.click();
            openModal('resume-modal');
        },
        matrix: () => {
            runMatrixEffect();
        },
        clear: () => {
            if (terminalOutput) terminalOutput.innerHTML = '';
        },
        date: () => {
            appendTerminalLine(new Date().toString(), "dim");
        },
        exit: () => {
            closeModal(document.getElementById('terminal-modal'));
        }
    };

    function processCommand(rawCmd) {
        const cmd = rawCmd.trim().toLowerCase();
        if (!cmd) return;

        appendTerminalLine(`matin@portfolio:~$ ${rawCmd}`, "system");
        cmdHistory.push(rawCmd);
        historyIndex = cmdHistory.length;

        if (terminalCommands[cmd]) {
            terminalCommands[cmd]();
        } else {
            appendTerminalLine(`Command not found: '${rawCmd}'. Type 'help' to see valid commands.`, "error");
        }
    }

    if (terminalInput) {
        terminalInput.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                processCommand(terminalInput.value);
                terminalInput.value = '';
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (historyIndex > 0) {
                    historyIndex--;
                    terminalInput.value = cmdHistory[historyIndex] || '';
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (historyIndex < cmdHistory.length - 1) {
                    historyIndex++;
                    terminalInput.value = cmdHistory[historyIndex] || '';
                } else {
                    historyIndex = cmdHistory.length;
                    terminalInput.value = '';
                }
            }
        });
    }

    /* ==========================================================================
       9. Initialization on DOM Load
       ========================================================================== */
    document.addEventListener('DOMContentLoaded', () => {
        // Init Canvas
        setupCanvas();
        window.addEventListener('resize', setupCanvas);
        requestAnimationFrame(renderCanvas);

        // Init 3D Tilt
        init3DTilt();

        // Init Project Filter Tabs
        initProjectFilters();

        // Language toggle setup
        const langToggleBtn = document.getElementById('lang-toggle-btn');
        if (langToggleBtn) {
            langToggleBtn.addEventListener('click', () => {
                const nextLang = (currentLang === 'en') ? 'fa' : 'en';
                setLanguage(nextLang);
            });
        }

        // Apply saved or default language
        setLanguage(currentLang);

        // Print initial terminal welcome
        const dict = translations[currentLang] || translations.en;
        appendTerminalLine(dict.termWelcome, "system");
    });

})();