# Restaurant Page

A simple, responsive restaurant website built with vanilla JavaScript, HTML, and CSS. This project demonstrates modular JavaScript, dynamic DOM manipulation, and modern frontend tooling using Vite.

## Features

- **Single Page Navigation:** Switch between Home, Menu, and About sections without reloading the page.
- **Dynamic Content:** Each section is rendered dynamically using JavaScript modules.
- **Responsive Design:** Clean and modern layout that works on desktop and mobile.
- **Image Assets:** Menu items and sections feature appetizing images.
- **Easy Deployment:** Ready for deployment to GitHub Pages with a pre-configured GitHub Actions workflow.

## Project Structure

```
restaurant-page/
│
├── .editorconfig
├── .gitignore
├── .prettierrc.json
├── package.json
├── vite.config.js
├── README.md
├── .github/
│   └── workflows/
│       └── deploy.yml
├── assets/
│   └── ... (project screenshots and diagrams)
└── src/
    ├── index.html
    ├── main.js
    ├── css/
    │   └── style.css
    ├── img/
    │   ├── adana.jpeg
    │   ├── hamburger.jpeg
    │   ├── heart.gif
    │   ├── köfte.jpeg
    │   ├── pizza.jpeg
    │   ├── salad.jpeg
    │   └── tatli.jpeg
    └── js/
        ├── about.js
        ├── home.js
        └── menu.js
```

### Key Files

- **src/index.html**: Main HTML file, includes navigation and content container.
- **src/main.js**: Entry point, handles navigation and dynamic content loading.
- **src/js/home.js**: Renders the Home section.
- **src/js/menu.js**: Renders the Menu section with images and prices.
- **src/js/about.js**: Renders the About section.
- **src/css/style.css**: Styles for layout, navigation, and content.
- **vite.config.js**: Vite configuration for building and serving the project.
- **.github/workflows/deploy.yml**: GitHub Actions workflow for automatic deployment to GitHub Pages.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/restaurant-page.git
   cd restaurant-page
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Development

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
npm run build
```

The production-ready files will be in the `dist/` directory.

### Deployment

This project is configured to deploy automatically to GitHub Pages using [JamesIves/github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action). On every push to the `main` branch, the site will be built and deployed to the `gh-pages` branch.



