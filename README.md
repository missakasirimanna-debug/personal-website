# Missaka Sirimanna — Personal Portfolio

A responsive personal portfolio built from scratch with HTML, CSS and vanilla JavaScript.

## Files
- `index.html` — page structure/content
- `style.css` — visual design and responsive layout
- `script.js` — mobile menu, dark/light mode and scroll animations

## Customize
1. Open `index.html`.
2. Replace the placeholder email and social URLs in the Contact section.
3. Add your real projects and GitHub links.
4. Replace the `MS` avatar with a photo if desired.
5. Open `index.html` in a browser to preview.

## Publish for free
You can deploy the folder with GitHub Pages, Netlify, Vercel, or another static hosting service.

## Beyond Code galleries
The main page links to these gallery pages: `astronomy.html`, `photography.html`, `guitar.html`, `travel.html`, `cycling.html`, and `formula1.html`.

Each gallery uses the shared `gallery.css` and `gallery.js`. To add a photo:
1. Upload the image into its matching `images/<category>/` folder.
2. Open that category's HTML page and add one `<figure>` line inside `<div class="photo-grid" id="photoGrid">`.
3. Commit and push the changes to GitHub Pages.

Example:
```html
<figure class="photo-card"><img src="images/cycling/triban-rc100.jpg" alt="My Triban RC100"><figcaption>My Triban RC100</figcaption></figure>
```
