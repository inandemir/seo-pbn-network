@echo off
title TEK TIKLA 3000 BACKLINK BAS - PBN BOT ENGINE
color 0A
cls

echo ====================================================================
echo   CYBER-SEO PBN BOT ENGINE - 1000 MAKALE & 3000 BACKLINK OTOMASYONU
echo   Developer: Inan Demir | Target: https://beautyistanbulesocrts.com/
echo ====================================================================
echo.

echo [ADIM 1/4] Python Bot 1000 PBN Makalesine 3000 DoFollow Link Gomuyor...
echo --------------------------------------------------------------------
python generate_pbn_network.py
if errorlevel 1 (
    color 0C
    echo.
    echo [HATA] Python botu calisirken bir hata olustu! Lutfen Python yuklu mu kontrol edin.
    pause
    exit /b
)

echo.
echo [ADIM 2/4] Degisiklikler Git Reposuna Ekleniyor...
echo --------------------------------------------------------------------
git add .
git commit -m "feat: Auto 3000 DoFollow Backlink Blast for beautyistanbulesocrts.com"

echo.
echo [ADIM 3/4] 1000 Makale & 3000 Link GitHub Pages Sunucularina Basiliyor...
echo --------------------------------------------------------------------
git push origin master:main --force
if errorlevel 1 (
    color 0C
    echo.
    echo [HATA] GitHub sunucularina push edilirken hata olustu! İnternet baglantinizi kontrol edin.
    pause
    exit /b
)

echo.
echo ====================================================================
echo [BAŞARILI] 1000 PBN Makalesi ve 3000 DoFollow Backlink Canliya Basildi!
echo.
echo   Canli PBN Panel URL: https://inandemir.github.io/seo-pbn-network/
echo   Hedef Site URL:     https://beautyistanbulesocrts.com/
echo   Toplam Backlink:    3,000 DoFollow Active Links (rel="noopener follow")
echo ====================================================================
echo.

echo [ADIM 4/4] Web Kontrol Paneli Ve Canli Site Tarayicida Aciliyor...
start https://inandemir.github.io/seo-pbn-network/
start http://localhost:8080/

echo.
echo [ISLEM TAMAMLANDI] Bu pencereyi kapatabilirsiniz.
pause
