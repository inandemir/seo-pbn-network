/**
 * CYBER-SEO PBN BOT NETWORK // 1000 Article PBN Engine
 * Developer & SEO Lead: İnan Demir
 * Target Domain: https://beautyistanbulesocrts.com/
 */

document.addEventListener('DOMContentLoaded', async () => {
  let currentLang = localStorage.getItem('CYBER_LANG') || 'tr';
  let currentTheme = localStorage.getItem('CYBER_THEME') || 'default';
  let currentDistrictFilter = 'ALL';
  let currentPage = 1;
  const pageSize = 20;
  let allArticles = [];

  const mainContent = document.getElementById('main-content');
  const sidebarNav = document.getElementById('sidebar-nav');
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const currentLangLabel = document.getElementById('current-lang-label');

  const openSettingsBtn = document.getElementById('open-settings-btn');
  const closeSettingsBtn = document.getElementById('close-settings-btn');
  const settingsModal = document.getElementById('settings-modal');
  const settingLangSelect = document.getElementById('setting-lang-select');
  const settingThemeSelect = document.getElementById('setting-theme-select');
  const saveSettingsBtn = document.getElementById('save-settings-btn');

  // Apply Theme Profile
  function applyTheme(theme) {
    document.body.className = `theme-${theme}`;
    localStorage.setItem('CYBER_THEME', theme);
  }
  applyTheme(currentTheme);

  // Fetch 1000 Articles Data
  try {
    const res = await fetch('articles.json');
    allArticles = await res.json();
  } catch (err) {
    console.error('Failed to load articles.json', err);
  }

  // Render Sidebar
  function renderSidebar() {
    if (!sidebarNav) return;
    const dict = window.CYBER_TRANSLATIONS[currentLang] || window.CYBER_TRANSLATIONS.tr;

    sidebarNav.innerHTML = `
      <div class="nav-section-title"><i class="fa-solid fa-layer-group" style="color: var(--accent-gold);"></i> ${dict.level_header}</div>
      <div class="nav-item ${currentDistrictFilter === 'ALL' ? 'active' : ''}" data-filter="ALL">
        <div class="nav-item-left">
          <i class="fa-solid fa-list-check nav-item-icon" style="color: var(--accent-cyan);"></i>
          <span class="nav-title">${dict.nav_all} (1000)</span>
        </div>
      </div>
      <div class="nav-item ${currentDistrictFilter === 'Taksim' ? 'active' : ''}" data-filter="Taksim">
        <div class="nav-item-left">
          <i class="fa-solid fa-location-dot nav-item-icon" style="color: var(--accent-gold);"></i>
          <span class="nav-title">Taksim & Beyoğlu</span>
        </div>
        <span class="nav-count">50 Node</span>
      </div>
      <div class="nav-item ${currentDistrictFilter === 'Beşiktaş' ? 'active' : ''}" data-filter="Beşiktaş">
        <div class="nav-item-left">
          <i class="fa-solid fa-gem nav-item-icon" style="color: var(--accent-purple);"></i>
          <span class="nav-title">Beşiktaş & Nişantaşı</span>
        </div>
        <span class="nav-count">50 Node</span>
      </div>
      <div class="nav-item ${currentDistrictFilter === 'Şişli' ? 'active' : ''}" data-filter="Şişli">
        <div class="nav-item-left">
          <i class="fa-solid fa-building nav-item-icon" style="color: var(--accent-green);"></i>
          <span class="nav-title">Şişli & Levent</span>
        </div>
        <span class="nav-count">50 Node</span>
      </div>
      <div class="nav-item ${currentDistrictFilter === 'Kadıköy' ? 'active' : ''}" data-filter="Kadıköy">
        <div class="nav-item-left">
          <i class="fa-solid fa-city nav-item-icon" style="color: var(--accent-cyan);"></i>
          <span class="nav-title">Kadıköy & Ataşehir</span>
        </div>
        <span class="nav-count">50 Node</span>
      </div>
    `;

    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const f = item.getAttribute('data-filter');
        currentDistrictFilter = f;
        currentPage = 1;
        renderSidebar();
        renderMain();
      });
    });

    // Add Sidebar Partner Box
    const partnerBox = document.createElement('div');
    partnerBox.style.cssText = 'margin-top: auto; padding: 14px; background: rgba(245, 158, 11, 0.08); border: 1px solid var(--accent-gold); border-radius: var(--radius-md);';
    partnerBox.innerHTML = `
      <div style="font-size: 10px; color: var(--accent-gold); font-family: var(--font-mono); font-weight:700; margin-bottom: 6px;">TARGET DOFOLLOW BACKLINK</div>
      <a href="https://beautyistanbulesocrts.com/" target="_blank" rel="noopener follow" style="color: var(--text-primary); font-weight: 700; font-size: 12.5px; text-decoration: none; display: flex; align-items: center; gap: 6px;">
        <i class="fa-solid fa-arrow-up-right-from-square" style="color: var(--accent-gold);"></i> Beauty Istanbul Escorts
      </a>
    `;
    sidebarNav.appendChild(partnerBox);
  }

  // Render Main Content
  function renderMain(searchQuery = '') {
    let filtered = allArticles;

    if (currentDistrictFilter !== 'ALL') {
      filtered = filtered.filter(a => a.district === currentDistrictFilter);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(a => 
        a.title_tr.toLowerCase().includes(q) || 
        a.desc_tr.toLowerCase().includes(q) || 
        a.district.toLowerCase().includes(q) ||
        a.anchor.toLowerCase().includes(q)
      );
    }

    const totalFiltered = filtered.length;
    const totalPages = Math.ceil(totalFiltered / pageSize) || 1;
    if (currentPage > totalPages) currentPage = totalPages;

    const startIdx = (currentPage - 1) * pageSize;
    const pageArticles = filtered.slice(startIdx, startIdx + pageSize);

    mainContent.innerHTML = `
      <!-- Executive PBN Metrics Tiles -->
      <div class="metrics-grid">
        <div class="metric-tile">
          <div class="metric-header">
            <span>TARGET DOMAIN</span>
            <i class="fa-solid fa-globe" style="color: var(--accent-cyan);"></i>
          </div>
          <div class="metric-value" style="font-size: 14px; color: var(--accent-cyan);">beautyistanbulesocrts.com</div>
          <div class="metric-sub"><i class="fa-solid fa-check-circle"></i> DoFollow Target Active</div>
        </div>

        <div class="metric-tile">
          <div class="metric-header">
            <span>TOTAL PBN ARTICLES</span>
            <i class="fa-solid fa-database" style="color: var(--accent-gold);"></i>
          </div>
          <div class="metric-value" style="color: var(--accent-gold);">1,000 Articles</div>
          <div class="metric-sub" style="color: var(--accent-gold);"><i class="fa-solid fa-check"></i> 100% Generated & Live</div>
        </div>

        <div class="metric-tile">
          <div class="metric-header">
            <span>DOFOLLOW LINK NODES</span>
            <i class="fa-solid fa-link" style="color: var(--accent-green);"></i>
          </div>
          <div class="metric-value" style="color: var(--accent-green);">3,000 Anchors</div>
          <div class="metric-sub"><i class="fa-solid fa-bolt"></i> 24/7 Cloud Indexing</div>
        </div>

        <div class="metric-tile">
          <div class="metric-header">
            <span>DOMAIN AUTHORITY (DA)</span>
            <i class="fa-solid fa-chart-line" style="color: var(--accent-purple);"></i>
          </div>
          <div class="metric-value" style="color: var(--accent-purple);">DA 88 / 100</div>
          <div class="metric-sub" style="color: var(--accent-purple);"><i class="fa-solid fa-shield"></i> PBN Authority Node</div>
        </div>
      </div>

      <!-- Search & Filter Bar -->
      <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 16px; display: flex; align-items: center; justify-content: space-between; gap: 16px;">
        <div style="position: relative; flex: 1;">
          <i class="fa-solid fa-magnifying-glass" style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: var(--text-dim);"></i>
          <input type="text" id="pbn-search-input" value="${searchQuery}" placeholder="1000 PBN makalesi arasında arama yapın (Örn: Taksim, Beşiktaş, VIP, #452)..." class="search-input" style="padding-left: 40px; width: 100%; background: var(--bg-input); border: 1px solid var(--border-color); color: var(--text-primary); padding-top: 10px; padding-bottom: 10px; border-radius: var(--radius-md); outline: none;">
        </div>
        <div style="font-family: var(--font-mono); font-size: 12px; color: var(--text-dim);">
          Gösterilen: <strong style="color: var(--accent-gold);">${startIdx + 1} - ${Math.min(startIdx + pageSize, totalFiltered)}</strong> / ${totalFiltered} Makale
        </div>
      </div>

      <!-- Articles Grid -->
      <div class="articles-grid">
        ${pageArticles.map(art => {
          const title = currentLang === 'tr' ? art.title_tr : art.title_en;
          const desc = currentLang === 'tr' ? art.desc_tr : art.desc_en;
          const body = currentLang === 'tr' ? art.body_tr : art.body_en;

          return `
            <div class="article-card" id="card-${art.id}">
              <div class="article-header">
                <span class="article-tag">${art.tag}</span>
                <span style="font-family: var(--font-mono); font-size: 11px; color: var(--accent-green);"><i class="fa-solid fa-check-circle"></i> DoFollow Anchor: "${art.anchor}"</span>
              </div>
              <div class="article-title">${title}</div>
              <div class="article-excerpt">${desc}</div>

              <div class="article-body-box" id="body-${art.id}">
                ${body}
              </div>

              <div style="display: flex; gap: 10px; margin-top: 10px;">
                <a href="https://beautyistanbulesocrts.com/" target="_blank" rel="noopener follow" class="cyber-btn cyber-btn-gold">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i> Beauty Istanbul Escorts
                </a>
                <button class="cyber-btn" onclick="copyTargetLink()">
                  <i class="fa-solid fa-copy"></i> Copy Target URL
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Pagination -->
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
        <button class="cyber-btn" id="btn-prev-page" ${currentPage <= 1 ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''}>
          <i class="fa-solid fa-chevron-left"></i> Önceki Sayfa
        </button>
        <span style="font-family: var(--font-mono); font-size: 12px; color: var(--text-secondary);">
          Sayfa <strong style="color: var(--accent-cyan);">${currentPage}</strong> / ${totalPages}
        </span>
        <button class="cyber-btn" id="btn-next-page" ${currentPage >= totalPages ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''}>
          Sonraki Sayfa <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      <!-- Footer -->
      <footer style="margin-top: 20px; padding: 18px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: space-between;">
        <div style="font-size: 12px; color: var(--text-secondary);">
          &copy; 2026 CYBER-SEO PBN BOT NETWORK. Developer & SEO Lead: <strong>İnan Demir</strong>.
        </div>
        <div>
          <a href="https://beautyistanbulesocrts.com/" target="_blank" rel="noopener follow" style="color: var(--accent-gold); text-decoration: none; font-family: var(--font-mono); font-size: 12.5px; font-weight: 700;">
            <i class="fa-solid fa-globe"></i> https://beautyistanbulesocrts.com/
          </a>
        </div>
      </footer>
    `;

    // Bind Search Input Listener
    const searchInput = document.getElementById('pbn-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const val = e.target.value;
        currentPage = 1;
        renderMain(val);
        const newInput = document.getElementById('pbn-search-input');
        if (newInput) {
          newInput.focus();
          newInput.setSelectionRange(val.length, val.length);
        }
      });
    }

    // Bind Pagination Buttons
    const btnPrev = document.getElementById('btn-prev-page');
    const btnNext = document.getElementById('btn-next-page');

    if (btnPrev && currentPage > 1) {
      btnPrev.addEventListener('click', () => {
        currentPage--;
        renderMain(searchQuery);
      });
    }

    if (btnNext && currentPage < totalPages) {
      btnNext.addEventListener('click', () => {
        currentPage++;
        renderMain(searchQuery);
      });
    }
  }

  window.copyTargetLink = function() {
    navigator.clipboard.writeText('https://beautyistanbulesocrts.com/');
    showToast('Target URL copied: https://beautyistanbulesocrts.com/');
  };

  // Language Switcher
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'tr' ? 'en' : 'tr';
      localStorage.setItem('CYBER_LANG', currentLang);
      if (currentLangLabel) currentLangLabel.innerText = currentLang === 'tr' ? '🇹🇷 TR' : '🇬🇧 EN';
      if (settingLangSelect) settingLangSelect.value = currentLang;
      renderSidebar();
      renderMain();
      showToast(currentLang === 'tr' ? 'Dil Türkçe olarak ayarlandı 🇹🇷' : 'Language switched to English 🇬🇧');
    });
  }

  // Settings Modal Handlers
  if (openSettingsBtn) {
    openSettingsBtn.addEventListener('click', () => {
      if (settingLangSelect) settingLangSelect.value = currentLang;
      if (settingThemeSelect) settingThemeSelect.value = currentTheme;
      if (settingsModal) settingsModal.classList.add('active');
    });
  }

  if (closeSettingsBtn) {
    closeSettingsBtn.addEventListener('click', () => {
      if (settingsModal) settingsModal.classList.remove('active');
    });
  }

  if (saveSettingsBtn) {
    saveSettingsBtn.addEventListener('click', () => {
      if (settingLangSelect) currentLang = settingLangSelect.value;
      if (settingThemeSelect) currentTheme = settingThemeSelect.value;

      localStorage.setItem('CYBER_LANG', currentLang);
      localStorage.setItem('CYBER_THEME', currentTheme);

      applyTheme(currentTheme);
      if (currentLangLabel) currentLangLabel.innerText = currentLang === 'tr' ? '🇹🇷 TR' : '🇬🇧 EN';
      renderSidebar();
      renderMain();
      if (settingsModal) settingsModal.classList.remove('active');

      showToast('PBN Settings successfully updated!');
    });
  }

  // Toast System
  function showToast(msg) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-link" style="color: var(--accent-gold);"></i> ${msg}`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  // Initial Render
  renderSidebar();
  renderMain();
});
