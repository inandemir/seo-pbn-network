@echo off
title SOC & DFIR ACADEMY - Otomatik Baslatma
echo ====================================================
echo SOC & DFIR ACADEMY HIZLI BASLATICI
echo Developer: Inan Demir
echo ====================================================
echo.
echo 1. Web Sitesi Tarayicida Aciliyor...
start http://localhost:8080/index.html

echo 2. Yerel Sunucu Baslatiliyor...
python -m http.server 8080
pause
