# sveltekit-css-load-bug

Reproduce bug where CSS that's loaded on hover affects the current page.

## To reproduce

1. Clone this repo
2. `pnpm install`
3. `pnpm dev`
4. Hit 'o'
5. Hover over the link and watch the h1 grow in size when the CSS for the other page is loaded.

Bug occurs when importing CSS with an `import` statement in a .svelte file.
