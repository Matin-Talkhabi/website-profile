/**
 * Matin Talkhabi - Masterpiece Personal Architecture Engine
 * Linear/Raycast cyber-minimalist aesthetic, Web Audio synthesizer,
 * Multi-mode Canvas engine, Command Palette, Spotlight tracker,
 * All 46 Projects Explorer, Terminal 3.0 CLI, and Bilingual i18n.
 */

(function () {
    'use strict';

    /* ==========================================================================
       1. Web Audio API Synthesizer (Zero External Dependencies)
       ========================================================================== */
    class SoundFxEngine {
        constructor() {
            this.ctx = null;
            this.isMuted = localStorage.getItem('site_sound_muted') === 'true';
        }

        init() {
            if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                this.ctx = new AudioCtx();
            }
            if (this.ctx && this.ctx.state === 'suspended') {
                this.ctx.resume();
            }
        }

        playTone(freq, type = 'sine', duration = 0.05, gainValue = 0.04, freqEnd = null) {
            if (this.isMuted) return;
            try {
                this.init();
                if (!this.ctx) return;
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();

                osc.type = type;
                osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
                if (freqEnd !== null) {
                    osc.frequency.exponentialRampToValueAtTime(Math.max(10, freqEnd), this.ctx.currentTime + duration);
                }

                gain.gain.setValueAtTime(gainValue, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start();
                osc.stop(this.ctx.currentTime + duration);
            } catch (e) {
                // AudioContext autoplay restrictions or disabled
            }
        }

        // Gentle subtle click on hover / key navigation
        click() {
            this.playTone(850, 'sine', 0.025, 0.02);
        }

        // Melodic action chime when opening modal or selecting item
        action() {
            if (this.isMuted) return;
            this.playTone(523.25, 'triangle', 0.08, 0.04); // C5
            setTimeout(() => this.playTone(659.25, 'sine', 0.12, 0.035), 45); // E5
        }

        // Cyber laser blip for opening command palette / modals
        blip() {
            this.playTone(900, 'sine', 0.08, 0.035, 300);
        }

        // Retro terminal beep
        terminalBeep() {
            this.playTone(600, 'sine', 0.04, 0.03);
        }

        // Toggle mute state
        toggleMute() {
            this.isMuted = !this.isMuted;
            localStorage.setItem('site_sound_muted', this.isMuted ? 'true' : 'false');
            this.updateUi();
            if (!this.isMuted) {
                this.action();
            }
            return !this.isMuted;
        }

        updateUi() {
            const soundBtn = document.getElementById('sound-toggle-btn');
            if (!soundBtn) return;
            const iconWrap = soundBtn.querySelector('.sound-icon');
            if (this.isMuted) {
                soundBtn.setAttribute('title', 'Sound: Muted (Press M)');
                if (iconWrap) {
                    iconWrap.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="1" y1="1" x2="23" y2="23"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`;
                }
                soundBtn.style.opacity = '0.6';
            } else {
                soundBtn.setAttribute('title', 'Sound: Enabled (Press M)');
                if (iconWrap) {
                    iconWrap.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`;
                }
                soundBtn.style.opacity = '1';
            }
        }
    }

    const soundFx = new SoundFxEngine();

    /* ==========================================================================
       2. Internationalization (i18n) Dictionary & Engine
       ========================================================================== */
    const translations = {
        en: {
            siteTitle: "Matin Talkhabi | متین تلخابی - Full-Stack Developer & Technical Lead",
            status: "Available for opportunities",
            scholarBadge: "National Elites Foundation Scholar",
            name: "Matin Talkhabi",
            heroTitle: "Matin Talkhabi",
            heroBio: "Full-Stack Developer and Computer Engineering scholar at University of Qom, recognized by the National Elites Foundation. Specialized in scalable web architecture, cutting database bottlenecks, and automated AI workflows.",
            typewriter: [
                "Full-Stack Developer",
                "Python & Django Architect",
                "React & Modern Web UI",
                "Database Optimization Specialist",
                "National Elites Foundation Scholar"
            ],
            metricsRepos: "Repositories & Open Source",
            metricsCerts: "Quera 100% Score Certifications",
            metricsScholar: "National Elites Scholar Recipient",
            metricsExp: "Years Active Experience",

            navExploreProjects: "Projects",
            navTerminal: "Terminal",
            navResume: "Resume",
            navCopyEmail: "Copy Email",

            featuredTitle: "Featured Engineering",
            btnExploreAll: "Explore All 46 Projects (⌘K)",
            techStackTitle: "Tech Stack Matrix",
            timelineTitle: "Career & Education",
            certificationsTitle: "Certifications & Honors (100%)",

            // Projects Explorer Modal
            projectsModalTitle: "All 46 Engineering Repositories",
            searchPlaceholder: "Search 46 repositories by title, tag, or stack...",
            filterAll: "All (46)",
            filterFullstack: "Full-Stack & Web",
            filterAutomation: "Python & Automation",
            filterAiBots: "Bots & AI",
            filterTools: "Tools & Systems",
            filterAlgorithms: "Algorithms",
            showingCountPrefix: "Showing",
            showingCountOf: "of 46 projects",
            noProjects: "No repositories match your search query.",
            btnLive: "Live Demo",
            btnCode: "GitHub Code",

            // Command Palette
            palettePlaceholder: "Type a command or search (e.g. 'projects', 'resume', 'terminal', 'sound')...",
            paletteNavSection: "Navigation & Modals",
            paletteActionsSection: "Actions & Tools",
            paletteLinksSection: "External Profiles",

            // Resume Modal
            resumeTitle: "Professional Resume & Background",
            resumeRole: "Full-Stack Developer & Technical Lead",
            resumeEduTitle: "Education",
            resumeExpTitle: "Work Experience",
            btnDownloadResume: "Download Official Resume (PDF)",

            // Terminal
            termTitle: "matin@portfolio:~$ - Interactive CLI Shell",
            termWelcome: "Welcome to Matin Talkhabi's interactive shell. Type 'help' for available commands.",
            termHelpHeader: "Available commands:",
            termHelpWhoami: "Display personal profile & honors",
            termHelpSkills: "List technical skills & stack",
            termHelpExperience: "Show work history & technical leadership",
            termHelpProjects: "Display GitHub & production projects",
            termHelpCertifications: "View Quera 100% score certifications",
            termHelpContact: "Show direct contact channels",
            termHelpResume: "Download official PDF resume",
            termHelpSound: "Toggle sound effects on/off",
            termHelpCanvas: "Switch background mode (constellation, matrix, fluid, zen)",
            termHelpMatrix: "Run matrix digital rain animation",
            termHelpClear: "Clear terminal output",
            termHelpExit: "Close the terminal",

            // Toasts
            toastEmailCopied: "Email (matintalkhabidev@gmail.com) copied to clipboard!",
            toastCanvasSwitched: "Canvas visual mode switched to: ",
            toastSoundToggled: "Sound effects: "
        },
        fa: {
            siteTitle: "متین تلخابی | Matin Talkhabi - توسعه‌دهنده فول‌استک و سرپرست فنی",
            status: "آماده برای پروژه‌ها و همکاری",
            scholarBadge: "بورسیه بنیاد ملی نخبگان",
            name: "متین تلخابی",
            heroTitle: "متین تلخابی",
            heroBio: "توسعه‌دهنده فول‌استک و پژوهشگر مهندسی کامپیوتر دانشگاه قم، برگزیده بنیاد ملی نخبگان. متخصص در معماری سیستم‌های وب مقیاس‌پذیر، بهینه‌سازی ساختار پایگاه‌داده و اتوماسیون با هوش مصنوعی.",
            typewriter: [
                "توسعه‌دهنده فول‌استک",
                "معمار جنگو و پایتون",
                "متخصص ری‌اکت و فرانت‌اند مدرن",
                "معماری و بهینه‌سازی دیتابیس",
                "بورسیه بنیاد ملی نخبگان"
            ],
            metricsRepos: "پروژه‌ها و مخازن گیت‌هاب",
            metricsCerts: "مدارک نمره ۱۰۰٪ کامل کوئرا",
            metricsScholar: "برگزیده بورسیه بنیاد ملی نخبگان",
            metricsExp: "سال تجربه توسعه و مهندسی",

            navExploreProjects: "پروژه‌ها",
            navTerminal: "ترمینال",
            navResume: "رزومه",
            navCopyEmail: "کپی ایمیل",

            featuredTitle: "پروژه‌های شاخص مهندسی",
            btnExploreAll: "مشاهده تمام ۴۶ پروژه (⌘K)",
            techStackTitle: "ماتریس فناوری و تخصص‌ها",
            timelineTitle: "سوابق کاری و تحصیلی",
            certificationsTitle: "مدارک و افتخارات (نمره ۱۰۰٪)",

            // Projects Explorer Modal
            projectsModalTitle: "مجموعه کامل ۴۶ پروژه مهندسی",
            searchPlaceholder: "جستجو در ۴۶ پروژه با نام، برچسب یا فناوری...",
            filterAll: "همه (۴۶)",
            filterFullstack: "فول‌استک و وب",
            filterAutomation: "پایتون و اتوماسیون",
            filterAiBots: "بات‌ها و هوش مصنوعی",
            filterTools: "ابزارها و سیستم‌ها",
            filterAlgorithms: "الگوریتم‌ها",
            showingCountPrefix: "نمایش",
            showingCountOf: "از ۴۶ پروژه",
            noProjects: "پروژه‌ای با این عبارت جستجو یافت نشد.",
            btnLive: "مشاهده زنده",
            btnCode: "سورس در گیت‌هاب",

            // Command Palette
            palettePlaceholder: "دستور یا مورد دلخواه را بنویسید (مانند 'projects', 'resume', 'sound')...",
            paletteNavSection: "ناوبری و بخش‌ها",
            paletteActionsSection: "ابزارها و تنظیمات",
            paletteLinksSection: "لینک‌های خارجی",

            // Resume Modal
            resumeTitle: "رزومه و سوابق شغلی",
            resumeRole: "توسعه‌دهنده فول‌استک و سرپرست فنی",
            resumeEduTitle: "تحصیلات دانشگاهی",
            resumeExpTitle: "سوابق کاری و اجرایی",
            btnDownloadResume: "دانلود فایل رسمی رزومه (PDF)",

            // Terminal
            termTitle: "matin@portfolio:~$ - شبیه‌ساز خط فرمان",
            termWelcome: "به خط فرمان تعاملی متین تلخابی خوش آمدید. برای راهنما عبارت 'help' را وارد کنید.",
            termHelpHeader: "دستورات موجود:",
            termHelpWhoami: "نمایش بیوگرافی و افتخارات علمی",
            termHelpSkills: "لیست مهارت‌ها و استک فنی",
            termHelpExperience: "سوابق کاری در رویال نوین و سلفچگان",
            termHelpProjects: "مشاهده پروژه‌های گیت‌هاب و لایو",
            termHelpCertifications: "مشاهده مدارک با نمره ۱۰۰٪ از کوئرا",
            termHelpContact: "اطلاعات تماس مستقیم و شبکه‌ها",
            termHelpResume: "دانلود رزومه رسمی PDF",
            termHelpSound: "روشن/خاموش کردن جلوه‌های صوتی",
            termHelpCanvas: "تغییر حالت پس‌زمینه (constellation, matrix, fluid, zen)",
            termHelpMatrix: "اجرای افکت دیجیتال باران ماتریکس",
            termHelpClear: "پاک‌کردن کنسول ترمینال",
            termHelpExit: "بستن پنجره ترمینال",

            // Toasts
            toastEmailCopied: "آدرس ایمیل (matintalkhabidev@gmail.com) کپی شد!",
            toastCanvasSwitched: "حالت انیمیشن تغییر کرد به: ",
            toastSoundToggled: "وضعیت صدا: "
        }
    };

    let currentLang = localStorage.getItem('site_lang') || 'en';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('site_lang', lang);

        const dict = translations[lang] || translations.en;
        document.documentElement.lang = lang;
        document.documentElement.dir = (lang === 'fa') ? 'rtl' : 'ltr';
        document.title = dict.siteTitle;

        // Update all elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.textContent = dict[key];
            }
        });

        // Update language toggle button text
        const langToggleBtn = document.getElementById('lang-toggle-btn');
        if (langToggleBtn) {
            const label = langToggleBtn.querySelector('.lang-label');
            if (label) {
                label.textContent = (lang === 'en') ? 'فا' : 'EN';
            } else {
                langToggleBtn.textContent = (lang === 'en') ? 'فا' : 'EN';
            }
        }

        // Update search placeholder
        const searchInput = document.getElementById('project-search-input');
        if (searchInput && dict.searchPlaceholder) {
            searchInput.placeholder = dict.searchPlaceholder;
        }

        // Update palette search placeholder
        const paletteSearch = document.getElementById('palette-search-input');
        if (paletteSearch && dict.palettePlaceholder) {
            paletteSearch.placeholder = dict.palettePlaceholder;
        }

        // Restart typewriter with language words
        startTypewriter();
    }

    /* ==========================================================================
       3. Live Tehran Clock (Asia/Tehran - GMT+3:30)
       ========================================================================== */
    function updateTehranClock() {
        const clockEl = document.getElementById('live-tehran-clock');
        if (!clockEl) return;

        const now = new Date();
        try {
            const tehranTime = now.toLocaleTimeString('en-US', {
                timeZone: 'Asia/Tehran',
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            clockEl.textContent = `${tehranTime} IRST`;
        } catch (e) {
            const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
            const tehranDate = new Date(utc + (3600000 * 3.5));
            const pad = n => String(n).padStart(2, '0');
            clockEl.textContent = `${pad(tehranDate.getHours())}:${pad(tehranDate.getMinutes())}:${pad(tehranDate.getSeconds())} IRST`;
        }
    }

    setInterval(updateTehranClock, 1000);
    updateTehranClock();

    /* ==========================================================================
       4. Multi-Mode Canvas Visual Engine
       Modes: 'constellation' (default) | 'matrix' | 'fluid' | 'zen'
       ========================================================================== */
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas ? canvas.getContext('2d') : null;

    let canvasMode = localStorage.getItem('site_canvas_mode') || 'constellation';
    let isTabActive = true;
    let mouseMoved = false;

    const pointer = {
        x: window.innerWidth * 0.5,
        y: window.innerHeight * 0.5
    };

    // Mode 1: Constellation Nodes
    const constellationNodes = [];
    const NODE_COUNT = 55;

    function initConstellation() {
        constellationNodes.length = 0;
        const w = window.innerWidth;
        const h = window.innerHeight;
        for (let i = 0; i < NODE_COUNT; i++) {
            constellationNodes.push({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.75,
                vy: (Math.random() - 0.5) * 0.75,
                radius: Math.random() * 1.8 + 1,
                alpha: Math.random() * 0.4 + 0.2
            });
        }
    }

    // Mode 2: Matrix Rain
    const matrixColumns = [];
    const matrixChars = "0123456789ABCDEF<>/*+-~={}$#@!%";
    const FONT_SIZE = 14;

    function initMatrix() {
        matrixColumns.length = 0;
        const cols = Math.floor(window.innerWidth / FONT_SIZE);
        for (let i = 0; i < cols; i++) {
            matrixColumns.push({
                y: Math.random() * -100,
                speed: Math.random() * 2 + 1.5
            });
        }
    }

    // Mode 3: Fluid Cursor Ribbon
    const FLUID_POINTS = 35;
    const fluidTrail = [];
    for (let i = 0; i < FLUID_POINTS; i++) {
        fluidTrail.push({ x: pointer.x, y: pointer.y, dx: 0, dy: 0 });
    }

    // Mode 4: Zen Ambient Floating Dust
    const zenDust = [];
    const ZEN_COUNT = 45;

    function initZen() {
        zenDust.length = 0;
        const w = window.innerWidth;
        const h = window.innerHeight;
        for (let i = 0; i < ZEN_COUNT; i++) {
            zenDust.push({
                x: Math.random() * w,
                y: Math.random() * h,
                vy: -Math.random() * 0.35 - 0.1,
                vx: (Math.random() - 0.5) * 0.2,
                size: Math.random() * 2.5 + 1,
                hue: Math.random() > 0.5 ? 210 : 255,
                alpha: Math.random() * 0.5 + 0.15
            });
        }
    }

    function setupCanvasDimensions() {
        if (!canvas || !ctx) return;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        ctx.scale(dpr, dpr);

        initConstellation();
        initMatrix();
        initZen();
    }

    window.addEventListener('mousemove', e => {
        mouseMoved = true;
        pointer.x = e.clientX;
        pointer.y = e.clientY;
    });

    window.addEventListener('touchmove', e => {
        if (e.touches.length > 0) {
            mouseMoved = true;
            pointer.x = e.touches[0].clientX;
            pointer.y = e.touches[0].clientY;
        }
    }, { passive: true });

    document.addEventListener('visibilitychange', () => {
        isTabActive = !document.hidden;
    });

    function renderCanvasFrame(timestamp) {
        if (!isTabActive || !canvas || !ctx) {
            requestAnimationFrame(renderCanvasFrame);
            return;
        }

        const width = window.innerWidth;
        const height = window.innerHeight;

        if (!mouseMoved) {
            pointer.x = (0.5 + 0.28 * Math.cos(0.001 * timestamp) * Math.sin(0.002 * timestamp)) * width;
            pointer.y = (0.5 + 0.18 * Math.sin(0.0016 * timestamp)) * height;
        }

        if (canvasMode === 'matrix') {
            ctx.fillStyle = 'rgba(3, 7, 18, 0.12)';
            ctx.fillRect(0, 0, width, height);

            ctx.font = `${FONT_SIZE}px "JetBrains Mono", monospace`;
            matrixColumns.forEach((col, idx) => {
                const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
                const x = idx * FONT_SIZE;
                const y = col.y;

                ctx.fillStyle = 'rgba(56, 189, 248, 0.85)';
                ctx.fillText(char, x, y);

                ctx.fillStyle = '#ffffff';
                ctx.fillText(char, x, y + FONT_SIZE);

                col.y += col.speed * 4;
                if (col.y > height && Math.random() > 0.96) {
                    col.y = 0;
                    col.speed = Math.random() * 2 + 1.5;
                }
            });
        } else {
            ctx.clearRect(0, 0, width, height);

            if (canvasMode === 'constellation') {
                ctx.lineWidth = 1;
                for (let i = 0; i < constellationNodes.length; i++) {
                    const n = constellationNodes[i];
                    n.x += n.vx;
                    n.y += n.vy;

                    if (n.x < 0 || n.x > width) n.vx *= -1;
                    if (n.y < 0 || n.y > height) n.vy *= -1;

                    const dx = pointer.x - n.x;
                    const dy = pointer.y - n.y;
                    const distToMouse = Math.sqrt(dx * dx + dy * dy);
                    if (distToMouse < 180) {
                        n.x += (dx / distToMouse) * 0.4;
                        n.y += (dy / distToMouse) * 0.4;
                    }

                    ctx.beginPath();
                    ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(99, 102, 241, ${n.alpha})`;
                    ctx.fill();

                    for (let j = i + 1; j < constellationNodes.length; j++) {
                        const n2 = constellationNodes[j];
                        const d = Math.hypot(n.x - n2.x, n.y - n2.y);
                        if (d < 110) {
                            const lineAlpha = (1 - d / 110) * 0.2;
                            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
                            ctx.beginPath();
                            ctx.moveTo(n.x, n.y);
                            ctx.lineTo(n2.x, n2.y);
                            ctx.stroke();
                        }
                    }

                    if (distToMouse < 140) {
                        const mouseLineAlpha = (1 - distToMouse / 140) * 0.35;
                        ctx.strokeStyle = `rgba(99, 102, 241, ${mouseLineAlpha})`;
                        ctx.beginPath();
                        ctx.moveTo(n.x, n.y);
                        ctx.lineTo(pointer.x, pointer.y);
                        ctx.stroke();
                    }
                }
            } else if (canvasMode === 'fluid') {
                fluidTrail.forEach((p, idx) => {
                    const prev = idx === 0 ? pointer : fluidTrail[idx - 1];
                    const spring = idx === 0 ? 0.4 : 0.35;
                    p.dx += (prev.x - p.x) * spring;
                    p.dy += (prev.y - p.y) * spring;
                    p.dx *= 0.55;
                    p.dy *= 0.55;
                    p.x += p.dx;
                    p.y += p.dy;
                });

                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                ctx.beginPath();
                ctx.moveTo(fluidTrail[0].x, fluidTrail[0].y);
                for (let i = 1; i < fluidTrail.length - 1; i++) {
                    const xc = 0.5 * (fluidTrail[i].x + fluidTrail[i + 1].x);
                    const yc = 0.5 * (fluidTrail[i].y + fluidTrail[i + 1].y);
                    ctx.quadraticCurveTo(fluidTrail[i].x, fluidTrail[i].y, xc, yc);
                }
                ctx.lineWidth = 4;
                ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
                ctx.stroke();

                ctx.lineWidth = 1.5;
                ctx.strokeStyle = 'rgba(99, 102, 241, 0.6)';
                ctx.stroke();
            } else if (canvasMode === 'zen') {
                zenDust.forEach(p => {
                    p.y += p.vy;
                    p.x += p.vx;
                    if (p.y < 0) {
                        p.y = height + 10;
                        p.x = Math.random() * width;
                    }
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fillStyle = `hsla(${p.hue}, 90%, 65%, ${p.alpha})`;
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = `hsla(${p.hue}, 90%, 65%, 0.5)`;
                    ctx.fill();
                    ctx.shadowBlur = 0;
                });
            }
        }

        requestAnimationFrame(renderCanvasFrame);
    }

    function setCanvasMode(mode) {
        canvasMode = mode;
        localStorage.setItem('site_canvas_mode', mode);
        updateCanvasButton();
        const dict = translations[currentLang] || translations.en;
        showToast(dict.toastCanvasSwitched + mode.toUpperCase());
    }

    function cycleCanvasMode() {
        const modes = ['constellation', 'matrix', 'fluid', 'zen'];
        const nextIdx = (modes.indexOf(canvasMode) + 1) % modes.length;
        setCanvasMode(modes[nextIdx]);
        soundFx.click();
    }

    function updateCanvasButton() {
        const btn = document.getElementById('canvas-mode-btn');
        if (!btn) return;
        btn.setAttribute('title', `Canvas Visuals: ${canvasMode.toUpperCase()} (Press C)`);
        const label = btn.querySelector('.canvas-mode-label');
        if (label) label.textContent = canvasMode.slice(0, 4).toUpperCase();
    }

    /* ==========================================================================
       5. Bento Spotlight Hover Illumination Tracker
       Updates --mouse-x and --mouse-y on every .bento-card
       ========================================================================== */
    function initSpotlightTracker() {
        const bentoCards = document.querySelectorAll('.bento-card, .featured-card');
        if (!bentoCards.length) return;

        window.addEventListener('mousemove', e => {
            bentoCards.forEach(card => {
                const rect = card.getBoundingClientRect();
                if (
                    e.clientX >= rect.left - 200 &&
                    e.clientX <= rect.right + 200 &&
                    e.clientY >= rect.top - 200 &&
                    e.clientY <= rect.bottom + 200
                ) {
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                }
            });
        });
    }

    /* ==========================================================================
       6. Typewriter Effect
       ========================================================================== */
    let typewriterTimer = null;
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function startTypewriter() {
        const textElement = document.getElementById('typewriter-text');
        if (!textElement) return;

        if (typewriterTimer) clearTimeout(typewriterTimer);
        wordIndex = 0;
        charIndex = 0;
        isDeleting = false;

        function tick() {
            const dict = translations[currentLang] || translations.en;
            const words = dict.typewriter || [];
            if (!words.length) return;

            const currentWord = words[wordIndex % words.length];

            if (isDeleting) {
                textElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                textElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 30 : 65;

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2200;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex++;
                typeSpeed = 400;
            }

            typewriterTimer = setTimeout(tick, typeSpeed);
        }

        tick();
    }

    /* ==========================================================================
       7. Modals System (Projects Explorer, Resume, Terminal)
       ========================================================================== */
    function openModal(modalId) {
        soundFx.action();
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');

            if (modalId === 'terminal-modal') {
                const input = document.getElementById('terminal-input');
                if (input) setTimeout(() => input.focus(), 150);
            } else if (modalId === 'projects-modal') {
                const search = document.getElementById('project-search-input');
                if (search) setTimeout(() => search.focus(), 150);
            }
        }
    }

    function closeModal(modal) {
        if (modal) {
            soundFx.click();
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
        }
    }

    function closeAllModals() {
        document.querySelectorAll('.modal-overlay.active, .palette-overlay.active').forEach(closeModal);
    }

    function initModalTriggers() {
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
    }

    /* ==========================================================================
       8. Command Palette Engine (Cmd+K / Raycast Style)
       ========================================================================== */
    const paletteOverlay = document.getElementById('palette-overlay');
    const paletteSearchInput = document.getElementById('palette-search-input');
    const paletteResultsList = document.getElementById('palette-results-list');
    let selectedPaletteIndex = 0;

    const paletteActions = [
        { id: 'act-projects', title: 'Open All 46 Projects Explorer', category: 'navigation', shortcut: '⌘P', run: () => openModal('projects-modal') },
        { id: 'act-terminal', title: 'Launch Interactive CLI Terminal', category: 'navigation', shortcut: '~', run: () => openModal('terminal-modal') },
        { id: 'act-resume', title: 'View Professional Resume & Honors', category: 'navigation', shortcut: '⌘R', run: () => openModal('resume-modal') },
        { id: 'act-download-resume', title: 'Download Official Resume (PDF)', category: 'actions', shortcut: '⬇', run: () => {
            const link = document.createElement('a');
            link.href = 'matin-talkhabi-resume.pdf';
            link.download = 'Matin-Talkhabi-Resume.pdf';
            link.click();
        }},
        { id: 'act-copy-email', title: 'Copy Email (matintalkhabidev@gmail.com)', category: 'actions', shortcut: '⌘C', run: () => copyEmailToClipboard() },
        { id: 'act-toggle-sound', title: 'Toggle Web Audio UI Sounds', category: 'actions', shortcut: 'M', run: () => {
            const state = soundFx.toggleMute();
            const dict = translations[currentLang] || translations.en;
            showToast(dict.toastSoundToggled + (state ? 'Enabled' : 'Muted'));
        }},
        { id: 'act-toggle-lang', title: 'Toggle Language (Persian / English)', category: 'actions', shortcut: 'L', run: () => {
            const nextLang = (currentLang === 'en') ? 'fa' : 'en';
            setLanguage(nextLang);
        }},
        { id: 'act-canvas-constellation', title: 'Canvas Mode: Constellation Mesh', category: 'actions', shortcut: 'C', run: () => setCanvasMode('constellation') },
        { id: 'act-canvas-matrix', title: 'Canvas Mode: Cyberpunk Matrix Rain', category: 'actions', shortcut: 'C', run: () => setCanvasMode('matrix') },
        { id: 'act-canvas-fluid', title: 'Canvas Mode: Fluid Silk Ribbon', category: 'actions', shortcut: 'C', run: () => setCanvasMode('fluid') },
        { id: 'act-canvas-zen', title: 'Canvas Mode: Zen Minimal Dust', category: 'actions', shortcut: 'C', run: () => setCanvasMode('zen') },
        { id: 'act-github', title: 'Open GitHub Profile (Matin-Talkhabi)', category: 'links', shortcut: '↗', run: () => window.open('https://github.com/Matin-Talkhabi', '_blank') },
        { id: 'act-linkedin', title: 'Open LinkedIn Profile', category: 'links', shortcut: '↗', run: () => window.open('https://www.linkedin.com/in/matin-talkhabi', '_blank') },
        { id: 'act-telegram', title: 'Message on Telegram (@KMmatin_00)', category: 'links', shortcut: '↗', run: () => window.open('https://t.me/KMmatin_00', '_blank') }
    ];

    function openCommandPalette() {
        if (!paletteOverlay) return;
        soundFx.blip();
        paletteOverlay.classList.add('active');
        if (paletteSearchInput) {
            paletteSearchInput.value = '';
            setTimeout(() => paletteSearchInput.focus(), 80);
        }
        renderPaletteItems(paletteActions);
    }

    function closeCommandPalette() {
        if (!paletteOverlay) return;
        soundFx.click();
        paletteOverlay.classList.remove('active');
    }

    function renderPaletteItems(items) {
        if (!paletteResultsList) return;
        paletteResultsList.innerHTML = '';
        selectedPaletteIndex = 0;

        if (items.length === 0) {
            const noResults = document.createElement('div');
            noResults.className = 'palette-item';
            noResults.style.cursor = 'default';
            noResults.style.color = 'var(--text-muted)';
            noResults.textContent = 'No matching commands found.';
            paletteResultsList.appendChild(noResults);
            return;
        }

        items.forEach((item, idx) => {
            const el = document.createElement('div');
            el.className = `palette-item ${idx === 0 ? 'selected' : ''}`;
            el.setAttribute('data-index', idx);

            el.innerHTML = `
                <div class="palette-item-left">
                    <span class="palette-item-title">${item.title}</span>
                </div>
                <span class="palette-item-shortcut">${item.shortcut}</span>
            `;

            el.addEventListener('mouseenter', () => {
                document.querySelectorAll('.palette-item').forEach(i => i.classList.remove('selected'));
                el.classList.add('selected');
                selectedPaletteIndex = idx;
                soundFx.click();
            });

            el.addEventListener('click', () => {
                closeCommandPalette();
                item.run();
            });

            paletteResultsList.appendChild(el);
        });
    }

    function initCommandPalette() {
        if (paletteSearchInput) {
            paletteSearchInput.addEventListener('input', e => {
                const query = e.target.value.toLowerCase().trim();
                const filtered = paletteActions.filter(act => 
                    act.title.toLowerCase().includes(query) ||
                    act.category.toLowerCase().includes(query)
                );
                renderPaletteItems(filtered);
            });

            paletteSearchInput.addEventListener('keydown', e => {
                const visibleItems = paletteResultsList.querySelectorAll('.palette-item:not([style*="cursor: default"])');
                if (!visibleItems.length) return;

                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    selectedPaletteIndex = (selectedPaletteIndex + 1) % visibleItems.length;
                    soundFx.click();
                    visibleItems.forEach((el, idx) => {
                        el.classList.toggle('selected', idx === selectedPaletteIndex);
                        if (idx === selectedPaletteIndex) el.scrollIntoView({ block: 'nearest' });
                    });
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    selectedPaletteIndex = (selectedPaletteIndex - 1 + visibleItems.length) % visibleItems.length;
                    soundFx.click();
                    visibleItems.forEach((el, idx) => {
                        el.classList.toggle('selected', idx === selectedPaletteIndex);
                        if (idx === selectedPaletteIndex) el.scrollIntoView({ block: 'nearest' });
                    });
                } else if (e.key === 'Enter') {
                    e.preventDefault();
                    const selected = visibleItems[selectedPaletteIndex];
                    if (selected) selected.click();
                } else if (e.key === 'Escape') {
                    closeCommandPalette();
                }
            });
        }

        if (paletteOverlay) {
            paletteOverlay.addEventListener('click', e => {
                if (e.target === paletteOverlay) closeCommandPalette();
            });
        }

        const cmdBtn = document.getElementById('cmd-palette-btn');
        if (cmdBtn) {
            cmdBtn.addEventListener('click', openCommandPalette);
        }
    }

    /* ==========================================================================
       9. All 46 Projects Explorer: Search & Tab Filtering
       ========================================================================== */
    function initProjectsExplorer() {
        const searchInput = document.getElementById('project-search-input');
        const filterBtns = document.querySelectorAll('.projects-filter-bar .filter-btn');
        const projectItems = document.querySelectorAll('#projects-grid-list .project-item');
        const countBadge = document.getElementById('project-count');
        const noProjectsMsg = document.getElementById('no-projects-msg');

        let activeCategory = 'all';
        let searchQuery = '';

        function applyFilters() {
            let visibleCount = 0;
            const q = searchQuery.toLowerCase().trim();

            projectItems.forEach(card => {
                const category = card.getAttribute('data-category') || '';
                const title = (card.querySelector('.project-item-title') || {}).textContent || '';
                const desc = (card.querySelector('.project-item-desc') || {}).textContent || '';
                const tags = Array.from(card.querySelectorAll('.tech-tag')).map(t => t.textContent).join(' ');

                const matchesCategory = (activeCategory === 'all') || (category === activeCategory);
                const matchesSearch = !q || (
                    title.toLowerCase().includes(q) ||
                    desc.toLowerCase().includes(q) ||
                    tags.toLowerCase().includes(q)
                );

                if (matchesCategory && matchesSearch) {
                    card.style.display = 'flex';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
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
                soundFx.click();
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeCategory = btn.getAttribute('data-filter') || 'all';
                applyFilters();
            });
        });

        if (searchInput) {
            searchInput.addEventListener('input', e => {
                searchQuery = e.target.value;
                applyFilters();
            });
        }

        if (countBadge) countBadge.textContent = projectItems.length;
    }

    /* ==========================================================================
       10. Interactive CLI Terminal 3.0 Engine
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

    function runMatrixTerminalEffect() {
        appendTerminalLine("[*] Initializing Matrix digital rain sequence...", "system");
        const chars = "0123456789ABCDEF@#$%&*+-/<>~";
        let matrixInterval = setInterval(() => {
            let row = "";
            for (let i = 0; i < 48; i++) {
                row += chars[Math.floor(Math.random() * chars.length)] + " ";
            }
            appendTerminalLine(row, "success");
        }, 90);

        setTimeout(() => {
            clearInterval(matrixInterval);
            appendTerminalLine("[+] Matrix sequence completed.", "system");
        }, 2800);
    }

    const asciiBanner = `
  __  __       _   _         _____     _ _     _           _     _ 
 |  \\/  |     | | (_)       |_   _|   | | |   | |         | |   (_)
 | \\  / | __ _| |_ _ _ __     | | __ _| | |  _| |__   __ _| |__  _ 
 | |\\/| |/ _\` | __| | '_ \\    | |/ _\` | | | / / '_ \\ / _\` | '_ \\| |
 | |  | | (_| | |_| | | | |   | | (_| | | |< <| |_) | (_| | |_) | |
 |_|  |_|\\__,_|\\__|_|_| |_|   \\_/\\__,_|_|_| \\_\\_.__/ \\__,_|_.__/|_|
`;

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
            appendTerminalLine(`  sound          - ${dict.termHelpSound}`, "dim");
            appendTerminalLine(`  canvas <mode>  - ${dict.termHelpCanvas}`, "dim");
            appendTerminalLine(`  matrix         - ${dict.termHelpMatrix}`, "dim");
            appendTerminalLine(`  clear          - ${dict.termHelpClear}`, "dim");
            appendTerminalLine(`  exit           - ${dict.termHelpExit}`, "dim");
        },
        whoami: () => {
            appendTerminalLine("Matin Talkhabi (متین تلخابی) - Full-Stack Developer & Technical Lead", "success");
            appendTerminalLine("• Honors: National Elites Foundation Scholarship Recipient (بنیاد ملی نخبگان)", "warning");
            appendTerminalLine("• Education: B.Sc. in Computer Engineering, University of Qom (2023 - Present)", "dim");
            appendTerminalLine("• Architecture: High-throughput backend systems, Django/Python, React.js, and DB query optimization.", "dim");
        },
        skills: () => {
            appendTerminalLine("TECHNICAL SKILLS & COMPETENCIES:", "system");
            appendTerminalLine("  • Languages: Python, JavaScript (ES6+), HTML5, CSS3, C#, C++, PHP", "dim");
            appendTerminalLine("  • Backend:   Django, REST APIs, Database Optimization, Redis Caching, PostgreSQL/MySQL", "dim");
            appendTerminalLine("  • Frontend:  React.js, Tailwind CSS, Modern Responsive UI, Canvas 2D Physics", "dim");
            appendTerminalLine("  • DevOps:    Linux Server Administration, Docker, Git/GitHub, CI/CD, VoIP (Issabel/Asterisk)", "dim");
            appendTerminalLine("  • AI & Tool: Multi-agent AI Workflows, OpenCV, Process Automation", "dim");
        },
        experience: () => {
            appendTerminalLine("PROFESSIONAL EXPERIENCE:", "system");
            appendHtmlTerminalLine("<b>1. Royal Novin</b> (Jul 2023 – Present) | Full-Stack Developer & Technical Lead", "success");
            appendTerminalLine("   • End-to-end e-commerce ecosystem architect (novintoshak.ir).", "dim");
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
            appendHtmlTerminalLine("1. Advanced Algorithmic Thinking & Data Structures (100%) - <a href='https://quera.org/certificate/DyWDRI81/' target='_blank' style='color:#38bdf8'>Verify ↗</a>", "dim");
            appendHtmlTerminalLine("2. SQL & Database Design (100%) - <a href='https://quera.org/certificate/GXJgK2s7/' target='_blank' style='color:#38bdf8'>Verify ↗</a>", "dim");
            appendHtmlTerminalLine("3. Front-End Web Development (100%) - <a href='https://quera.org/certificate/6iyRXR8o/' target='_blank' style='color:#38bdf8'>Verify ↗</a>", "dim");
            appendHtmlTerminalLine("4. Task-Oriented Data Analysis with Excel (100%) - <a href='https://quera.org/certificate/GXJgK2s7/' target='_blank' style='color:#38bdf8'>Verify ↗</a>", "dim");
        },
        projects: () => {
            appendTerminalLine("FLAGSHIP PROJECTS & OPEN SOURCE:", "system");
            appendHtmlTerminalLine("• <b>novintoshak.ir</b>: Modular e-commerce platform (Django, React, Redis, -95% DB queries)", "dim");
            appendHtmlTerminalLine("• <b>warehouse-monitor</b>: Real-time Digikala warehouse capacity monitor with instant SMS alerts", "dim");
            appendHtmlTerminalLine("• <b>Dong-Bot</b>: Group financial expense management Telegram bot (Python)", "dim");
            appendHtmlTerminalLine("• <b>auto-daily-selfie</b>: Automated camera capture with OpenCV face detection & Jalali timestamps", "dim");
            appendHtmlTerminalLine("• <b>Professional-DNS-Tool</b>: High-speed DNS latency benchmarking & switcher for Windows", "dim");
            appendHtmlTerminalLine("• <b>leetcode-solutions</b>: Optimized algorithmic problem solutions in Python", "dim");
            appendTerminalLine("[!] Run 'projects' in command palette (⌘K) to search all 46 repositories.", "warning");
        },
        contact: () => {
            appendTerminalLine("DIRECT CONTACT CHANNELS:", "system");
            appendTerminalLine("  • Email:    matintalkhabidev@gmail.com", "dim");
            appendTerminalLine("  • Phone:    +989025967864 (Qom, Iran)", "dim");
            appendTerminalLine("  • Telegram: https://t.me/KMmatin_00", "dim");
            appendTerminalLine("  • LinkedIn: https://www.linkedin.com/in/matin-talkhabi", "dim");
            appendTerminalLine("  • GitHub:   https://github.com/Matin-Talkhabi", "dim");
        },
        resume: () => {
            appendTerminalLine("[*] Triggering official resume PDF download...", "system");
            const link = document.createElement('a');
            link.href = 'matin-talkhabi-resume.pdf';
            link.download = 'Matin-Talkhabi-Resume.pdf';
            link.click();
            openModal('resume-modal');
        },
        sound: () => {
            const state = soundFx.toggleMute();
            appendTerminalLine(`[+] UI Sound effects: ${state ? 'ENABLED' : 'MUTED'}`, "success");
        },
        canvas: (arg) => {
            const valid = ['constellation', 'matrix', 'fluid', 'zen'];
            if (!arg || !valid.includes(arg.toLowerCase())) {
                appendTerminalLine(`Usage: canvas <${valid.join('|')}>`, "warning");
                return;
            }
            setCanvasMode(arg.toLowerCase());
            appendTerminalLine(`[+] Background canvas mode set to: ${arg.toUpperCase()}`, "success");
        },
        matrix: () => {
            runMatrixTerminalEffect();
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

    function processTerminalCommand(raw) {
        const trimmed = raw.trim();
        if (!trimmed) return;

        soundFx.terminalBeep();
        appendTerminalLine(`matin@portfolio:~$ ${trimmed}`, "system");
        cmdHistory.push(trimmed);
        historyIndex = cmdHistory.length;

        const parts = trimmed.split(/\s+/);
        const cmd = parts[0].toLowerCase();
        const arg = parts.slice(1).join(' ');

        if (terminalCommands[cmd]) {
            terminalCommands[cmd](arg);
        } else {
            appendTerminalLine(`Command not found: '${trimmed}'. Type 'help' to see available commands.`, "error");
        }
    }

    function initTerminal() {
        if (terminalInput) {
            terminalInput.addEventListener('keydown', e => {
                if (e.key === 'Enter') {
                    processTerminalCommand(terminalInput.value);
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

        if (terminalOutput && terminalOutput.children.length === 0) {
            appendTerminalLine(asciiBanner, "ascii");
            const dict = translations[currentLang] || translations.en;
            appendTerminalLine(dict.termWelcome, "system");
        }
    }

    /* ==========================================================================
       11. Toast Notifications & Email Copy
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
        soundFx.action();
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(emailAddress)
                .then(() => {
                    const dict = translations[currentLang] || translations.en;
                    showToast(dict.toastEmailCopied);
                })
                .catch(() => promptCopyFallback());
        } else {
            promptCopyFallback();
        }
    }

    function promptCopyFallback() {
        window.prompt("Copy email address:", emailAddress);
    }

    function initCopyEmailButtons() {
        document.querySelectorAll('.copy-email-btn').forEach(btn => {
            btn.addEventListener('click', e => {
                e.preventDefault();
                copyEmailToClipboard();
            });
        });
    }

    /* ==========================================================================
       12. Global Keyboard Shortcuts Listener
       Cmd+K / Ctrl+K: Command Palette
       ~ or `: Terminal
       M or m: Toggle Sound (outside text inputs)
       L or l: Toggle Language (outside text inputs)
       C or c: Cycle Canvas Mode (outside text inputs)
       Escape: Close all modals
       ========================================================================== */
    function initKeyboardShortcuts() {
        window.addEventListener('keydown', e => {
            const isTyping = ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName);

            if (e.key === 'Escape') {
                closeAllModals();
                return;
            }

            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                if (paletteOverlay && paletteOverlay.classList.contains('active')) {
                    closeCommandPalette();
                } else {
                    closeAllModals();
                    openCommandPalette();
                }
                return;
            }

            if (e.key === '`' || e.key === '~') {
                if (!isTyping) {
                    e.preventDefault();
                    const term = document.getElementById('terminal-modal');
                    if (term && term.classList.contains('active')) {
                        closeModal(term);
                    } else {
                        closeAllModals();
                        openModal('terminal-modal');
                    }
                }
                return;
            }

            if (!isTyping) {
                if (e.key.toLowerCase() === 'm') {
                    e.preventDefault();
                    const state = soundFx.toggleMute();
                    const dict = translations[currentLang] || translations.en;
                    showToast(dict.toastSoundToggled + (state ? 'Enabled' : 'Muted'));
                } else if (e.key.toLowerCase() === 'l') {
                    e.preventDefault();
                    const nextLang = (currentLang === 'en') ? 'fa' : 'en';
                    setLanguage(nextLang);
                } else if (e.key.toLowerCase() === 'c') {
                    e.preventDefault();
                    cycleCanvasMode();
                }
            }
        });
    }

    /* ==========================================================================
       13. App Initializer
       ========================================================================== */
    document.addEventListener('DOMContentLoaded', () => {
        setupCanvasDimensions();
        window.addEventListener('resize', setupCanvasDimensions);
        requestAnimationFrame(renderCanvasFrame);

        initSpotlightTracker();
        initModalTriggers();
        initCommandPalette();
        initProjectsExplorer();
        initTerminal();
        initCopyEmailButtons();
        initKeyboardShortcuts();

        const langToggleBtn = document.getElementById('lang-toggle-btn');
        if (langToggleBtn) {
            langToggleBtn.addEventListener('click', () => {
                soundFx.click();
                const nextLang = (currentLang === 'en') ? 'fa' : 'en';
                setLanguage(nextLang);
            });
        }

        const soundToggleBtn = document.getElementById('sound-toggle-btn');
        if (soundToggleBtn) {
            soundToggleBtn.addEventListener('click', () => {
                const state = soundFx.toggleMute();
                const dict = translations[currentLang] || translations.en;
                showToast(dict.toastSoundToggled + (state ? 'Enabled' : 'Muted'));
            });
            soundFx.updateUi();
        }

        const canvasModeBtn = document.getElementById('canvas-mode-btn');
        if (canvasModeBtn) {
            canvasModeBtn.addEventListener('click', () => {
                cycleCanvasMode();
            });
            updateCanvasButton();
        }

        setLanguage(currentLang);
    });

})();