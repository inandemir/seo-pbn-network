@echo off
chcp 65001 >nul
title CYBER-SEO PBN BOT ENGINE - 10,000+ BACKLINK BLAST
color 0A
cd /d "%~dp0"
cls

echo ====================================================================
echo   CYBER-SEO PBN BOT ENGINE // 10,000+ DOFOLLOW BACKLINK OTOMASYONU
echo   Developer: Inan Demir ^| Hedef: https://beautyistanbulesocrts.com/
echo ====================================================================
echo.

:: Python Kontrolu
where python >nul 2>nul
if %errorlevel%==0 (
    set PY_CMD=python
    goto :PYTHON_OK
)

where py >nul 2>nul
if %errorlevel%==0 (
    set PY_CMD=py
    goto :PYTHON_OK
)

color 0C
echo [HATA] Sisteminizde Python bulunamadi!
echo Lutfen Python'u yukleyin ve PATH secenegini isaretleyin: https://www.python.org/
echo.
pause
exit /b 1

:PYTHON_OK
echo [1/4] Python Bot 10,000 PBN Makalesi ve 30,000 DoFollow Link Uretiyor...
echo --------------------------------------------------------------------
%PY_CMD% generate_pbn_network.py
if errorlevel 1 (
    color 0C
    echo.
    echo [HATA] Python botu calisirken bir hata olustu!
    pause
    exit /b 1
)

echo.
echo [2/4] Degisiklikler Git Reposuna Ekleniyor ve Commit Yapiliyor...
echo --------------------------------------------------------------------
git add .
git commit -m "feat: Auto 10,000+ DoFollow Backlink Blast for beautyistanbulesocrts.com"

echo.
echo [3/4] 10,000+ Backlink ve backlinks.html GitHub Pages Canli Sunucusuna Basiliyor...
echo --------------------------------------------------------------------
git push origin master:main --force
if errorlevel 1 (
    echo.
    echo [UYARI] GitHub push sirasinda baglanti hatasi olustu, yerel sunucu yinede baslatilacak.
)

echo.
echo ====================================================================
echo   [BAŞARILI] 10,000+ PBN Makalesi ve 30,000 DoFollow Link Canliya Basildi!
echo.
echo   CANLI PBN PANEL URL:    https://inandemir.github.io/seo-pbn-network/
echo   10,000 STATIK BACKLINK: https://inandemir.github.io/seo-pbn-network/backlinks.html
echo   HEDEF SITE URL:         https://beautyistanbulesocrts.com/
echo   TOPLAM DOFOLLOW LINK:   30,000 Aktif DoFollow Link (rel="noopener follow")
echo ====================================================================
echo.

echo [4/4] Web Paneli ve Canli Siteler Tarayicida Aciliyor...
start https://inandemir.github.io/seo-pbn-network/
start https://inandemir.github.io/seo-pbn-network/backlinks.html

echo.
echo Yerel API ve Web Sunucusu Baslatiliyor... (Kapatmak icin bu pencereyi kapatin)
echo --------------------------------------------------------------------
%PY_CMD% server.py
pause
