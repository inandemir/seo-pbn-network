/**
 * CYBER-SEO PULSE // Authority Backlink Network Engine
 * Developer & SEO Lead: İnan Demir
 */

document.addEventListener('DOMContentLoaded', () => {
  let currentLang = localStorage.getItem('CYBER_LANG') || 'tr';
  let currentCatId = 'vip_escorts';
  let currentTheme = localStorage.getItem('CYBER_THEME') || 'default';

  const categories = window.SEO_CATEGORIES || [];

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

  // Render Sidebar Navigation
  function renderSidebar() {
    if (!sidebarNav) return;
    sidebarNav.innerHTML = `
      <div class="nav-section-title"><i class="fa-solid fa-layer-group" style="color: var(--accent-gold);"></i> SEO AUTHORITY DIRECTORY</div>
    `;

    categories.forEach(cat => {
      const title = currentLang === 'tr' ? cat.nav_title_tr : cat.nav_title_en;
      const navItem = document.createElement('div');
      navItem.className = `nav-item ${cat.cat_id === currentCatId ? 'active' : ''}`;
      navItem.setAttribute('data-cat', cat.cat_id);

      navItem.innerHTML = `
        <div class="nav-item-left">
          <i class="fa-solid ${cat.icon} nav-item-icon" style="color: var(--accent-cyan);"></i>
          <span class="nav-title">${title}</span>
        </div>
      `;

      navItem.addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        navItem.classList.add('active');
        renderCategory(cat.cat_id);
      });

      sidebarNav.appendChild(navItem);
    });

    // Add Sidebar Partner Link
    const partnerBox = document.createElement('div');
    partnerBox.style.cssText = 'margin-top: auto; padding: 14px; background: rgba(245, 158, 11, 0.08); border: 1px solid var(--accent-gold); border-radius: var(--radius-md);';
    partnerBox.innerHTML = `
      <div style="font-size: 10px; color: var(--accent-gold); font-family: var(--font-mono); font-weight:700; margin-bottom: 6px;">OFFICIAL DOFOLLOW PARTNER</div>
      <a href="https://beautyistanbulesocrts.com/" target="_blank" rel="noopener follow" style="color: var(--text-primary); font-weight: 700; font-size: 12.5px; text-decoration: none; display: flex; align-items: center; gap: 6px;">
        <i class="fa-solid fa-arrow-up-right-from-square" style="color: var(--accent-gold);"></i> Beauty Istanbul Escorts
      </a>
    `;
    sidebarNav.appendChild(partnerBox);
  }

  // Render Category & Articles
  function renderCategory(catId) {
    currentCatId = catId;
    renderSidebar();

    const cat = categories.find(c => c.cat_id === catId) || categories[0];
    const bannerTitle = currentLang === 'tr' ? cat.banner_title_tr : cat.banner_title_en;
    const bannerDesc = currentLang === 'tr' ? cat.banner_desc_tr : cat.banner_desc_en;

    mainContent.innerHTML = `
      <!-- Executive SEO Metrics Tiles -->
      <div class="metrics-grid">
        <div class="metric-tile">
          <div class="metric-header">
            <span>TARGET DOMAIN</span>
            <i class="fa-solid fa-globe" style="color: var(--accent-cyan);"></i>
          </div>
          <div class="metric-value" style="font-size: 15px; color: var(--accent-cyan);">beautyistanbulesocrts.com</div>
          <div class="metric-sub"><i class="fa-solid fa-check-circle"></i> Live 200 OK</div>
        </div>

        <div class="metric-tile">
          <div class="metric-header">
            <span>DOMAIN AUTHORITY (DA)</span>
            <i class="fa-solid fa-chart-line" style="color: var(--accent-gold);"></i>
          </div>
          <div class="metric-value" style="color: var(--accent-gold);">84 / 100</div>
          <div class="metric-sub" style="color: var(--accent-gold);"><i class="fa-solid fa-arrow-up"></i> Top 1% Authority Node</div>
        </div>

        <div class="metric-tile">
          <div class="metric-header">
            <span>LINK RELATION</span>
            <i class="fa-solid fa-link" style="color: var(--accent-green);"></i>
          </div>
          <div class="metric-value" style="color: var(--accent-green);">rel="dofollow"</div>
          <div class="metric-sub"><i class="fa-solid fa-bolt"></i> 100% Link Juice Pass</div>
        </div>

        <div class="metric-tile">
          <div class="metric-header">
            <span>GOOGLE CRAWL STATUS</span>
            <i class="fa-solid fa-robot" style="color: var(--accent-purple);"></i>
          </div>
          <div class="metric-value" style="color: var(--accent-purple);">INDEXED 24/7</div>
          <div class="metric-sub" style="color: var(--accent-purple);"><i class="fa-solid fa-rotate"></i> GitHub Cloud Active</div>
        </div>
      </div>

      <!-- Hero Banner -->
      <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(6, 182, 212, 0.08)); border: 1px solid var(--border-highlight); border-radius: var(--radius-lg); padding: 22px; display: flex; align-items: center; justify-content: space-between; gap: 20px;">
        <div>
          <h1 style="font-size: 20px; font-weight: 800; color: var(--text-primary);">${bannerTitle}</h1>
          <p style="color: var(--text-secondary); font-size: 13px; margin-top: 6px;">${bannerDesc}</p>
        </div>
        <div>
          <a href="https://beautyistanbulesocrts.com/" target="_blank" rel="noopener follow" class="cyber-btn cyber-btn-gold">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Visit Target Site
          </a>
        </div>
      </div>

      <!-- Articles Container -->
      <div class="articles-grid">
        ${cat.articles.map(art => {
          const title = currentLang === 'tr' ? art.title_tr : art.title_en;
          const desc = currentLang === 'tr' ? art.desc_tr : art.desc_en;
          const body = currentLang === 'tr' ? art.body_tr : art.body_en;

          return `
            <div class="article-card" id="card-${art.id}">
              <div class="article-header">
                <span class="article-tag">${art.tag}</span>
                <span style="font-family: var(--font-mono); font-size: 11px; color: var(--accent-green);"><i class="fa-solid fa-check"></i> DoFollow Verified</span>
              </div>
              <div class="article-title">${title}</div>
              <div class="article-excerpt">${desc}</div>

              <div class="article-body-box" id="body-${art.id}">
                ${body}
              </div>

              <div style="display: flex; gap: 10px; margin-top: 10px;">
                <a href="https://beautyistanbulesocrts.com/" target="_blank" rel="noopener follow" class="cyber-btn cyber-btn-gold">
                  <i class="fa-solid fa-link"></i> Beauty Istanbul Escorts
                </a>
                <button class="cyber-btn" onclick="copyTargetLink()">
                  <i class="fa-solid fa-copy"></i> Copy Target URL
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Footer -->
      <footer style="margin-top: 30px; padding: 18px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: space-between;">
        <div style="font-size: 12px; color: var(--text-secondary);">
          &copy; 2026 CYBER-SEO PULSE Authority Network. Developer & SEO Lead: <strong>İnan Demir</strong>.
        </div>
        <div>
          <a href="https://beautyistanbulesocrts.com/" target="_blank" rel="noopener follow" style="color: var(--accent-gold); text-decoration: none; font-family: var(--font-mono); font-size: 12.5px; font-weight: 700;">
            <i class="fa-solid fa-globe"></i> https://beautyistanbulesocrts.com/
          </a>
        </div>
      </footer>
    `;
  }

  window.copyTargetLink = function() {
    navigator.clipboard.writeText('https://beautyistanbulesocrts.com/');
    showToast('Target URL copied to clipboard: https://beautyistanbulesocrts.com/');
  };

  // Language Switcher
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'tr' ? 'en' : 'tr';
      localStorage.setItem('CYBER_LANG', currentLang);
      if (currentLangLabel) currentLangLabel.innerText = currentLang === 'tr' ? '🇹🇷 TR' : '🇬🇧 EN';
      if (settingLangSelect) settingLangSelect.value = currentLang;
      renderCategory(currentCatId);
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
      renderCategory(currentCatId);
      if (settingsModal) settingsModal.classList.remove('active');

      showToast('Settings successfully updated!');
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
  renderCategory('vip_escorts');
});
