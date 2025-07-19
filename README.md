# Paper Trader

A modern, multi-page paper trading simulation platform built with HTML, CSS (Tailwind + custom design system), and JavaScript. This project is designed for easy customization and can be used as a static site or as a base for any frontend framework or template engine.

## Requirements
- [Node.js](https://nodejs.org/) (v16 or higher recommended)

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```
   This will start Vite and open the site at [http://localhost:5173](http://localhost:5173).

3. **Build for production:**
   ```sh
   npm run build
   # or
   yarn build
   # or
   pnpm build
   ```
   The built files will be in the `dist/` directory.

4. **Preview the production build:**
   ```sh
   npm run preview
   # or
   yarn preview
   # or
   pnpm preview
   ```

## Deploying to Shared Hosting

1. **Build the site for production:**
   ```sh
   npm run build
   # or
   yarn build
   # or
   pnpm build
   ```
   This will generate a `dist/` folder with all the static files.

2. **Upload to your shared hosting:**
   - Use your hosting provider's file manager or an FTP client (like FileZilla).
   - Copy all the contents of the `dist/` folder (not the folder itself, just its contents) into your hosting's `public_html` or `www` directory (or the root directory for your domain).
   - Make sure `index.html` is at the root of your public directory.

3. **Access your site:**
   - Visit your domain in a browser. Your site should load instantly!

**Notes:**
- No server-side code is required; this is a static site.
- If you use subfolders for your pages, make sure your links are relative or update them as needed for your hosting environment.
- If you use a custom domain, point it to your shared hosting as per your provider's instructions.

## Project Structure

- `index.html` — Home page, hero, market overview, features.
- `about.html` — About the platform, mission, team, story, FAQ.
- `contact.html` — Contact form, company info, social links, FAQ.
- `auth.html` — Login/Sign Up with tab switching, validation, and social login.
- `markets.html` — Tradable assets table with filters and live price simulation.
- `trading.html` — Trading interface: price ticker, asset selector, candlestick/line chart, order panel, order book, and trades.
- `portfolio.html` — User's simulated holdings, summary stats, and a performance chart.
- `src/` — Contains `style.css` (Tailwind + custom CSS), `main.js` (site-wide JS for theme, nav, animation), and other assets.
- `public/` — Static assets (images, icons, etc.) copied as-is to `dist/`.

## Code Pattern & Best Practices
- **Multi-page HTML:** Each page is a standalone HTML file, sharing a common header, footer, and design system.
- **Design System:** All colors, spacing, and component styles are defined in `src/style.css` and `design-system.json` for consistency and easy theming.
- **Responsive & Accessible:** Uses Tailwind utility classes and custom CSS for mobile-first, accessible layouts.
- **Reusable Components:** Navigation, footer, and cards are reused across pages for a consistent look.
- **JS Modules:** `src/main.js` handles theme toggling, mobile nav, smooth scrolling, and animation. Page-specific scripts are included inline or as needed.
- **No backend required:** All data is mock/static, but the structure is ready for API integration.

## How to Convert to a Frontend Framework or Template Engine

1. **Choose your framework:** (React, Vue, Svelte, Angular, Next.js, Nuxt, Astro, etc.)
2. **Split HTML into components:**
   - Extract header, footer, nav, and repeated sections into components/partials.
   - Move page-specific content into their own files/views.
3. **Move CSS:**
   - Import `src/style.css` into your framework's main CSS entry.
   - If using Tailwind, keep the config and use PostCSS as in this project.
4. **Convert scripts:**
   - Move `main.js` logic into your framework's global/app component or layout.
   - Page-specific JS can become component logic or hooks.
5. **Routing:**
   - Use your framework's router to map URLs to pages/components.
6. **Template variables:**
   - Replace static mock data with props, state, or API calls as needed.
7. **Assets:**
   - Move images and static files to your framework's public/static directory.

**Example:**
- In React, `index.html` becomes `App.js` or a `HomePage` component.
- In Next.js, each page becomes a file in `pages/`.
- In a template engine (EJS, Handlebars, Nunjucks), use `include`/`partial` for header/footer and pass data as variables.

## Customization
- Update `design-system.json` and `src/style.css` to change colors, spacing, or component styles.
- Add or remove pages by editing the `vite.config.ts` input and creating new HTML files.
- Replace mock data with real API calls as needed.

## License
MIT — free for personal and commercial use. 