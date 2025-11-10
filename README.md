## Product Manager Portfolio (Static Site)

This is a lightweight static website with pages for About, Portfolio (with password-locked cards), project case studies, and Links.

### Structure
- `index.html` — About + Resume section and download link
- `portfolio.html` — Grid of project cards; supports locked/private items
- `links.html` — External links (LinkedIn, blog, startup)
- `projects/*` — Individual case study pages
- `assets/styles.css` — Shared styles
- `assets/main.js` — Shared scripts (year and password handling)
- `assets/resume.pdf` — Place your resume PDF here (not included)

### Getting Started
Open `index.html` in your browser. No build step or server required.

### Password-locked Cards
Locked cards use attributes on the anchor:
```html
<a class="card card-link" href="#" data-lock="true" data-password="demo123" data-target="projects/project-enterprise.html">...</a>
```
The script in `assets/main.js` prompts for the password and redirects to `data-target` on success.

### Customization
- Replace "Your Name" in headers/footers across pages.
- Update copy in `index.html` (About and Resume) and add your details.
- Replace images with your own or other sources.
- Add your actual resume as `assets/resume.pdf` to enable the download link.

### Notes
Password protection in a static site is cosmetic and not secure. Do not include confidential details on public hosting.


