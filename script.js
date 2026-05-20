// Renders weekly DSA content from data.js.
// You shouldn't need to edit this file — just edit data.js.

(function () {
  const escapeHtml = (str) => String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

  const difficultyClass = (d) => {
    const v = String(d || "").toLowerCase();
    if (v.startsWith("e")) return "diff-easy";
    if (v.startsWith("m")) return "diff-medium";
    if (v.startsWith("h")) return "diff-hard";
    return "diff-easy";
  };

  const conceptItem = (entry, i, weekNumber) => {
    const name = typeof entry === "string" ? entry : (entry.name || "");
    return `
      <li>
        <a class="concept-item" href="concept.html?w=${weekNumber}&i=${i}">
          <span class="concept-num">${i + 1}</span>
          <span class="concept-text">${escapeHtml(name)}</span>
          <span class="concept-arrow">→</span>
        </a>
      </li>
    `;
  };

  const problemItem = (p) => `
    <a class="problem-item ${p.mustDo ? 'must-do' : ''}" href="${escapeHtml(p.url)}" target="_blank" rel="noopener noreferrer" title="${p.mustDo ? 'Must-do problem' : ''}">
      ${p.mustDo ? '<span class="must-star">*</span>' : ''}
      <span class="problem-title">${escapeHtml(p.title)}</span>
      <span class="diff ${difficultyClass(p.difficulty)}">${escapeHtml(p.difficulty || "Easy")}</span>
    </a>
  `;

  const linkCard = (item, i) => `
    <a class="card color-${i % 4 + 1}" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">
      <span class="badge">${escapeHtml(item.tag || "Link")}</span>
      <div class="card-title">${escapeHtml(item.title)}</div>
      <div class="card-desc">${escapeHtml(item.description || "")}</div>
      <div class="card-cta">Open →</div>
    </a>
  `;

  const videoCard = (v) => `
    <div class="video-card">
      <div class="video-wrap">
        <iframe
          src="https://www.youtube.com/embed/${escapeHtml(v.youtubeId)}"
          title="${escapeHtml(v.title)}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy"></iframe>
      </div>
      <div class="video-meta">
        <h3>${escapeHtml(v.title)}</h3>
        <p>${escapeHtml(v.description || "")}</p>
      </div>
    </div>
  `;

  const pdfItem = (p) => `
    <div class="pdf-item">
      <div class="pdf-icon">📄</div>
      <div class="pdf-info">
        <h3>${escapeHtml(p.title)}</h3>
        <p>${escapeHtml(p.description || "")}</p>
      </div>
      <a class="pdf-download" href="${escapeHtml(p.file)}" download>⬇ Download</a>
    </div>
  `;

  const noteCard = (n) => `
    <div class="note-card">
      <h3>${escapeHtml(n.title)}</h3>
      ${n.date ? `<div class="note-date">${escapeHtml(n.date)}</div>` : ""}
      <p>${escapeHtml(n.body)}</p>
    </div>
  `;

  const subsection = (label, emoji, html) => html
    ? `<div class="sub">
         <h4>${emoji} ${escapeHtml(label)}</h4>
         ${html}
       </div>`
    : "";

  const renderWeek = (week, isOpen) => {
    const concepts = (week.concepts || []).map((c, i) => conceptItem(c, i, week.number)).join("");
    const problems = (week.problems || []).map(problemItem).join("");
    const links    = (week.links    || []).map(linkCard).join("");
    const videos   = (week.videos   || []).map(videoCard).join("");
    const pdfs     = (week.pdfs     || []).map(pdfItem).join("");
    const notes    = (week.notes    || []).map(noteCard).join("");

    const hasAny = concepts || problems || links || videos || pdfs || notes;
    const topics = (week.topics || []).map(t => `<span class="chip">${escapeHtml(t)}</span>`).join("");

    const problemCount = (week.problems || []).length;
    const conceptCount = (week.concepts || []).length;

    return `
      <details class="week" ${isOpen ? "open" : ""}>
        <summary>
          <div class="week-head">
            <div class="week-num">Week ${escapeHtml(week.number)}</div>
            <div class="week-meta">
              <div class="week-title">${escapeHtml(week.title)}</div>
              <div class="week-topics">${topics}</div>
            </div>
            <div class="week-counts">
              ${conceptCount ? `<span class="count-pill">📘 ${conceptCount}</span>` : ""}
              ${problemCount ? `<span class="count-pill">⚡ ${problemCount}</span>` : ""}
            </div>
            ${isOpen ? `<span class="week-tag">🟢 Start Here</span>` : ""}
            <div class="week-arrow">▾</div>
          </div>
        </summary>
        <div class="week-body">
          ${week.goal ? `<div class="goal">🎯 <strong>Goal:</strong> ${escapeHtml(week.goal)}</div>` : ""}
          ${subsection("Concepts", "📘", concepts ? `<ol class="concepts-list">${concepts}</ol>` : "")}
          ${subsection("Problems", "⚡", problems ? `<div class="problems-list">${problems}</div>` : "")}
          ${subsection("Articles & Links", "🔗", links ? `<div class="card-grid">${links}</div>` : "")}
          ${subsection("Videos", "🎬", videos ? `<div class="video-grid">${videos}</div>` : "")}
          ${subsection("PDFs & Files", "📥", pdfs ? `<div class="pdf-list">${pdfs}</div>` : "")}
          ${subsection("Notes", "📝", notes ? `<div class="notes-list">${notes}</div>` : "")}
          ${!hasAny ? `<p class="empty">Content for this week coming soon.</p>` : ""}
        </div>
      </details>
    `;
  };

  // Sort weeks ascending so Week 1 is first, Week 7 last
  const weeks = [...(SITE_DATA.weeks || [])].sort((a, b) => (a.number || 0) - (b.number || 0));

  const weeksList = document.getElementById("weeks-list");
  if (weeksList) {
    if (weeks.length === 0) {
      weeksList.innerHTML = `<p class="empty">No weeks added yet. Edit <code>data.js</code> to add the first one.</p>`;
    } else {
      weeksList.innerHTML = weeks.map((w, idx) => renderWeek(w, idx === 0)).join("");
    }
  }

  // Stats
  const totalResources = weeks.reduce((sum, w) =>
    sum
    + (w.concepts?.length || 0)
    + (w.problems?.length || 0)
    + (w.links?.length    || 0)
    + (w.videos?.length   || 0)
    + (w.pdfs?.length     || 0)
    + (w.notes?.length    || 0)
  , 0);
  const totalProblems = weeks.reduce((s, w) => s + (w.problems?.length || 0), 0);

  const statWeeks = document.getElementById("stat-weeks");
  const statRes   = document.getElementById("stat-resources");
  const statProb  = document.getElementById("stat-problems");
  if (statWeeks) statWeeks.textContent = weeks.length;
  if (statRes)   statRes.textContent   = totalResources;
  if (statProb)  statProb.textContent  = totalProblems;

  // About text
  const aboutText = document.getElementById("about-text");
  if (aboutText && SITE_DATA.about) aboutText.textContent = SITE_DATA.about;

  // References
  const refsGrid = document.getElementById("references-grid");
  if (refsGrid && SITE_DATA.references && SITE_DATA.references.length) {
    refsGrid.innerHTML = SITE_DATA.references.map(r => `
      <a class="reference-card" href="${escapeHtml(r.url)}" target="_blank" rel="noopener noreferrer">
        <span class="reference-badge">${escapeHtml(r.badge || "Resource")}</span>
        <div class="reference-title">${escapeHtml(r.title)}</div>
        ${r.subtitle ? `<div class="reference-subtitle">${escapeHtml(r.subtitle)}</div>` : ""}
        ${r.desc ? `<div class="reference-desc">${escapeHtml(r.desc)}</div>` : ""}
        ${r.note ? `<div class="reference-note">${escapeHtml(r.note)}</div>` : ""}
        <div class="reference-cta">${escapeHtml(r.cta || "Open")} →</div>
      </a>
    `).join("");
  }

  // Author / footer
  const authorEl = document.getElementById("author-name");
  if (authorEl && SITE_DATA.authorName) authorEl.textContent = SITE_DATA.authorName;

  // Year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
