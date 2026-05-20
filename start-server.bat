@echo off
title DSA in Action - Local Server
echo ============================================
echo  DSA in Action - Local Development Server
echo ============================================
echo.
echo Once started, open this URL in your browser:
echo.
echo     http://localhost:8000
echo.
echo Press Ctrl+C in this window to stop the server.
echo ============================================
echo.

REM Try Python 3 first
python -m http.server 8000 2>nul
if errorlevel 1 (
    REM Try py launcher
    py -m http.server 8000 2>nul
    if errorlevel 1 (
        echo.
        echo ---------------------------------------------
        echo Python was not found on this machine.
        echo.
        echo Install one of these and try again:
        echo   - Python:  https://www.python.org/downloads/
        echo   - Or use Node:  npx http-server -p 8000
        echo   - Or install the "Live Server" extension
        echo     in VS Code and right-click index.html.
        echo ---------------------------------------------
        echo.
        pause
    )
)
