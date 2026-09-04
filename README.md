# Matin Talkhabi - Personal Portfolio & Interactive Profile Website

A fast, minimalist, and interactive single-page developer profile and personal branding website. Built with clean semantic HTML5, CSS3 Glassmorphism, and Vanilla JavaScript with zero external runtime dependencies.

![Website Preview](style/favicon.ico)

---

## ✨ Features

- **3D Tilt Holographic Card**: Interactive profile card that smoothly tilts in 3D based on mouse position with light glare reflection.
- **Dynamic Typewriter Subtitle**: Rotating titles showcasing developer roles with smooth backspacing animation.
- **Interactive CLI Terminal**:
  - Full developer terminal popup accessible via the dock button or pressing the `` ` `` or `~` key on your keyboard.
  - Built-in commands: `help`, `whoami`, `skills`, `projects`, `contact`, `resume`, `clear`, `date`, `matrix`, and `exit`.
  - Matrix digital rain Easter egg (`matrix` command).
  - Terminal history navigation with `ArrowUp` and `ArrowDown` keys.
- **Retina Canvas Mouse Trail**: Custom smooth mouse-following trail rendered on HTML5 Canvas with HiDPI / Retina device pixel ratio scaling and auto-pause when the browser tab is hidden.
- **Bilingual Support (English & Persian)**:
  - Instant toggle between English (LTR, Inter font) and Persian (RTL, Vazirmatn font).
  - Remembers user's language preference in `localStorage`.
- **Modals System**:
  - **Projects Modal**: Clean cards showcasing featured work with tags and source links.
  - **Skills Modal**: Categorized tech stack chips (Frontend, Tools, Design).
  - **Resume Modal**: Career and education summary with quick print/download action.
- **One-Click Email Copy**: Direct copy button with toast notification.
- **Clean Architecture & 100% Static**:
  - Zero build steps or package managers required.
  - No bloated dependencies or dead code.
  - Runs directly by opening `index.html` in any browser.

---

## 🚀 Running Locally

Simply double-click `index.html` or open it with any web browser or live server:

```bash
# Optional: using python's built-in server
python -m http.server 8000
```

---

## 🛠️ Personalization & Customization

1. **Personal Information**: Update your name, bio, and social links in `index.html`.
2. **Translations**: Edit the `translations` object inside `style/style.js` to customize texts in both English and Persian.
3. **Projects & Skills**: Add or remove project items in `index.html` under the `#projects-modal` section.
4. **Email Address**: Modify `emailAddress` in `style/style.js` to change the one-click copy target.

---

## 🌐 Deployment (GitHub Pages)

1. Push your changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Upgrade portfolio with 3D tilt, terminal, and modals"
   git push origin main
   ```
2. In your repository on GitHub, navigate to **Settings** > **Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`, select `main`, and folder `/ (root)`.
4. Your website will be live at: `https://<username>.github.io/<repository-name>/`.

---

## 📄 License

Licensed under the [MIT License](LICENSE).