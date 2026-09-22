@echo off
title TEK TIKLA CANLIYA AL - PBN NETWORK
color 0B
cls

echo ====================================================================
echo   CYBER-SEO PBN BOT NETWORK - TEK TIKLA CANLIYA AL (GITHUB PAGES)
echo   Developer: Inan Demir | Target: https://beautyistanbulesocrts.com/
echo ====================================================================
echo.

echo [ADIM 1/3] Degisiklikler Git Reposuna Ekleniyor...
echo --------------------------------------------------------------------
git add .
git commit -m "feat: Manual PBN Sync to GitHub Pages"

echo.
echo [ADIM 2/3] GitHub Pages Sunucularina Push Ediliyor...
echo --------------------------------------------------------------------
git push origin master:main --force
if errorlevel 1 (
    color 0C
    echo.
    echo [HATA] GitHub sunucularina push edilirken hata olustu!
    pause
    exit /b
)

echo.
echo ====================================================================
echo [BAŞARILI] Siteniz GitHub Pages Uzerinde 7/24 Canliya Basildi!
echo.
echo   Canli PBN Panel URL: https://inandemir.github.io/seo-pbn-network/
echo   Hedef Site URL:     https://beautyistanbulesocrts.com/
echo ====================================================================
echo.

echo [ADIM 3/3] Canli PBN Web Paneli Tarayicida Aciliyor...
start https://inandemir.github.io/seo-pbn-network/
start http://localhost:8080/

echo.
echo [ISLEM TAMAMLANDI] Bu pencereyi kapatabilirsiniz.
pause
