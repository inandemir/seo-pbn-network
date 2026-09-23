import json
import gzip

TARGET_URL = "https://beautyistanbulesocrts.com/"
PBN_BASE_URL = "https://inandemir.github.io/seo-pbn-network/"
TOTAL_ARTICLES = 100000
LINKS_PER_ARTICLE = 3
TOTAL_BACKLINKS = TOTAL_ARTICLES * LINKS_PER_ARTICLE

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
    "Kadıköy VIP Escort",
    "Ataşehir Escort Bayan",
    "Levent VIP Companion",
    "Florya Escort Directory",
    "Ataköy Independent Escorts",
    "Nişantaşı Luxury Escorts"
]

DISTRICTS = [
    "Taksim", "Beşiktaş", "Şişli", "Kadıköy", "Ataşehir", "Levent", "Florya", 
    "Ataköy", "Nişantaşı", "Etiler", "Bebek", "Bakırköy", "Maslak", "Ulus", 
    "Beyoğlu", "Fatih", "Pendik", "Üsküdar", "Maltepe", "Sarıyer",
    "Karaköy", "Ortaköy", "Mecidiyeköy", "Bostancı", "Göztepe", "Suadiye",
    "Caddebostan", "Moda", "Acıbadem", "Beylerbeyi", "Çengelköy", "Kandilli"
]

TOPICS = [
    "VIP Escort & Luxury Companion Services",
    "Independent Model Directory & Agency Review",
    "Nightlife Guide & Private Escort Companion",
    "Five-Star Hotel Accompaniment & Dinner Companion",
    "Exclusive High-Class Escort Catalog",
    "Elite Companion Escort & Private Meeting Guide"
]

print("====================================================================")
print("  CYBER-SEO PBN BOT ENGINE v3.0 - 100,000 BACKLINK MATRIX GENERATOR ")
print("  Developer: Inan Demir")
print(f"  Target Domain: {TARGET_URL}")
print(f"  Total Articles: {TOTAL_ARTICLES:,}")
print(f"  Total DoFollow Links: {TOTAL_BACKLINKS:,}")
print("====================================================================")
print()

# Generate 100,000 Index Nodes (Fast Compact Format)
nodes = []
for i in range(1, TOTAL_ARTICLES + 1):
    district = DISTRICTS[(i - 1) % len(DISTRICTS)]
    topic = TOPICS[(i - 1) % len(TOPICS)]
    anchor = ANCHORS[(i - 1) % len(ANCHORS)]
    
    nodes.append({
        "n": i,
        "d": district,
        "t": topic,
        "a": anchor,
        "u": f"{PBN_BASE_URL}#art-{i}"
    })

print(f"  [+] {TOTAL_ARTICLES:,} PBN Nodes generated successfully!")

# Write config.json for dynamic JS renderer
config_data = {
    "total_articles": TOTAL_ARTICLES,
    "total_links": TOTAL_BACKLINKS,
    "target_url": TARGET_URL,
    "pbn_base_url": PBN_BASE_URL,
    "anchors": ANCHORS,
    "districts": DISTRICTS,
    "topics": TOPICS
}

with open("pbn_config.json", "w", encoding="utf-8") as f:
    json.dump(config_data, f, indent=2)

print("  [OK] Saved pbn_config.json!")

# Write sample 1000 nodes JSON for fast frontend preview & instant search
with open("pbn_preview_nodes.json", "w", encoding="utf-8") as f:
    json.dump(nodes[:5000], f)

print("  [OK] Saved pbn_preview_nodes.json (First 5,000 Nodes for Instant Search)!")

# Generate sitemap.xml for 100,000 URLs (Divided into Sitemap Indexes if needed, or master sitemap)
print("  [+] Generating sitemap.xml for 100,000 PBN URLs...")
with open("sitemap.xml", "w", encoding="utf-8") as f:
    f.write('<?xml version="1.0" encoding="UTF-8"?>\n')
    f.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')
    for i in range(1, 50001):  # First 50k in main sitemap
        f.write(f'  <url><loc>{PBN_BASE_URL}#art-{i}</loc><lastmod>2026-09-23</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>\n')
    f.write('</urlset>\n')

with open("sitemap_2.xml", "w", encoding="utf-8") as f:
    f.write('<?xml version="1.0" encoding="UTF-8"?>\n')
    f.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')
    for i in range(50001, 100001):  # Next 50k in sitemap 2
        f.write(f'  <url><loc>{PBN_BASE_URL}#art-{i}</loc><lastmod>2026-09-23</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>\n')
    f.write('</urlset>\n')

# Sitemap Index Master File
with open("sitemap_index.xml", "w", encoding="utf-8") as f:
    f.write('<?xml version="1.0" encoding="UTF-8"?>\n')
    f.write('<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')
    f.write(f'  <sitemap><loc>{PBN_BASE_URL}sitemap.xml</loc><lastmod>2026-09-23</lastmod></sitemap>\n')
    f.write(f'  <sitemap><loc>{PBN_BASE_URL}sitemap_2.xml</loc><lastmod>2026-09-23</lastmod></sitemap>\n')
    f.write('</sitemapindex>\n')

print("  [OK] Generated sitemap.xml, sitemap_2.xml and sitemap_index.xml for 100,000 URLs!")
print("====================================================================")
