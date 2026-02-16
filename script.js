<<<<<<< HEAD
// ===== DATA STORE =====
const seriesData = {
  TSE: {
    name: "Terminale Sciences Exactes",
    desc: "Mathématiques, Physique-Chimie et Sciences de la Vie et de la Terre pour les scientifiques.",
    color: "sc-green",
    emoji: "📐",
    subjects: [
      { name: "Mathématiques", icon: "📐", color: "#dcfce7", iconColor: "#16a34a" },
      { name: "Physique", icon: "⚗️", color: "#dbeafe", iconColor: "#2563eb" },
      { name: "SVT", icon: "🌿", color: "#d1fae5", iconColor: "#059669" },
      { name: "Philosophie", icon: "🧠", color: "#ede9fe", iconColor: "#7c3aed" },
      { name: "Anglais", icon: "🇬🇧", color: "#fee2e2", iconColor: "#dc2626" },
      { name: "Chimie", icon: "🧪", color: "#fce7f3", iconColor: "#be185d" },
    ]
  },
  TSEXP: {
    name: "Terminale Sciences Expérimentales",
    desc: "Sciences biologiques, chimie appliquée et environnement pour les futurs scientifiques.",
    color: "sc-teal",
    emoji: "🔬",
    subjects: [
      { name: "SVT", icon: "🌿", color: "#d1fae5", iconColor: "#059669" },
      { name: "Physique-Chimie", icon: "⚗️", color: "#dbeafe", iconColor: "#2563eb" },
      { name: "Mathématiques", icon: "📐", color: "#dcfce7", iconColor: "#16a34a" },
      { name: "Philosophie", icon: "🧠", color: "#ede9fe", iconColor: "#7c3aed" },
      { name: "Anglais", icon: "🇬🇧", color: "#fee2e2", iconColor: "#dc2626" },
      { name: "Français", icon: "📖", color: "#fce7f3", iconColor: "#be185d" },
    ]
  },
  TSECO: {
    name: "Terminale Sciences Économiques",
    desc: "Économie, gestion et sciences sociales pour les futurs économistes et gestionnaires.",
    color: "sc-yellow",
    emoji: "📊",
    subjects: [
      { name: "Économie", icon: "📊", color: "#fef3c7", iconColor: "#d97706" },
      { name: "Mathématiques", icon: "📐", color: "#dcfce7", iconColor: "#16a34a" },
      { name: "Histoire-Géographie", icon: "🌍", color: "#fef3c7", iconColor: "#d97706" },
      { name: "Philosophie", icon: "🧠", color: "#ede9fe", iconColor: "#7c3aed" },
      { name: "Anglais", icon: "🇬🇧", color: "#fee2e2", iconColor: "#dc2626" },
      { name: "Français", icon: "📖", color: "#fce7f3", iconColor: "#be185d" },
      { name: "Gestion", icon: "💼", color: "#e0f2fe", iconColor: "#0284c7" },
    ]
  },
  TLL: {
    name: "Terminale Lettres et Langues",
    desc: "Littérature, linguistique, langues vivantes et sciences humaines.",
    color: "sc-red",
    emoji: "📚",
    subjects: [
      { name: "Français", icon: "📖", color: "#fce7f3", iconColor: "#be185d" },
      { name: "Littérature", icon: "📚", color: "#fee2e2", iconColor: "#dc2626" },
      { name: "Philosophie", icon: "🧠", color: "#ede9fe", iconColor: "#7c3aed" },
      { name: "Histoire-Géographie", icon: "🌍", color: "#fef3c7", iconColor: "#d97706" },
      { name: "Anglais", icon: "🇬🇧", color: "#fee2e2", iconColor: "#dc2626" },
      { name: "Latin / Arabe", icon: "✒️", color: "#f3e8ff", iconColor: "#9333ea" },
      { name: "Arts Plastiques", icon: "🎨", color: "#fff7ed", iconColor: "#ea580c" },
    ]
  },
  TAL: {
    name: "Terminale Arts et Langues",
    desc: "Expression artistique, langues étrangères et culture générale.",
    color: "sc-purple",
    emoji: "🌍",
    subjects: [
      { name: "Arts Plastiques", icon: "🎨", color: "#fff7ed", iconColor: "#ea580c" },
      { name: "Français", icon: "📖", color: "#fce7f3", iconColor: "#be185d" },
      { name: "Anglais", icon: "🇬🇧", color: "#fee2e2", iconColor: "#dc2626" },
      { name: "Philosophie", icon: "🧠", color: "#ede9fe", iconColor: "#7c3aed" },
      { name: "Histoire-Géographie", icon: "🌍", color: "#fef3c7", iconColor: "#d97706" },
      { name: "Musique", icon: "🎵", color: "#fdf4ff", iconColor: "#a21caf" },
      { name: "Arabe", icon: "✒️", color: "#f3e8ff", iconColor: "#9333ea" },
    ]
  },
  TSS: {
    name: "Terminale Sciences Sociales",
    desc: "Sociologie, psychologie, droit et sciences de l'homme pour les professions sociales.",
    color: "sc-blue",
    emoji: "🤝",
    subjects: [
      { name: "Sciences Sociales", icon: "🤝", color: "#e0f2fe", iconColor: "#0284c7" },
      { name: "Histoire-Géographie", icon: "🌍", color: "#fef3c7", iconColor: "#d97706" },
      { name: "Philosophie", icon: "🧠", color: "#ede9fe", iconColor: "#7c3aed" },
      { name: "Économie", icon: "📊", color: "#fef3c7", iconColor: "#d97706" },
      { name: "Français", icon: "📖", color: "#fce7f3", iconColor: "#be185d" },
      { name: "Anglais", icon: "🇬🇧", color: "#fee2e2", iconColor: "#dc2626" },
      { name: "Droit", icon: "⚖️", color: "#dcfce7", iconColor: "#16a34a" },
    ]
  }
};



// In-memory PDF database
let pdfDatabase = [];
let nextId = 1000;

// Initialize with sample data
function initDatabase() {
  Object.entries(seriesData).forEach(([serie, sdata]) => {
    sdata.subjects.forEach(subj => {
      const pdfs = samplePdfs[subj.name] || [];
      pdfs.forEach(pdf => {
        pdfDatabase.push({ id: nextId++, serie, subject: subj.name, title: pdf.title, year: pdf.year, url: "#" });
      });
    });
  });
}

// ===== RENDER HOME =====
function renderHome() {
  const grid = document.getElementById("homeGrid");
  grid.innerHTML = Object.entries(seriesData).map(([key, s]) => {
    const count = pdfDatabase.filter(p => p.serie === key).length;
    return `
    <div class="series-card ${s.color}" onclick="showSection('${key}')">
      <div class="series-card-tag">${key}</div>
      <h3>${s.emoji} ${s.name}</h3>
      <p>${s.desc}</p>
      <div class="series-card-footer">
        <span class="series-card-count">${count} document${count !== 1 ? 's' : ''}</span>
        <div class="series-card-arrow">→</div>
      </div>
    </div>`;
  }).join('');
  updateStatDocs();
}

function updateStatDocs() {
  document.getElementById("statDocs").textContent = pdfDatabase.length;
}

// ===== RENDER SERIES PANEL =====
function renderSeriesPanel(serieKey) {
  const s = seriesData[serieKey];
  const panel = document.getElementById("panel-" + serieKey);
  const pdfsForSerie = pdfDatabase.filter(p => p.serie === serieKey);

  panel.innerHTML = `
    <div class="series-hero">
      <div class="series-hero-info">
        <h2>${s.emoji} ${s.name}</h2>
        <p>${s.desc}</p>
      </div>
      <div class="series-badge-large">
        <div class="badge-num">${pdfsForSerie.length}</div>
        <div class="badge-label">Documents</div>
      </div>
    </div>
    <div class="subjects-grid">
      ${s.subjects.map(subj => renderSubjectCard(serieKey, subj)).join('')}
    </div>`;
}

function renderSubjectCard(serieKey, subj) {
  const pdfs = pdfDatabase.filter(p => p.serie === serieKey && p.subject === subj.name);
  const pdfItems = pdfs.map(p => `
    <div class="pdf-item">
      <div class="pdf-icon">PDF</div>
      <span class="pdf-name">${p.title}</span>
      <span class="pdf-year">${p.year || ''}</span>
      <button class="pdf-dl-btn" onclick="downloadPdf(${p.id})" title="Télécharger">⬇</button>
    </div>`).join('');

  return `
    <div class="subject-card" id="card-${serieKey}-${subj.name.replace(/\s+/g,'-')}">
      <div class="subject-card-header">
        <div class="subject-icon" style="background:${subj.color};color:${subj.iconColor}">${subj.icon}</div>
        <div>
          <div class="subject-card-title">${subj.name}</div>
          <div class="subject-card-count">${pdfs.length} document${pdfs.length !== 1 ? 's' : ''}</div>
        </div>
      </div>
      <div class="subject-card-body">
        ${pdfItems || '<div style="padding:10px 4px;font-size:0.82rem;color:var(--text-3)">Aucun document pour l\'instant.</div>'}
        <button class="pdf-add-btn" onclick="quickAddFromCard('${serieKey}','${subj.name}')">+ Ajouter un document</button>
      </div>
    </div>`;
}

function refreshSeriesPanel(serieKey) {
  const panel = document.getElementById("panel-" + serieKey);
  if (panel) { panel.innerHTML = ''; renderSeriesPanel(serieKey); }
}

// ===== NAVIGATION =====
let currentSection = 'home';

function showSection(section) {
  document.querySelectorAll('.home-panel, .series-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.series-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => a.classList.remove('active'));

  const panel = document.getElementById("panel-" + section);
  if (panel) panel.classList.add('active');

  // Activate tab button
  const tabs = document.querySelectorAll('.series-tab');
  const tabNames = ['home', 'TSE', 'TSEXP', 'TSECO', 'TLL', 'TAL', 'TSS'];
  const idx = tabNames.indexOf(section);
  if (idx >= 0 && tabs[idx]) tabs[idx].classList.add('active');

  // Activate nav link
  const navEl = document.getElementById("tab-" + section);
  if (navEl) navEl.classList.add('active');

  // Update title
  const titles = { home: 'Bienvenue sur SEWA', TSE: 'TSE – Sciences Exactes', TSEXP: 'TSEXP – Sciences Expérimentales', TSECO: 'TSECO – Sciences Économiques', TLL: 'TLL – Lettres et Langues', TAL: 'TAL – Arts et Langues', TSS: 'TSS – Sciences Sociales' };
  document.getElementById("mainTitle").textContent = titles[section] || section;

  currentSection = section;
  document.getElementById("heroSection").style.display = section === 'home' ? '' : 'none';

  window.scrollTo({ top: 0, behavior: 'smooth' });
  return false;
}

// ===== DOWNLOAD SIMULATION =====
function downloadPdf(id) {
  const pdf = pdfDatabase.find(p => p.id === id);
  if (!pdf) return;
  showToast(`📥 Téléchargement de "${pdf.title}" en cours…`);
  // In a real app: window.open(pdf.url, '_blank');
}

// ===== SEARCH =====
function doSearch() {
  const q = document.getElementById("searchInput").value.trim().toLowerCase();
  const panel = document.getElementById("searchPanel");
  if (!q) { panel.classList.remove('open'); return; }

  const results = pdfDatabase.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.subject.toLowerCase().includes(q) ||
    p.serie.toLowerCase().includes(q)
  ).slice(0, 8);

  if (!results.length) {
    panel.innerHTML = '<div class="search-no-result">Aucun résultat trouvé 😕</div>';
  } else {
    panel.innerHTML = results.map(p => `
      <div class="search-result-item" onclick="searchGo('${p.serie}',${p.id})">
        <div class="search-result-icon">PDF</div>
        <div class="search-result-text">
          <span class="search-result-title">${p.title}</span>
          <span class="search-result-sub">${p.serie} — ${p.subject}${p.year ? ' · ' + p.year : ''}</span>
        </div>
        <button class="pdf-dl-btn" onclick="event.stopPropagation();downloadPdf(${p.id})">⬇</button>
      </div>`).join('');
  }
  panel.classList.add('open');
}

function searchGo(serie, id) {
  document.getElementById("searchPanel").classList.remove('open');
  document.getElementById("searchInput").value = '';
  showSection(serie);
  setTimeout(() => downloadPdf(id), 400);
}

function searchKeydown(e) {
  if (e.key === 'Escape') { document.getElementById("searchPanel").classList.remove('open'); }
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-wrapper')) document.getElementById("searchPanel").classList.remove('open');
});

// ===== ADMIN PANEL =====
function openAdmin() { document.getElementById("adminOverlay").classList.add('open'); }
function closeAdmin() { document.getElementById("adminOverlay").classList.remove('open'); }
function closeAdminOutside(e) { if (e.target === document.getElementById("adminOverlay")) closeAdmin(); }

function switchAdminTab(tab) {
  document.getElementById("adminAdd").style.display = tab === 'add' ? '' : 'none';
  document.getElementById("adminManage").style.display = tab === 'manage' ? '' : 'none';
  document.getElementById("atab-add").classList.toggle('active', tab === 'add');
  document.getElementById("atab-manage").classList.toggle('active', tab === 'manage');
  if (tab === 'manage') renderManageList();
}
let adminToken = localStorage.getItem("adminToken");

async function adminLogin() {
  const password = document.getElementById("adminPassword").value;

  const formData = new FormData();
  formData.append("password", password);

  const response = await fetch("http://127.0.0.1:8000/admin/login", {
    method: "POST",
    body: formData
  });

  if (response.ok) {
    const data = await response.json();
    adminToken = data.token;
    localStorage.setItem("adminToken", adminToken);
    alert("Connexion réussie ✅");
  } else {
    alert("Mot de passe incorrect ❌");
  }
}




// Subject selector based on serie
document.getElementById("adminSerie").addEventListener('change', function() {
  const serie = this.value;
  const subjectSel = document.getElementById("adminSubject");
  if (!serie || !seriesData[serie]) {
    subjectSel.innerHTML = '<option value="">Choisir d\'abord une série…</option>';
    return;
  }
  subjectSel.innerHTML = '<option value="">Choisir une matière…</option>' +
    seriesData[serie].subjects.map(s => `<option>${s.name}</option>`).join('');
});

function handleFileSelect(event) {
  const file = event.target.files[0];
  if (file) document.getElementById("fileNameDisplay").textContent = '📄 ' + file.name;
}

async function adminAddPdf() {
  const serie = document.getElementById("adminSerie").value;
  const subject = document.getElementById("adminSubject").value;
  const title = document.getElementById("adminTitle").value.trim();
  const year = document.getElementById("adminYear").value.trim();

  if (!serie || !subject || !title) {
    showToast("⚠️ Veuillez remplir tous les champs obligatoires.", true);
    return;
  }

 const formData = new FormData();
formData.append("title", title);
formData.append("serie", serie);
formData.append("subject", subject);
formData.append("file", document.getElementById("adminFile").files[0]);

await fetch("http://127.0.0.1:8000/upload", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${adminToken}`
  },
  body: formData
});



  // Recharge depuis le backend
await loadPdfs();

  // Reset form
  document.getElementById("adminSerie").value = '';
  document.getElementById("adminSubject").innerHTML = '<option value="">Choisir d\'abord une série…</option>';
  document.getElementById("adminTitle").value = '';
  document.getElementById("adminYear").value = '';
  document.getElementById("fileNameDisplay").textContent = '';

  // Refresh UI
  refreshSeriesPanel(serie);
  renderHome();
  updateStatDocs();
  showToast(`✅ "${title}" ajouté dans ${serie} › ${subject} !`);
}

function renderManageList() {
  const filter = document.getElementById("manageFilter").value;
  const list = document.getElementById("managePdfList");
  const items = filter ? pdfDatabase.filter(p => p.serie === filter) : pdfDatabase;

  if (!items.length) {
    list.innerHTML = '<div style="text-align:center;color:var(--text-3);padding:20px;font-size:0.9rem">Aucun document.</div>';
    return;
  }
  list.innerHTML = items.map(p => `
    <div class="manage-pdf-item">
      <div class="pdf-icon" style="width:32px;height:32px;border-radius:7px;background:#fee2e2;color:var(--red);display:flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:700;flex-shrink:0">PDF</div>
      <div class="pdf-info">
        <strong>${p.title}</strong>
        <span>${p.serie} › ${p.subject}${p.year ? ' · ' + p.year : ''}</span>
      </div>
      <button class="btn-del" onclick="deletePdf(${p.id})">🗑 Supprimer</button>
    </div>`).join('');
}

async function deletePdf(id) {
  if (!confirm("Supprimer ce PDF ?")) return;

  const response = await fetch(`http://127.0.0.1:8000/pdfs/${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${adminToken}`
    }
  });

  if (response.ok) {
    alert("PDF supprimé ✅");
    await loadPdfs();
  } else {
    alert("Erreur ou non autorisé ❌");
  }
}

function quickAddFromCard(serie, subject) {
  openAdmin();
  switchAdminTab('add');
  document.getElementById("adminSerie").value = serie;
  document.getElementById("adminSerie").dispatchEvent(new Event('change'));
  setTimeout(() => { document.getElementById("adminSubject").value = subject; }, 50);
  document.getElementById("adminTitle").focus();
}

// ===== TOAST =====
let toastTimeout;
function showToast(msg, isError = false) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.toggle('error', isError);
  t.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => t.classList.remove('show'), 3200);
}

// ===== SCROLL HEADER =====
window.addEventListener('scroll', () => {
  document.getElementById("header").classList.toggle('scrolled', window.scrollY > 30);
});

// ===== MOBILE MENU =====
function toggleMobile() {
  const h = document.getElementById("hamburger");
  const m = document.getElementById("mobileMenu");
  h.classList.toggle('open');
  m.classList.toggle('open');
}
function closeMobile() {
  document.getElementById("hamburger").classList.remove('open');
  document.getElementById("mobileMenu").classList.remove('open');
}

// ===== INIT =====
async function loadPdfs() {
  try {
    const response = await fetch("http://127.0.0.1:8000/pdfs");
    const data = await response.json();
    pdfDatabase = data;
    renderHome();
    Object.keys(seriesData).forEach(key => renderSeriesPanel(key));
  } catch (error) {
    console.error("Erreur chargement PDFs:", error);
  }
}
loadPdfs();

=======
// ===== DATA STORE =====
const seriesData = {
  TSE: {
    name: "Terminale Sciences Exactes",
    desc: "Mathématiques, Physique-Chimie et Sciences de la Vie et de la Terre pour les scientifiques.",
    color: "sc-green",
    emoji: "📐",
    subjects: [
      { name: "Mathématiques", icon: "📐", color: "#dcfce7", iconColor: "#16a34a" },
      { name: "Physique", icon: "⚗️", color: "#dbeafe", iconColor: "#2563eb" },
      { name: "SVT", icon: "🌿", color: "#d1fae5", iconColor: "#059669" },
      { name: "Philosophie", icon: "🧠", color: "#ede9fe", iconColor: "#7c3aed" },
      { name: "Anglais", icon: "🇬🇧", color: "#fee2e2", iconColor: "#dc2626" },
      { name: "Chimie", icon: "🧪", color: "#fce7f3", iconColor: "#be185d" },
    ]
  },
  TSEXP: {
    name: "Terminale Sciences Expérimentales",
    desc: "Sciences biologiques, chimie appliquée et environnement pour les futurs scientifiques.",
    color: "sc-teal",
    emoji: "🔬",
    subjects: [
      { name: "SVT", icon: "🌿", color: "#d1fae5", iconColor: "#059669" },
      { name: "Physique-Chimie", icon: "⚗️", color: "#dbeafe", iconColor: "#2563eb" },
      { name: "Mathématiques", icon: "📐", color: "#dcfce7", iconColor: "#16a34a" },
      { name: "Philosophie", icon: "🧠", color: "#ede9fe", iconColor: "#7c3aed" },
      { name: "Anglais", icon: "🇬🇧", color: "#fee2e2", iconColor: "#dc2626" },
      { name: "Français", icon: "📖", color: "#fce7f3", iconColor: "#be185d" },
    ]
  },
  TSECO: {
    name: "Terminale Sciences Économiques",
    desc: "Économie, gestion et sciences sociales pour les futurs économistes et gestionnaires.",
    color: "sc-yellow",
    emoji: "📊",
    subjects: [
      { name: "Économie", icon: "📊", color: "#fef3c7", iconColor: "#d97706" },
      { name: "Mathématiques", icon: "📐", color: "#dcfce7", iconColor: "#16a34a" },
      { name: "Histoire-Géographie", icon: "🌍", color: "#fef3c7", iconColor: "#d97706" },
      { name: "Philosophie", icon: "🧠", color: "#ede9fe", iconColor: "#7c3aed" },
      { name: "Anglais", icon: "🇬🇧", color: "#fee2e2", iconColor: "#dc2626" },
      { name: "Français", icon: "📖", color: "#fce7f3", iconColor: "#be185d" },
      { name: "Gestion", icon: "💼", color: "#e0f2fe", iconColor: "#0284c7" },
    ]
  },
  TLL: {
    name: "Terminale Lettres et Langues",
    desc: "Littérature, linguistique, langues vivantes et sciences humaines.",
    color: "sc-red",
    emoji: "📚",
    subjects: [
      { name: "Français", icon: "📖", color: "#fce7f3", iconColor: "#be185d" },
      { name: "Littérature", icon: "📚", color: "#fee2e2", iconColor: "#dc2626" },
      { name: "Philosophie", icon: "🧠", color: "#ede9fe", iconColor: "#7c3aed" },
      { name: "Histoire-Géographie", icon: "🌍", color: "#fef3c7", iconColor: "#d97706" },
      { name: "Anglais", icon: "🇬🇧", color: "#fee2e2", iconColor: "#dc2626" },
      { name: "Latin / Arabe", icon: "✒️", color: "#f3e8ff", iconColor: "#9333ea" },
      { name: "Arts Plastiques", icon: "🎨", color: "#fff7ed", iconColor: "#ea580c" },
    ]
  },
  TAL: {
    name: "Terminale Arts et Langues",
    desc: "Expression artistique, langues étrangères et culture générale.",
    color: "sc-purple",
    emoji: "🌍",
    subjects: [
      { name: "Arts Plastiques", icon: "🎨", color: "#fff7ed", iconColor: "#ea580c" },
      { name: "Français", icon: "📖", color: "#fce7f3", iconColor: "#be185d" },
      { name: "Anglais", icon: "🇬🇧", color: "#fee2e2", iconColor: "#dc2626" },
      { name: "Philosophie", icon: "🧠", color: "#ede9fe", iconColor: "#7c3aed" },
      { name: "Histoire-Géographie", icon: "🌍", color: "#fef3c7", iconColor: "#d97706" },
      { name: "Musique", icon: "🎵", color: "#fdf4ff", iconColor: "#a21caf" },
      { name: "Arabe", icon: "✒️", color: "#f3e8ff", iconColor: "#9333ea" },
    ]
  },
  TSS: {
    name: "Terminale Sciences Sociales",
    desc: "Sociologie, psychologie, droit et sciences de l'homme pour les professions sociales.",
    color: "sc-blue",
    emoji: "🤝",
    subjects: [
      { name: "Sciences Sociales", icon: "🤝", color: "#e0f2fe", iconColor: "#0284c7" },
      { name: "Histoire-Géographie", icon: "🌍", color: "#fef3c7", iconColor: "#d97706" },
      { name: "Philosophie", icon: "🧠", color: "#ede9fe", iconColor: "#7c3aed" },
      { name: "Économie", icon: "📊", color: "#fef3c7", iconColor: "#d97706" },
      { name: "Français", icon: "📖", color: "#fce7f3", iconColor: "#be185d" },
      { name: "Anglais", icon: "🇬🇧", color: "#fee2e2", iconColor: "#dc2626" },
      { name: "Droit", icon: "⚖️", color: "#dcfce7", iconColor: "#16a34a" },
    ]
  }
};

// Sample PDFs per subject
const samplePdfs = {
  "Mathématiques": [
    { title: "Annales BAC Maths 2022", year: "2022" },
    { title: "Cours – Suites Numériques", year: "2024" },
    { title: "Exercices Corrigés – Analyse", year: "2023" },
  ],
  "Physique-Chimie": [
    { title: "Cours – Électromagnétisme", year: "2024" },
    { title: "Annales BAC Physique 2023", year: "2023" },
  ],
  "SVT": [
    { title: "Génétique – Cours complet", year: "2024" },
    { title: "Annales BAC SVT 2022", year: "2022" },
    { title: "Fiche de révision – Évolution", year: "2023" },
  ],
  "Philosophie": [
    { title: "Dissertation – Méthode complète", year: "2024" },
    { title: "Annales BAC Philo 2023", year: "2023" },
  ],
  "Histoire-Géographie": [
    { title: "Cours – Décolonisation Afrique", year: "2024" },
    { title: "Annales BAC Hist-Géo 2022", year: "2022" },
  ],
  "Anglais": [
    { title: "Grammaire Anglaise complète", year: "2024" },
    { title: "Annales BAC Anglais 2023", year: "2023" },
  ],
  "Français": [
    { title: "Guide – Contraction de texte", year: "2024" },
    { title: "Annales BAC Français 2022", year: "2022" },
  ],
  "Économie": [
    { title: "Cours Macroéconomie complet", year: "2024" },
    { title: "Annales BAC Éco 2023", year: "2023" },
  ],
  "Gestion": [
    { title: "Comptabilité générale", year: "2024" },
  ],
  "Littérature": [
    { title: "Analyse – Le Soleil des Indépendances", year: "2024" },
    { title: "Annales Littérature 2022", year: "2022" },
  ],
  "Arts Plastiques": [
    { title: "Histoire de l'Art – Afrique", year: "2024" },
  ],
  "Latin / Arabe": [
    { title: "Grammaire Arabe – Niveau Terminal", year: "2024" },
  ],
  "Musique": [
    { title: "Théorie Musicale – Solfège", year: "2024" },
  ],
  "Arabe": [
    { title: "Arabe – Grammaire avancée", year: "2024" },
  ],
  "Sciences Sociales": [
    { title: "Sociologie – Cours complet", year: "2024" },
    { title: "Annales BAC Sciences Sociales 2023", year: "2023" },
  ],
  "Droit": [
    { title: "Droit civil malien – Introduction", year: "2024" },
  ]
};

// In-memory PDF database
let pdfDatabase = [];
let nextId = 1000;

// Initialize with sample data
function initDatabase() {
  Object.entries(seriesData).forEach(([serie, sdata]) => {
    sdata.subjects.forEach(subj => {
      const pdfs = samplePdfs[subj.name] || [];
      pdfs.forEach(pdf => {
        pdfDatabase.push({ id: nextId++, serie, subject: subj.name, title: pdf.title, year: pdf.year, url: "#" });
      });
    });
  });
}

// ===== RENDER HOME =====
function renderHome() {
  const grid = document.getElementById("homeGrid");
  grid.innerHTML = Object.entries(seriesData).map(([key, s]) => {
    const count = pdfDatabase.filter(p => p.serie === key).length;
    return `
    <div class="series-card ${s.color}" onclick="showSection('${key}')">
      <div class="series-card-tag">${key}</div>
      <h3>${s.emoji} ${s.name}</h3>
      <p>${s.desc}</p>
      <div class="series-card-footer">
        <span class="series-card-count">${count} document${count !== 1 ? 's' : ''}</span>
        <div class="series-card-arrow">→</div>
      </div>
    </div>`;
  }).join('');
  updateStatDocs();
}

function updateStatDocs() {
  document.getElementById("statDocs").textContent = pdfDatabase.length;
}

// ===== RENDER SERIES PANEL =====
function renderSeriesPanel(serieKey) {
  const s = seriesData[serieKey];
  const panel = document.getElementById("panel-" + serieKey);
  const pdfsForSerie = pdfDatabase.filter(p => p.serie === serieKey);

  panel.innerHTML = `
    <div class="series-hero">
      <div class="series-hero-info">
        <h2>${s.emoji} ${s.name}</h2>
        <p>${s.desc}</p>
      </div>
      <div class="series-badge-large">
        <div class="badge-num">${pdfsForSerie.length}</div>
        <div class="badge-label">Documents</div>
      </div>
    </div>
    <div class="subjects-grid">
      ${s.subjects.map(subj => renderSubjectCard(serieKey, subj)).join('')}
    </div>`;
}

function renderSubjectCard(serieKey, subj) {
  const pdfs = pdfDatabase.filter(p => p.serie === serieKey && p.subject === subj.name);
  const pdfItems = pdfs.map(p => `
    <div class="pdf-item">
      <div class="pdf-icon">PDF</div>
      <span class="pdf-name">${p.title}</span>
      <span class="pdf-year">${p.year || ''}</span>
      <button class="pdf-dl-btn" onclick="downloadPdf(${p.id})" title="Télécharger">⬇</button>
    </div>`).join('');

  return `
    <div class="subject-card" id="card-${serieKey}-${subj.name.replace(/\s+/g,'-')}">
      <div class="subject-card-header">
        <div class="subject-icon" style="background:${subj.color};color:${subj.iconColor}">${subj.icon}</div>
        <div>
          <div class="subject-card-title">${subj.name}</div>
          <div class="subject-card-count">${pdfs.length} document${pdfs.length !== 1 ? 's' : ''}</div>
        </div>
      </div>
      <div class="subject-card-body">
        ${pdfItems || '<div style="padding:10px 4px;font-size:0.82rem;color:var(--text-3)">Aucun document pour l\'instant.</div>'}
        <button class="pdf-add-btn" onclick="quickAddFromCard('${serieKey}','${subj.name}')">+ Ajouter un document</button>
      </div>
    </div>`;
}

function refreshSeriesPanel(serieKey) {
  const panel = document.getElementById("panel-" + serieKey);
  if (panel) { panel.innerHTML = ''; renderSeriesPanel(serieKey); }
}

// ===== NAVIGATION =====
let currentSection = 'home';

function showSection(section) {
  document.querySelectorAll('.home-panel, .series-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.series-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => a.classList.remove('active'));

  const panel = document.getElementById("panel-" + section);
  if (panel) panel.classList.add('active');

  // Activate tab button
  const tabs = document.querySelectorAll('.series-tab');
  const tabNames = ['home', 'TSE', 'TSEXP', 'TSECO', 'TLL', 'TAL', 'TSS'];
  const idx = tabNames.indexOf(section);
  if (idx >= 0 && tabs[idx]) tabs[idx].classList.add('active');

  // Activate nav link
  const navEl = document.getElementById("tab-" + section);
  if (navEl) navEl.classList.add('active');

  // Update title
  const titles = { home: 'Bienvenue sur SEWA', TSE: 'TSE – Sciences Exactes', TSEXP: 'TSEXP – Sciences Expérimentales', TSECO: 'TSECO – Sciences Économiques', TLL: 'TLL – Lettres et Langues', TAL: 'TAL – Arts et Langues', TSS: 'TSS – Sciences Sociales' };
  document.getElementById("mainTitle").textContent = titles[section] || section;

  currentSection = section;
  document.getElementById("heroSection").style.display = section === 'home' ? '' : 'none';

  window.scrollTo({ top: 0, behavior: 'smooth' });
  return false;
}

// ===== DOWNLOAD SIMULATION =====
function downloadPdf(id) {
  const pdf = pdfDatabase.find(p => p.id === id);
  if (!pdf) return;
  showToast(`📥 Téléchargement de "${pdf.title}" en cours…`);
  // In a real app: window.open(pdf.url, '_blank');
}

// ===== SEARCH =====
function doSearch() {
  const q = document.getElementById("searchInput").value.trim().toLowerCase();
  const panel = document.getElementById("searchPanel");
  if (!q) { panel.classList.remove('open'); return; }

  const results = pdfDatabase.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.subject.toLowerCase().includes(q) ||
    p.serie.toLowerCase().includes(q)
  ).slice(0, 8);

  if (!results.length) {
    panel.innerHTML = '<div class="search-no-result">Aucun résultat trouvé 😕</div>';
  } else {
    panel.innerHTML = results.map(p => `
      <div class="search-result-item" onclick="searchGo('${p.serie}',${p.id})">
        <div class="search-result-icon">PDF</div>
        <div class="search-result-text">
          <span class="search-result-title">${p.title}</span>
          <span class="search-result-sub">${p.serie} — ${p.subject}${p.year ? ' · ' + p.year : ''}</span>
        </div>
        <button class="pdf-dl-btn" onclick="event.stopPropagation();downloadPdf(${p.id})">⬇</button>
      </div>`).join('');
  }
  panel.classList.add('open');
}

function searchGo(serie, id) {
  document.getElementById("searchPanel").classList.remove('open');
  document.getElementById("searchInput").value = '';
  showSection(serie);
  setTimeout(() => downloadPdf(id), 400);
}

function searchKeydown(e) {
  if (e.key === 'Escape') { document.getElementById("searchPanel").classList.remove('open'); }
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-wrapper')) document.getElementById("searchPanel").classList.remove('open');
});

// ===== ADMIN PANEL =====
function openAdmin() { document.getElementById("adminOverlay").classList.add('open'); }
function closeAdmin() { document.getElementById("adminOverlay").classList.remove('open'); }
function closeAdminOutside(e) { if (e.target === document.getElementById("adminOverlay")) closeAdmin(); }

function switchAdminTab(tab) {
  document.getElementById("adminAdd").style.display = tab === 'add' ? '' : 'none';
  document.getElementById("adminManage").style.display = tab === 'manage' ? '' : 'none';
  document.getElementById("atab-add").classList.toggle('active', tab === 'add');
  document.getElementById("atab-manage").classList.toggle('active', tab === 'manage');
  if (tab === 'manage') renderManageList();
}
let adminToken = localStorage.getItem("adminToken");

async function adminLogin() {
  const password = document.getElementById("adminPassword").value;

  const formData = new FormData();
  formData.append("password", password);

  const response = await fetch("http://127.0.0.1:8000/admin/login", {
    method: "POST",
    body: formData
  });

  if (response.ok) {
    const data = await response.json();
    adminToken = data.token;
    localStorage.setItem("adminToken", adminToken);
    alert("Connexion réussie ✅");
  } else {
    alert("Mot de passe incorrect ❌");
  }
}




// Subject selector based on serie
document.getElementById("adminSerie").addEventListener('change', function() {
  const serie = this.value;
  const subjectSel = document.getElementById("adminSubject");
  if (!serie || !seriesData[serie]) {
    subjectSel.innerHTML = '<option value="">Choisir d\'abord une série…</option>';
    return;
  }
  subjectSel.innerHTML = '<option value="">Choisir une matière…</option>' +
    seriesData[serie].subjects.map(s => `<option>${s.name}</option>`).join('');
});

function handleFileSelect(event) {
  const file = event.target.files[0];
  if (file) document.getElementById("fileNameDisplay").textContent = '📄 ' + file.name;
}

async function adminAddPdf() {
  const serie = document.getElementById("adminSerie").value;
  const subject = document.getElementById("adminSubject").value;
  const title = document.getElementById("adminTitle").value.trim();
  const year = document.getElementById("adminYear").value.trim();

  if (!serie || !subject || !title) {
    showToast("⚠️ Veuillez remplir tous les champs obligatoires.", true);
    return;
  }

 const formData = new FormData();
formData.append("title", title);
formData.append("serie", serie);
formData.append("subject", subject);
formData.append("file", document.getElementById("adminFile").files[0]);

await fetch("http://127.0.0.1:8000/upload", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${adminToken}`
  },
  body: formData
});



  // Recharge depuis le backend
await loadPdfs();

  // Reset form
  document.getElementById("adminSerie").value = '';
  document.getElementById("adminSubject").innerHTML = '<option value="">Choisir d\'abord une série…</option>';
  document.getElementById("adminTitle").value = '';
  document.getElementById("adminYear").value = '';
  document.getElementById("fileNameDisplay").textContent = '';

  // Refresh UI
  refreshSeriesPanel(serie);
  renderHome();
  updateStatDocs();
  showToast(`✅ "${title}" ajouté dans ${serie} › ${subject} !`);
}

function renderManageList() {
  const filter = document.getElementById("manageFilter").value;
  const list = document.getElementById("managePdfList");
  const items = filter ? pdfDatabase.filter(p => p.serie === filter) : pdfDatabase;

  if (!items.length) {
    list.innerHTML = '<div style="text-align:center;color:var(--text-3);padding:20px;font-size:0.9rem">Aucun document.</div>';
    return;
  }
  list.innerHTML = items.map(p => `
    <div class="manage-pdf-item">
      <div class="pdf-icon" style="width:32px;height:32px;border-radius:7px;background:#fee2e2;color:var(--red);display:flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:700;flex-shrink:0">PDF</div>
      <div class="pdf-info">
        <strong>${p.title}</strong>
        <span>${p.serie} › ${p.subject}${p.year ? ' · ' + p.year : ''}</span>
      </div>
      <button class="btn-del" onclick="deletePdf(${p.id})">🗑 Supprimer</button>
    </div>`).join('');
}

async function deletePdf(id) {
  if (!confirm("Supprimer ce PDF ?")) return;

  const response = await fetch(`http://127.0.0.1:8000/pdfs/${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${adminToken}`
    }
  });

  if (response.ok) {
    alert("PDF supprimé ✅");
    await loadPdfs();
  } else {
    alert("Erreur ou non autorisé ❌");
  }
}

function quickAddFromCard(serie, subject) {
  openAdmin();
  switchAdminTab('add');
  document.getElementById("adminSerie").value = serie;
  document.getElementById("adminSerie").dispatchEvent(new Event('change'));
  setTimeout(() => { document.getElementById("adminSubject").value = subject; }, 50);
  document.getElementById("adminTitle").focus();
}

// ===== TOAST =====
let toastTimeout;
function showToast(msg, isError = false) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.toggle('error', isError);
  t.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => t.classList.remove('show'), 3200);
}

// ===== SCROLL HEADER =====
window.addEventListener('scroll', () => {
  document.getElementById("header").classList.toggle('scrolled', window.scrollY > 30);
});

// ===== MOBILE MENU =====
function toggleMobile() {
  const h = document.getElementById("hamburger");
  const m = document.getElementById("mobileMenu");
  h.classList.toggle('open');
  m.classList.toggle('open');
}
function closeMobile() {
  document.getElementById("hamburger").classList.remove('open');
  document.getElementById("mobileMenu").classList.remove('open');
}

// ===== INIT =====
async function loadPdfs() {
  try {
    const response = await fetch("http://127.0.0.1:8000/pdfs");
    const data = await response.json();
    pdfDatabase = data;
    renderHome();
    Object.keys(seriesData).forEach(key => renderSeriesPanel(key));
  } catch (error) {
    console.error("Erreur chargement PDFs:", error);
  }
}
loadPdfs();

>>>>>>> 913cb10836feca381cad85e8534befe51cfc8784
