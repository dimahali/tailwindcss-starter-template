import path from 'path';
import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { sync as globSync } from 'glob';
import handlebars from 'vite-plugin-handlebars';

const commonContext = {
  siteName: 'Your Site Name'
};

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
};

export default defineConfig({
  root: path.join(__dirname, 'src'),
  build: {
    outDir: path.join(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: globSync(path.resolve(__dirname, 'src', '**/*.html')),
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]',
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: path.resolve(__dirname, 'src/partials'),
      context(pagePath) {
        return { ...commonContext, ...pages[pagePath] };
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ],
    },
  }
});
