# DSA Hub — How to use & deploy

A 7-week DSA resource site for your mentees. Each concept opens its own page with explanation, code, complexity, pitfalls, and an Apna College video link.

## File structure
```
.
├── index.html             ← main page (weeks + nav)
├── concept.html           ← template page for individual concept
├── styles.css             ← all styling
├── script.js              ← renders the weeks list
├── concept.js             ← renders one concept based on URL ?w=&i=
├── data.js                ← ⭐ EDIT THIS — all concepts, problems, etc.
├── images/                ← drop your AKG slide screenshots here
│   ├── week1/  week2/  week3/  ... week7/
├── pdfs/                  ← drop downloadable files here
└── HOW-TO-DEPLOY.md       ← this guide
```

## Edit a concept

Open `data.js`, find the week, find the concept by name. Each concept looks like:
```js
{
  name: "Two-pointer technique",
  explanation: "...",
  image: "",                                // ← paste path here once you save the slide
  codeTitle: "Pair sum in sorted array",
  code: `int[] pairSum(...) { ... }`,
  complexity: { time: "O(n)", space: "O(1)" },
  pitfalls: ["...", "..."],
  videoId: "",                              // ← paste YouTube ID once you pick a video
  videoSearch: "two pointer technique"      // fallback search query
}
```

### Add an AKG slide image
1. Snip the slide (Win+Shift+S) → save as PNG, e.g. `two-pointers.png`.
2. Drop it in the right folder: `images/week1/two-pointers.png`.
3. In `data.js`, set `image: "images/week1/two-pointers.png"`.
4. Refresh — the image appears on the concept page.

### Pin a specific Apna College video
1. Find the video on YouTube. The URL looks like `https://www.youtube.com/watch?v=jNQXAC9IVRw`.
2. Copy the part after `v=` (here `jNQXAC9IVRw`).
3. Set `videoId: "jNQXAC9IVRw"` in `data.js`.
4. The page embeds the video instead of showing the search button.

## Preview locally
Double-click `index.html`. Click any concept to test the concept page.

## Deploy on Render (free)
1. Push all files to a GitHub repo.
2. Render → **New +** → **Static Site** → pick the repo.
3. Build Command: *(empty)*, Publish directory: `.`
4. Create — you get a URL like `https://dsa-hub-xxxx.onrender.com`. Share with mentees.

## Updating after launch
Edit `data.js` on GitHub (pencil icon → paste new content → Commit). Render auto-redeploys in ~1 minute.
