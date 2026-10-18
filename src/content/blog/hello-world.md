---
title: 'Hello, world'
description: 'Why I started this blog, and how to add a new post.'
pubDate: 2026-10-18
tags: ['meta']
---

Welcome! This is the first post on my new site.

## Adding a post

Create a new `.md` (or `.mdx`) file in `src/content/blog/`. The filename becomes the URL, so `my-post.md` is served at `/blog/my-post/`. Start the file with frontmatter:

```md
---
title: 'My post'
description: 'One sentence summary shown in lists and link previews.'
pubDate: 2026-10-20
tags: ['typescript']
draft: true # optional: hidden from production builds
---
```

Everything below the frontmatter is regular Markdown, including code blocks:

```ts
const greet = (name: string) => `Hello, ${name}!`;
console.log(greet('world'));
```
