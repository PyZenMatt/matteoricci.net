# Matteo Ricci - Portfolio Website

A modern, responsive portfolio website built with Jekyll and designed for GitHub Pages.

## 🚀 Features

- **Modern Design**: Clean, minimal design inspired by Vercel and modern developer portfolios
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading with optimized CSS and minimal JavaScript
- **SEO Ready**: Built-in SEO optimization with meta tags and structured data
- **Easy to Customize**: Well-structured code that's easy to modify and extend

## 🛠️ Tech Stack

- **Jekyll**: Static site generator
- **HTML5 & CSS3**: Modern web standards
- **JavaScript**: Minimal vanilla JS for interactions
- **GitHub Pages**: Hosting platform

## 📂 Project Structure

```
├── _layouts/           # Jekyll layouts
│   └── portfolio.html  # Main portfolio layout
├── index.html          # Homepage/portfolio
├── _config-portfolio.yml # Jekyll configuration
├── Gemfile-portfolio   # Ruby dependencies
└── README.md          # This file
```

## 🎨 Sections

1. **Hero**: Introduction with name, tagline, and CTA
2. **About**: Brief personal and professional overview
3. **Skills**: Technology stack with visual icons
4. **Projects**: Featured projects with links
5. **Contact**: Contact information and CTA
6. **Footer**: Social links and copyright

## 🚀 Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/PyZenMatt/matteoricci.net.git
cd matteoricci.net
```

2. Install dependencies:
```bash
bundle install
```

3. Serve locally:
```bash
bundle exec jekyll serve --config _config-portfolio.yml
```

4. Open in browser: `http://localhost:4000`

### GitHub Pages Deployment

1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to main branch
4. Your site will be available at `https://yourusername.github.io`

## ✏️ Customization

### Basic Information
Edit the frontmatter in `index.html` and `_config-portfolio.yml`:

```yaml
title: "Your Name - Full Stack Developer"
email: "your@email.com"
description: "Your description"
```

### Skills & Technologies
Update the skills section in `index.html`:

```html
<div class="skill-card">
  <div class="skill-icon">🐍</div>
  <div class="skill-name">Python</div>
  <div class="skill-level">Advanced</div>
</div>
```

### Projects
Modify the projects section:

```html
<div class="project-card">
  <div class="project-info">
    <h3 class="project-title">Project Name</h3>
    <p class="project-desc">Project description</p>
    <div class="project-links">
      <a href="#" class="project-link">Live Demo →</a>
      <a href="#" class="project-link">GitHub →</a>
    </div>
  </div>
</div>
```

### Colors & Styling
Main color variables are in the CSS:

```css
/* Primary colors */
background: #ffffff;
color: #1a1a1a;
accent: #666;

/* You can customize these throughout the CSS */
```

## 📱 Responsive Design

The portfolio is mobile-first and includes breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🔧 Advanced Customization

### Adding New Sections
1. Add HTML section in `index.html`
2. Add corresponding CSS styles
3. Update navigation menu

### Jekyll Collections
For dynamic content like blog posts or projects:

```yaml
# In _config-portfolio.yml
collections:
  projects:
    output: true
    permalink: /:collection/:name/
```

### Analytics
Add Google Analytics in `_layouts/portfolio.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
```

## 🎯 SEO Optimization

- Meta tags for social sharing (Open Graph, Twitter Cards)
- Structured data markup
- Semantic HTML
- Fast loading times
- Mobile-friendly design

## 📧 Contact Integration

Currently set up with:
- Direct email link: `mailto:matteo@matteoricci.net`
- Easy to integrate with contact forms
- Social media links in footer

## 🔄 Updates & Maintenance

To update content:
1. Edit `index.html` for main content
2. Update `_config-portfolio.yml` for site settings
3. Commit and push to GitHub
4. GitHub Pages will auto-deploy

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements, pull requests are welcome!

## 📞 Support

If you have questions or need help customizing this portfolio:
- Open an issue on GitHub
- Contact: matteo@matteoricci.net

---

Built with ❤️ by Matteo Ricci
