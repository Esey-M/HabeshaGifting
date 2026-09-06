# Artwork inbox

Drop illustrations here named after the slug they belong to, then run:

    npm run artwork

The script resizes each file to every width the site serves, writes WebP into
`public/img/`, and adds the `image` field to the matching product or category
in the content model. Sources are moved to `processed/` (gitignored) afterwards.

Requirements:

- **Name the file after the slug**, e.g. `traditional-clay-jebena-coffee-pot.png`.
  The slug must already exist in the content model or the file is skipped.
- **3:2 aspect ratio** (1536x1024 is what the image tools produce). Anything
  else is skipped rather than silently cropped.

Use `npm run artwork -- --dry` to see what would happen without writing.

Slugs live in `src/content/products.*.ts` and `src/content/categories.ts`.
