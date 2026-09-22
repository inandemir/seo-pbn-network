@echo off
title TEK TIKLA BACKLINK BAS - 1000 PBN BOT
color 0D
echo ====================================================================
echo   CYBER-SEO PBN BOT NETWORK - TEK TIKLA 1000 BACKLINK BAS
echo   Developer: Inan Demir | Target: https://beautyistanbulesocrts.com/
echo ====================================================================
echo.

echo [1/3] Python Bot 1000 PBN Makalesini Uretiyor ve Swampliyor...
python generate_pbn_network.py

echo.
echo [2/3] Uretilen 1000 Makale GitHub Pages Reposuna Basiliyor...
git add .
git commit -m "feat: Auto 1000 PBN Backlink Blast for beautyistanbulesocrts.com"
git push origin master:main --force

echo.
echo ====================================================================
echo [BAŞARILI] 1000 PBN Makalesi ve DoFollow Backlinkleri Canliya Basildi!
echo Canli PBN URL: https://inandemir.github.io/seo-pbn-network/
echo Target URL: https://beautyistanbulesocrts.com/
echo ====================================================================
echo.

echo 3. PBN Web Paneli Tarayicida Aciliyor...
start https://inandemir.github.io/seo-pbn-network/
pause
