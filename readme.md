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

Each page can have its own meta description and Open Graph image. Update the `pages` object in `vite.config.js` to customize SEO-related information for each page:

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
  // Add more pages as needed
};
```

This configuration allows you to:
- Set unique titles for each page
- Provide custom meta descriptions
- Specify Open Graph images for social media sharing

The Handlebars templates will automatically use this information to populate the appropriate meta tags in the HTML head section of each page.

## Performance Optimization

This template includes several performance optimizations:

1. **CSS Optimization**: The production build uses `cssnano` to minify and optimize CSS.
2. **JavaScript Minification**: Vite automatically minifies JavaScript in production builds.
3. **Font Loading**: The template uses a preconnect link for Google Fonts and loads the font stylesheet asynchronously to improve loading performance.
4. **Responsive Images**: Use responsive image techniques and optimize images for different screen sizes.

## Browser Support

This template is designed to work with modern browsers. For older browser support, consider adding appropriate polyfills and adjusting the Browserslist configuration in `package.json`.

## Deployment

To deploy your site:

1. Run `npm run build` to create a production-ready build.
2. Upload the contents of the `dist` directory to your web server or hosting platform.

For platform-specific deployment instructions, refer to the documentation of your chosen hosting provider.

## Troubleshooting

If you encounter any issues:

1. Ensure all dependencies are installed (`npm install`).
2. Check for any console errors in the browser developer tools.
3. Verify that your Node.js version meets the minimum requirements.

For more help, please open an issue on the GitHub repository.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [TailwindCSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Handlebars](https://handlebarsjs.com/)
