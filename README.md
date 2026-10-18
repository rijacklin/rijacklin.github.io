# Personal site & blog

Built with [Astro](https://astro.build). Static, fast, Markdown-driven.

## Commands

| Command           | Action                                  |
| :---------------- | :-------------------------------------- |
| `npm install`     | Install dependencies                    |
| `npm run dev`     | Dev server at `localhost:4321`          |
| `npm run build`   | Build to `./dist/`                      |
| `npm run preview` | Preview the production build            |

## Where things live

- **Blog posts** — add `.md`/`.mdx` files to `src/content/blog/` (see `hello-world.md` for the frontmatter). Use `draft: true` to hide a post in production.
- **Bio, skills, experience, education, projects** — all in `src/data/profile.ts`.
- **Site title/description** — `src/consts.ts`. **Production URL** — `site` in `astro.config.mjs`.
- **Styling** — `src/styles/global.css` (CSS variables at the top; light/dark follows the OS).
- **Pages** — `src/pages/` (home, blog, about, projects, RSS at `/rss.xml`).

## More

- **Tags** — add `tags: ['a', 'b']` to a post; pages are generated at `/tags/<tag>/`.
- **Résumé** — `/resume` is generated from `profile.ts` and prints cleanly to PDF.
- **Deploy** — `.github/workflows/deploy.yml` publishes to GitHub Pages on push to `main` (enable Pages → "GitHub Actions" in repo settings, and set `site` in `astro.config.mjs`).
