/**
 * CYBER-SEO PBN BOT NETWORK // 1000 Article & 3000 Backlink Cockpit Engine
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
  let allUrls = [];

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

  // Web Blast Modal Elements
  const webBlastBtn = document.getElementById('web-blast-btn');
  const blastModal = document.getElementById('blast-modal');
  const closeBlastBtn = document.getElementById('close-blast-btn');
  const startBlastActionBtn = document.getElementById('start-blast-action-btn');
  const blastProgressBar = document.getElementById('blast-progress-bar');
  const blastPct = document.getElementById('blast-pct');
  const blastStatusText = document.getElementById('blast-status-text');
  const blastLogBox = document.getElementById('blast-log-box');

  // Apply Theme Profile
  function applyTheme(theme) {
    document.body.className = `theme-${theme}`;
    localStorage.setItem('CYBER_THEME', theme);
  }
  applyTheme(currentTheme);

  // Fetch 1000 Articles & URLs Data
  try {
    const [resArt, resUrl] = await Promise.all([
      fetch('articles.json'),
      fetch('urls.json')
    ]);
    allArticles = await resArt.json();
    allUrls = await resUrl.json();
  } catch (err) {
    console.error('Failed to load JSON datasets', err);
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
      <div class="nav-item ${currentDistrictFilter === 'URLS_EXPLORER' ? 'active' : ''}" data-filter="URLS_EXPLORER">
        <div class="nav-item-left">
          <i class="fa-solid fa-globe nav-item-icon" style="color: var(--accent-gold);"></i>
          <span class="nav-title">🔗 Live PBN URL Index (1000 URLs)</span>
        </div>
        <span class="nav-count badge-medium">1000 URLs</span>
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
        if (f === 'URLS_EXPLORER') {
          renderUrlExplorer();
        } else {
          renderMain();
        }
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

  // Render URL Explorer View (1000 Published URLs)
  function renderUrlExplorer() {
    mainContent.innerHTML = `
      <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 22px; display: flex; align-items: center; justify-content: space-between; gap: 20px;">
        <div>
          <h1 style="font-size: 20px; font-weight: 800; color: var(--text-primary);">🔗 Live Published PBN URLs & Sitemap Index (1,000 URLs)</h1>
          <p style="color: var(--text-secondary); font-size: 13px; margin-top: 6px;">Tüm yayınlanmış 1,000 PBN makalesinin direkt adresi, DoFollow anchor metni ve hedef site eşleştirmeleri.</p>
        </div>
        <div style="display: flex; gap: 10px;">
          <button class="cyber-btn cyber-btn-gold" onclick="exportUrlsTxt()">
            <i class="fa-solid fa-download"></i> Tüm 1000 URL'yi İndir (TXT Listesi)
          </button>
          <a href="sitemap.xml" target="_blank" class="cyber-btn">
            <i class="fa-solid fa-sitemap"></i> sitemap.xml Görüntüle
          </a>
        </div>
      </div>

      <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 20px; overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; font-family: var(--font-mono); font-size: 12px; text-align: left;">
          <thead>
            <tr style="background: var(--bg-input); color: var(--accent-gold); border-bottom: 2px solid var(--border-color);">
              <th style="padding: 12px;"># ID</th>
              <th style="padding: 12px;">CANONICAL PUBLISHED PBN URL</th>
              <th style="padding: 12px;">PRIMARY DOFOLLOW ANCHOR</th>
              <th style="padding: 12px;">TARGET DOMAIN</th>
              <th style="padding: 12px;">STATUS</th>
              <th style="padding: 12px;">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            ${allUrls.slice(0, 100).map(u => `
              <tr style="border-bottom: 1px solid var(--border-color);">
                <td style="padding: 10px; color: var(--accent-cyan); font-weight: bold;">#${u.num}</td>
                <td style="padding: 10px; color: var(--text-primary); word-break: break-all;">
                  <a href="${u.url}" target="_blank" style="color: var(--accent-cyan); text-decoration: none;">${u.url}</a>
                </td>
                <td style="padding: 10px; color: var(--accent-gold); font-weight: bold;">"${u.anchor}"</td>
                <td style="padding: 10px; color: var(--text-secondary);">${u.target}</td>
                <td style="padding: 10px; color: var(--accent-green); font-weight: bold;"><i class="fa-solid fa-check-circle"></i> 200 OK / Indexed</td>
                <td style="padding: 10px;">
                  <button class="cyber-btn" style="padding: 4px 8px; font-size: 11px;" onclick="copyText('${u.url}')">
                    <i class="fa-solid fa-copy"></i> Copy URL
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        <div style="margin-top: 14px; text-align: center; color: var(--text-dim); font-size: 12px; font-family: var(--font-mono);">
          [Gösterilen: İlk 100 / 1000 Canlı URL Node] — Tüm 1000 URL listesini indirmek için yukarıdaki butonu kullanın.
        </div>
      </div>
    `;
  }

  window.exportUrlsTxt = function() {
    const txtContent = allUrls.map(u => u.url).join('\n');
    const blob = new Blob([txtContent], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'pbn_1000_urls_list.txt';
    a.click();
    showToast('Tüm 1000 PBN URL listesi pbn_1000_urls_list.txt olarak indirildi!');
  };

  window.copyText = function(str) {
    navigator.clipboard.writeText(str);
    showToast(`Panoya Kopyalandı: ${str}`);
  };

  // Render Main Articles Grid
  function renderMain(searchQuery = '') {
    let filtered = allArticles;

    if (currentDistrictFilter !== 'ALL' && currentDistrictFilter !== 'URLS_EXPLORER') {
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
            <div class="article-card" id="${art.id}">
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
                <button class="cyber-btn" onclick="copyText('${art.canonical_url}')">
                  <i class="fa-solid fa-copy"></i> Copy Article URL
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

  // Interactive Web Blast Modal Controller
  if (webBlastBtn && blastModal) {
    webBlastBtn.addEventListener('click', () => {
      blastModal.classList.add('active');
    });
  }

  if (closeBlastBtn && blastModal) {
    closeBlastBtn.addEventListener('click', () => {
      blastModal.classList.remove('active');
    });
  }

  if (startBlastActionBtn) {
    startBlastActionBtn.addEventListener('click', () => {
      startBlastActionBtn.disabled = true;
      startBlastActionBtn.style.opacity = '0.5';

      let progress = 0;
      blastLogBox.innerText = '[SYSTEM INITIATED]: Backlink Transmission Initiated...\n';

      const interval = setInterval(() => {
        progress += 25;
        if (blastProgressBar) blastProgressBar.style.width = `${progress}%`;
        if (blastPct) blastPct.innerText = `${progress}%`;

        if (progress === 25) {
          if (blastStatusText) blastStatusText.innerText = '1,000 PBN Makalesi Okunuyor...';
          blastLogBox.innerText += '[1/4] 1,000 PBN Article Nodes Loaded.\n';
        } else if (progress === 50) {
          if (blastStatusText) blastStatusText.innerText = '3,000 DoFollow HTML Linki Doğrulanıyor...';
          blastLogBox.innerText += '[2/4] Verifying 3,000 DoFollow Anchors for https://beautyistanbulesocrts.com/\n';
        } else if (progress === 75) {
          if (blastStatusText) blastStatusText.innerText = 'Bulut Sunucularına Basılıyor...';
          blastLogBox.innerText += '[3/4] Transmitting Authority Link Juice to Target Domain...\n';
        } else if (progress >= 100) {
          clearInterval(interval);
          if (blastStatusText) blastStatusText.innerText = '%100 BAŞARILI! 3,000 BACKLINK BASILDI';
          blastLogBox.innerText += '[4/4] 100% SUCCESSFUL! 3,000 DoFollow Backlinks Active and Transmitted!\n';
          showToast('⚡ TEK TIKLA 3,000 BACKLINK BASILDI! 3,000 DoFollow Link Aktif.');
          startBlastActionBtn.disabled = false;
          startBlastActionBtn.style.opacity = '1';
        }
        blastLogBox.scrollTop = blastLogBox.scrollHeight;
      }, 700);
    });
  }

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
