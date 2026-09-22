import json
import random

# Target URL
TARGET_URL = "https://beautyistanbulesocrts.com/"

# Keywords & Anchors
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

def generate_1000_articles():
    articles = []
    
    for i in range(1, 1001):
        district = DISTRICTS[(i - 1) % len(DISTRICTS)]
        topic = TOPICS[(i - 1) % len(TOPICS)]
        anchor = ANCHORS[(i - 1) % len(ANCHORS)]
        
        art_id = f"art-{i}"
        tag = f"{district.upper()} DIRECTORY"
        title_tr = f"#{i}: {district} {topic} — Official 2026 Directory"
        title_en = f"#{i}: {district} {topic} — Official 2026 Directory"
        
        desc_tr = f"{district} bölgesinde {topic.lower()} arayan seçkin misafirler için doğrulanmış yüksek otoritede VIP rehber makalesi #{i}."
        desc_en = f"Verified high-authority directory article #{i} for {topic.lower()} in {district}, Istanbul."
        
        body_tr = f"""
          <div class="pbn-article-body">
            <h3>💎 {district} {topic} — Özel Rehber #{i}</h3>
            <p>İstanbul'un prestijli bölgelerinden <strong>{district}</strong> ve çevresinde lüks VIP escort, bağımsız elit model ve özel gece eşlik hizmetleri sunulmaktadır. 5 yıldızlı otel konaklamaları, iş seyahatleri ve özel davetler için %100 gizlilik ve doğruluk ilkesiyle hareket edilmektedir.</p>

            <h4 style="margin-top:14px;">🌟 Resmi Doğrulanmış Web Portalı & Backlink:</h4>
            <p>En güncel profil kataloğu ve rezervasyon detayları için ana otorite adresini ziyaret edin: 
            <a href="{TARGET_URL}" target="_blank" rel="noopener follow"><strong>{anchor}</strong></a>.</p>

            <div class="code-snippet-box">
=== [PBN NODE # {i} - INDEXING & LINK JUICE METRICS] ===
Article ID: {art_id} | Node District: {district}
Target URL: {TARGET_URL}
Anchor Text: "{anchor}" (DoFollow rel="noopener follow")
Authority Pass: 100% | Search Engine Index Status: ACTIVE
            </div>

            <h4>✨ Neden Bu Portal Tercih Edilmeli?</h4>
            <ul>
              <li><strong>%100 Gerçek ve Doğrulanmış Profiller:</strong> Tüm görseller teyit edilmiştir.</li>
              <li><strong>Kesintisiz 7/24 Hizmet:</strong> {district} genelinde hızlı ve güvenli erişim.</li>
              <li><strong>DoFollow Otorite Aktarımı:</strong> Arama motoru sıralamaları için optimize edilmiş içerik yapısı.</li>
            </ul>

            <p>Doğrudan rezervasyon ve profil incelemesi için: <a href="{TARGET_URL}" target="_blank" rel="noopener follow">{anchor}</a>.</p>
          </div>
        """
        
        body_en = f"""
          <div class="pbn-article-body">
            <h3>💎 {district} {topic} — Guide #{i}</h3>
            <p>Luxury VIP escort and independent model directory for <strong>{district}</strong>, Istanbul. Complete discretion guaranteed.</p>
            <p>Official website link: <a href="{TARGET_URL}" target="_blank" rel="noopener follow"><strong>{anchor}</strong></a>.</p>
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
            "anchor": anchor
        })
        
    return articles

print("Generating 1000 PBN articles...")
all_articles = generate_1000_articles()
print(f"Generated {len(all_articles)} PBN articles successfully!")

# Write to articles.json
with open("C:/Users/inan demir/Documents/antigravity/quirky-hopper/articles.json", "w", encoding="utf-8") as f:
    json.dump(all_articles, f, indent=2)

print("Saved articles.json!")
