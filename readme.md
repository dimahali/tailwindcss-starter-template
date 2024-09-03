# TailwindCSS Starter Template

This project is a starter template for building websites using TailwindCSS, Vite, and Handlebars. It's designed to provide a quick and easy setup for creating responsive, modern websites with a focus on utility-first CSS.

## Features

- TailwindCSS for rapid UI development
- Vite for fast build times and hot module replacement
- Handlebars for templating
- Dark mode support
- Responsive design
- SEO-friendly structure

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (version 14 or later)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/tailwindcss-starter-template.git
   ```

2. Navigate to the project directory:
   ```
   cd tailwindcss-starter-template
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

### Development

To start the development server:

```
npm run dev
```

This will start a local server. The page will automatically reload if you make changes to the source files.

### Building for Production

To build the project for production:

```
npm run build
```

This will generate optimized files in the `dist` directory.

### Previewing the Production Build

To preview the production build locally:

```
npm run preview
```

## Project Structure

- `src/`: Source files
  - `index.html`: Main HTML file
  - `css/`: CSS files
    - `style.css`: Main CSS file (includes Tailwind directives)
  - `js/`: JavaScript files
    - `app.js`: Main JavaScript file
  - `partials/`: Handlebars partial templates
- `public/`: Static assets
- `vite.config.js`: Vite configuration file

## Customization

### Tailwind Configuration

You can customize the Tailwind configuration in the `tailwind.config.js` file. Refer to the [Tailwind documentation](https://tailwindcss.com/docs/configuration) for more details.

### Adding Pages

To add new pages:

1. Create a new HTML file in the `src/` directory.
2. Update the `pages` object in `vite.config.js` to include the new page:

```javascript
const pages = {
  '/index.html': {
    title: 'Home',
    metaDescription: 'Home Page Meta Description',
    imageUrl: '/assets/images/og-image.png',
  },
  '/page/index.html': {
    title: 'Nested page',
    metaDescription: 'Sample Nested Page Meta Description',
    imageUrl: '/assets/images/og-image.png',
  }
  // Add your new page here
};
```

### Modifying Templates

Handlebars templates are located in the `src/partials/` directory. You can edit existing partials or add new ones as needed.

### Styling

Global styles can be added to `src/css/style.css`. For component-specific styles, consider using Tailwind's `@apply` directive or creating new CSS files and importing them into `style.css`.

### JavaScript

The main JavaScript file is `src/js/app.js`. You can add your custom JavaScript code here or create new files and import them into `app.js`.

## SEO Optimization

Each page can have its own meta description and Open Graph image. Update the `pages` object
