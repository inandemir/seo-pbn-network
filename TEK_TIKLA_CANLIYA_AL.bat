@echo off
title TEK TIKLA CANLIYA AL - PBN BACKLINK NETWORK
color 0A
echo ====================================================================
echo   CYBER-SEO PBN BOT NETWORK - TEK TIKLA CANLIYA AL (GITHUB PAGES)
echo   Developer: Inan Demir | Target: https://beautyistanbulesocrts.com/
echo ====================================================================
echo.

echo [1/3] Degisiklikler Git Sistemine Ekleniyor...
git add .
git commit -m "feat: Auto Deploy PBN Network to GitHub Pages"

echo [2/3] GitHub Pages Reposuna Push Ediliyor (seo-pbn-network)...
git push origin master:main --force
git push origin master --force

echo.
echo ====================================================================
echo [BAŞARILI] Siteniz GitHub Pages Uzerinde 7/24 Canliya Alindi!
echo Canli URL: https://inandemir.github.io/seo-pbn-network/
echo ====================================================================
echo.

echo 3. Canli Site Tarayicida Aciliyor...
start https://inandemir.github.io/seo-pbn-network/
pause
