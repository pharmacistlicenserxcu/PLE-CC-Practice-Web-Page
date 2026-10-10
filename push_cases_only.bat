@echo off
setlocal enabledelayedexpansion
title PLE-CC 2569 -- Push Case Offline Data Only
cls

echo ================================================================
echo   [PLE-CC 2569 RxCU] -- Push Case Offline Data Only
echo   Owner: Thanadol (Maxnum) ^| Remote: pharmacistlicenserxcu
echo ================================================================
echo.

set "WEB_DIR=%~dp0"
cd /d "%WEB_DIR%"

:: 1. Setup Git Identity
echo [1/3] Setting Git Identity...
git config user.name "pharmacistlicenserxcu"
git config user.email "pharmacistlicense.rxcu@gmail.com"
git config credential.helper manager
echo       Done.

:: 2. Check if Case files exist
echo.
echo [2/3] Checking Case Offline Data files...
if not exist "case-data-offline.js" (
    echo [ERROR] case-data-offline.js not found!
    pause
    exit /b 1
)
if not exist "case-details-offline.js" (
    echo [ERROR] case-details-offline.js not found!
    pause
    exit /b 1
)

:: 3. Stage ONLY Case Offline Data
echo.
echo [3/3] Staging ONLY case-data-offline.js and case-details-offline.js...
git add case-data-offline.js case-details-offline.js

:: Check if there are changes to commit
git diff --cached --quiet
if %ERRORLEVEL% EQU 0 (
    echo [INFO] No changes detected in Case Offline Data. Everything is already up to date!
    echo.
    set /p "FORCE=Do you want to force re-push? (y/n): "
    if /i "!FORCE!"=="y" (
        git commit --allow-empty -m "Sync case offline data [Manual Re-push] [%DATE% %TIME%]"
        git push origin main
    ) else (
        echo Push skipped.
    )
) else (
    git commit -m "Update Case Offline Data [%DATE% %TIME%]"
    echo.
    echo [INFO] Syncing with GitHub (Pull ^& Rebase)...
    git pull --rebase origin main
    echo.
    echo [INFO] Pushing Case Offline Data to GitHub...
    git push origin main
)

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ================================================================
    echo  [SUCCESS] Case Offline Data successfully pushed to GitHub!
    echo  Cloudflare Pages ^& Vercel are updating cases automatically.
    echo ================================================================
) else (
    echo.
    echo ================================================================
    echo  [WARNING] Push encountered an issue. Please check network.
    echo ================================================================
)

echo.
pause
