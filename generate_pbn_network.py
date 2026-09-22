import json
import os

TARGET_URL = "https://beautyistanbulesocrts.com/"
PBN_BASE_URL = "https://inandemir.github.io/seo-pbn-network/"

ANCHORS = [
    "Beauty Istanbul Escorts",
    "Istanbul VIP Escort",
    "Istanbul Escort Bayan",
    "High Class Companion Istanbul",
    "Elit Model Istanbul",
    "Independent Escorts Istanbul",
    "Taksim VIP Escort",
    "Beşiktaş Luxury Companion",
    "Şişli Independent Escorts",
    "Kadıköy VIP Escort"
]

DISTRICTS = [
    "Taksim", "Beşiktaş", "Şişli", "Kadıköy", "Ataşehir", "Levent", "Florya", 
    "Ataköy", "Nişantaşı", "Etiler", "Bebek", "Bakırköy", "Maslak", "Ulus", 
    "Beyoğlu", "Fatih", "Pendik", "Üsküdar", "Maltepe", "Sarıyer"
]

TOPICS = [
    "VIP Escort & Luxury Companion Services",
    "Independent Model Directory & Agency Review",
    "Nightlife Guide & Private Escort Companion",
    "Five-Star Hotel Accompaniment & Dinner Companion",
    "Exclusive High-Class Escort Catalog"
]

def generate_articles_and_urls():
    articles = []
    url_list = []
    total_links = 0

    for i in range(1, 1001):
        district = DISTRICTS[(i - 1) % len(DISTRICTS)]
        topic = TOPICS[(i - 1) % len(TOPICS)]
        primary_anchor = ANCHORS[(i - 1) % len(ANCHORS)]
        secondary_anchor = ANCHORS[(i * 3) % len(ANCHORS)]
        
        art_id = f"art-{i}"
        canonical_url = f"{PBN_BASE_URL}#art-{i}"
        tag = f"{district.upper()} DIRECTORY"
        title_tr = f"#{i}: {district} {topic} — Official 2026 SEO Directory"
        title_en = f"#{i}: {district} {topic} — Official 2026 SEO Directory"
        
        desc_tr = f"{district} bölgesinde {topic.lower()} arayanlar için hazırlanan doğrulanmış yüksek otorite makalesi #{i}. Ana sponsor: Beauty Istanbul Escorts."
        desc_en = f"Verified high-authority directory article #{i} for {topic.lower()} in {district}. Official sponsor: Beauty Istanbul Escorts."
        
        body_tr = f"""
          <div class="pbn-article-body">
            <div class="pbn-meta-badge">
              <span><i class="fa-solid fa-link"></i> 3 DoFollow Links Active</span>
              <span><i class="fa-solid fa-shield"></i> DA 88 Authority Node</span>
              <span><i class="fa-solid fa-globe"></i> Indexed Node #{i}</span>
            </div>

            <h3>💎 {district} {topic} — Özel Rehber #{i}</h3>
            <p>İstanbul'un en gözde ilçelerinden <strong>{district}</strong> ve çevresinde lüks VIP escort, bağımsız elit model ve özel gece eşlik hizmetleri sunulmaktadır. İş seyahatlerinizde ve özel organizasyonlarınızda %100 gizlilik ve doğruluk ilkesiyle hareket edilmektedir.</p>

            <h4 style="margin-top:14px; color: var(--accent-gold);">🌟 Resmi Otorite Portalı & DoFollow Bağlantı #1:</h4>
            <p>En güncel profil kataloğu ve rezervasyon detayları için ana otorite adresini ziyaret edin: 
            <a href="{TARGET_URL}" target="_blank" rel="noopener follow" class="pbn-dofollow-link"><strong><i class="fa-solid fa-arrow-up-right-from-square"></i> {primary_anchor}</strong></a>.</p>

            <div class="code-snippet-box">
=== [PBN BACKLINK NODE METRICS - ARTICLE #{i}] ===
Canonical URL: {canonical_url}
Target URL: {TARGET_URL}
Primary Anchor: "{primary_anchor}" (rel="noopener follow")
Secondary Anchor: "{secondary_anchor}" (rel="noopener follow")
Authority Pass: 100% DoFollow Link Juice | Status: ACTIVE 24/7
            </div>

            <h4>✨ Kalite ve Gizlilik Standartları:</h4>
            <ul>
              <li><strong>%100 Doğrulanmış Profiller:</strong> Tüm görseller teyit edilmiştir.</li>
              <li><strong>7/24 Kesintisiz Hizmet:</strong> {district} genelinde hızlı erişim.</li>
              <li><strong>DoFollow SEO Link Gücü:</strong> Google arama sonuçlarında üst sıralar için optimize edilmiş bağlantı: 
              <a href="{TARGET_URL}" target="_blank" rel="noopener follow" class="pbn-dofollow-link"><strong>{secondary_anchor}</strong></a>.</li>
            </ul>

            <h4 style="margin-top:14px; color: var(--accent-cyan);">🚀 Doğrudan Erişim Bağlantısı #3:</h4>
            <p>Tüm katalog ve VIP modelleri incelemek için tıklayın: 
            <a href="{TARGET_URL}" target="_blank" rel="noopener follow" class="pbn-dofollow-link"><strong>{TARGET_URL}</strong></a>.</p>
          </div>
        """
        
        body_en = f"""
          <div class="pbn-article-body">
            <h3>💎 {district} {topic} — Guide #{i}</h3>
            <p>Luxury VIP escort and independent model directory for <strong>{district}</strong>, Istanbul. Complete discretion guaranteed.</p>
            <p>Official website link: <a href="{TARGET_URL}" target="_blank" rel="noopener follow" class="pbn-dofollow-link"><strong>{primary_anchor}</strong></a>.</p>
          </div>
        """
        
        articles.append({
            "id": art_id,
            "num": i,
            "district": district,
            "tag": tag,
            "title_tr": title_tr,
            "title_en": title_en,
            "desc_tr": desc_tr,
            "desc_en": desc_en,
            "body_tr": body_tr,
            "body_en": body_en,
            "anchor": primary_anchor,
            "canonical_url": canonical_url,
            "target_url": TARGET_URL
        })

        url_list.append({
            "num": i,
            "id": art_id,
            "url": canonical_url,
            "anchor": primary_anchor,
            "district": district,
            "target": TARGET_URL
        })

        total_links += 3

    return articles, url_list, total_links

articles, urls, total_links = generate_articles_and_urls()

# Save articles.json
with open("articles.json", "w", encoding="utf-8") as f:
    json.dump(articles, f, indent=2)

# Save urls.json
with open("urls.json", "w", encoding="utf-8") as f:
    json.dump(urls, f, indent=2)

# Generate sitemap.xml for Google Search Console
sitemap_xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
for u in urls:
    sitemap_xml += f'  <url>\n    <loc>{u["url"]}</loc>\n    <lastmod>2026-09-23</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n'
sitemap_xml += '</urlset>\n'

with open("sitemap.xml", "w", encoding="utf-8") as f:
    f.write(sitemap_xml)

print(f"Generated {len(articles)} articles, {len(urls)} published URLs, and {total_links} DoFollow links!")
