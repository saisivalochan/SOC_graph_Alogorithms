// Renders a single concept page based on URL params:  concept.html?w=1&i=0

(function () {
  const escapeHtml = (str) => String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

  const params = new URLSearchParams(window.location.search);
  const weekNum = parseInt(params.get("w"), 10);
  const idx     = parseInt(params.get("i"), 10);

  const root    = document.getElementById("concept-root");
  const backEl  = document.getElementById("back-link");
  const navEl   = document.getElementById("concept-nav");

  const weeks = SITE_DATA.weeks || [];
  const week  = weeks.find(w => w.number === weekNum);

  if (!week || !week.concepts || !week.concepts[idx]) {
    root.innerHTML = `<div class="concept-card"><h2>Concept not found</h2><p class="empty">Check the link or go back to the weeks list.</p></div>`;
    return;
  }

  const conceptsArr = week.concepts;
  const concept = conceptsArr[idx];
  const name = typeof concept === "string" ? concept : (concept.name || "");

  document.title = `${name} · Week ${week.number} · DSA Hub`;
  backEl.href = `index.html#weeks`;
  backEl.textContent = `← Back to Week ${week.number}`;

  const topicsHtml = (week.topics || []).map(t => `<span class="chip">${escapeHtml(t)}</span>`).join("");

  // If concept is just a string (old format), only show name + week.
  if (typeof concept === "string") {
    root.innerHTML = `
      <div class="concept-card">
        <div class="concept-eyebrow">Week ${escapeHtml(week.number)} · ${escapeHtml(week.title)}</div>
        <h1 class="concept-title">${escapeHtml(name)}</h1>
        <div class="concept-topics">${topicsHtml}</div>
        <p class="empty">Content for this concept hasn't been added yet. Edit <code>data.js</code> to add an explanation, code example, image, and video.</p>
      </div>
    `;
    renderNav();
    return;
  }

  // Build the rich concept page
  const parts = [];

  parts.push(`
    <div class="concept-card">
      <div class="concept-eyebrow">Week ${escapeHtml(week.number)} · ${escapeHtml(week.title)}</div>
      <h1 class="concept-title">${escapeHtml(name)}</h1>
      <div class="concept-topics">${topicsHtml}</div>
  `);

  // Video first — start with the lecture, then read the notes
  if (concept.videoId) {
    const vid = escapeHtml(concept.videoId);
    const isLocal = window.location.protocol === "file:";

    if (isLocal) {
      // YouTube refuses to load its embed on file:// — show a direct-to-YouTube card instead
      parts.push(`
        <section class="concept-section concept-section--first">
          <h2>🎬 Video Lecture</h2>
          <a class="video-player video-player--external" href="https://www.youtube.com/watch?v=${vid}" target="_blank" rel="noopener noreferrer" aria-label="Open video on YouTube">
            <img src="https://img.youtube.com/vi/${vid}/hqdefault.jpg" alt="Video thumbnail" loading="lazy" onerror="this.src='https://img.youtube.com/vi/${vid}/0.jpg';" />
            <div class="play-overlay">
              <div class="play-button">▶</div>
            </div>
            <div class="video-thumb-label">Open on YouTube ↗</div>
          </a>
        </section>
      `);
    } else {
      parts.push(`
        <section class="concept-section concept-section--first">
          <h2>🎬 Video Lecture</h2>
          <div class="video-player" data-video-id="${vid}">
            <button class="video-thumb" type="button" aria-label="Play video">
              <img src="https://img.youtube.com/vi/${vid}/hqdefault.jpg" alt="Video thumbnail" loading="lazy" onerror="this.src='https://img.youtube.com/vi/${vid}/0.jpg';" />
              <div class="play-overlay">
                <div class="play-button">▶</div>
              </div>
              <div class="video-thumb-label">Click to play</div>
            </button>
          </div>
          <a class="video-fallback" href="https://www.youtube.com/watch?v=${vid}" target="_blank" rel="noopener noreferrer">Or open on YouTube ↗</a>
        </section>
      `);
    }
  } else if (concept.videoSearch) {
    const q = encodeURIComponent(concept.videoSearch);
    parts.push(`
      <section class="concept-section concept-section--first">
        <h2>🎬 Video Lecture</h2>
        <p class="muted">No video pinned yet — opens a YouTube search for this topic.</p>
        <a class="watch-btn" href="https://www.youtube.com/results?search_query=${q}" target="_blank" rel="noopener noreferrer">
          ▶ Search on YouTube
        </a>
      </section>
    `);
  }

  if (concept.explanation) {
    const blocks = String(concept.explanation).split(/\n\n+/).map(block => {
      const t = block.trim();
      if (t.startsWith("## ")) return `<h3 class="explain-sub">${escapeHtml(t.substring(3))}</h3>`;
      return `<p>${escapeHtml(t)}</p>`;
    }).join("");
    parts.push(`<section class="concept-section"><h2>📖 Explanation</h2>${blocks}</section>`);
  }

  if (concept.image) {
    parts.push(`
      <section class="concept-section">
        <h2>🖼 Visual</h2>
        <figure class="concept-figure">
          <img src="${escapeHtml(concept.image)}" alt="${escapeHtml(name)} diagram" onerror="this.parentElement.innerHTML='<p class=&quot;empty&quot;>Image not found at <code>${escapeHtml(concept.image)}</code>. Drop the file there and refresh.</p>';" />
          ${concept.imageCaption ? `<figcaption>${escapeHtml(concept.imageCaption)}</figcaption>` : ""}
        </figure>
      </section>
    `);
  }

  if (concept.codeBlocks && concept.codeBlocks.length) {
    const blocksHtml = concept.codeBlocks.map(b => `
        ${b.title ? `<div class="code-title">${escapeHtml(b.title)}</div>` : ""}
        <pre class="code-block"><code>${escapeHtml(b.code)}</code></pre>
    `).join("");
    parts.push(`
      <section class="concept-section">
        <h2>💻 Code (C++)</h2>
        ${blocksHtml}
      </section>
    `);
  } else if (concept.code) {
    parts.push(`
      <section class="concept-section">
        <h2>💻 Code</h2>
        ${concept.codeTitle ? `<div class="code-title">${escapeHtml(concept.codeTitle)}</div>` : ""}
        <pre class="code-block"><code>${escapeHtml(concept.code)}</code></pre>
      </section>
    `);
  }

  if (concept.keyPoints && concept.keyPoints.length) {
    parts.push(`
      <section class="concept-section">
        <h2>🔑 Key Points</h2>
        <ul class="key-points">
          ${concept.keyPoints.map(p => `<li>${escapeHtml(p)}</li>`).join("")}
        </ul>
      </section>
    `);
  }

  if (concept.complexity) {
    const c = concept.complexity;
    parts.push(`
      <section class="concept-section">
        <h2>⏱ Complexity</h2>
        <div class="complexity-grid">
          ${c.time     ? `<div class="complexity-cell"><div class="cl-label">Time</div><div class="cl-value">${escapeHtml(c.time)}</div></div>` : ""}
          ${c.space    ? `<div class="complexity-cell"><div class="cl-label">Space</div><div class="cl-value">${escapeHtml(c.space)}</div></div>` : ""}
          ${c.best     ? `<div class="complexity-cell"><div class="cl-label">Best</div><div class="cl-value">${escapeHtml(c.best)}</div></div>` : ""}
          ${c.average  ? `<div class="complexity-cell"><div class="cl-label">Average</div><div class="cl-value">${escapeHtml(c.average)}</div></div>` : ""}
          ${c.worst    ? `<div class="complexity-cell"><div class="cl-label">Worst</div><div class="cl-value">${escapeHtml(c.worst)}</div></div>` : ""}
        </div>
      </section>
    `);
  }

  if (concept.pitfalls && concept.pitfalls.length) {
    parts.push(`
      <section class="concept-section">
        <h2>⚠ Common Pitfalls</h2>
        <ul class="pitfalls">
          ${concept.pitfalls.map(p => `<li>${escapeHtml(p)}</li>`).join("")}
        </ul>
      </section>
    `);
  }

  parts.push(`</div>`);
  root.innerHTML = parts.join("");

  // Lite-YouTube: click the thumbnail → swap to a real iframe in place (with fullscreen support)
  document.querySelectorAll(".video-player").forEach(player => {
    const button = player.querySelector(".video-thumb");
    if (!button) return;
    button.addEventListener("click", () => {
      const id = player.dataset.videoId;
      if (!id) return;
      player.innerHTML = `<iframe class="video-iframe"
        src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0"
        title="Video lecture"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; web-share"
        allowfullscreen></iframe>`;
    });
  });

  renderNav();

  function renderNav() {
    const prev = conceptsArr[idx - 1] ? `<a class="nav-prev" href="concept.html?w=${weekNum}&i=${idx - 1}">← Previous</a>` : `<span></span>`;
    const next = conceptsArr[idx + 1] ? `<a class="nav-next" href="concept.html?w=${weekNum}&i=${idx + 1}">Next →</a>` : `<span></span>`;
    navEl.innerHTML = `${prev}${next}`;
  }

  // Author + year
  const authorEl = document.getElementById("author-name");
  if (authorEl && SITE_DATA.authorName) authorEl.textContent = SITE_DATA.authorName;
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
