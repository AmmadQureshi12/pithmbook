# Fundamentals of Accounting

A static, GitHub Pages-ready book reader. Each chapter opens in its own PDF reader, preserving its page layout, tables, and diagrams while keeping the reader focused on the selected study note. The redesigned interface includes a book-wide text search, responsive chapter navigation, reader section links, and a light/dark theme switch.

## Publish with GitHub Pages

1. Push `index.html`, `styles.css`, `app.js`, `search-index.json`, `fundamentals-of-accounting.pdf`, and the four PDFs in `chapters/` to the repository's `main` branch.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/(root)`, then click **Save**.

The site URL is `https://<username>.github.io/<repository>/`. Keep the original PDF and `search-index.json` next to `index.html`, and the chapter PDFs in `chapters/`. The search index contains extracted, searchable page text; no build step or external runtime dependency is needed to publish the site.
