# Presentation

Plain HTML/CSS/JS, no build step, no dependencies.

## Files
- `index.html`: page structure (rarely needs editing)
- `style.css`: layout, colors, positions (nose hit area is `#nose`)
- `script.js`: ALL content is at the top (title, topics, pages, lines, summaries)
- `assets/`: your images

## Controls
- Right arrow / Space / Enter / click: reveal next line, then next page
- Left arrow: previous page
- Esc: back to menu
- Click the nose (or press `C`): conclusion screen
- `1` `2` `3` on the menu: open a topic

## Run locally
Just open `index.html` in a browser.

## Put it online (GitHub Pages)
1. Upload these files to the repo root.
2. Repo Settings > Pages > Deploy from a branch > `main` / `(root)`.
3. Open the URL GitHub gives you.

Before presenting: set `debug: false` in `script.js`.
