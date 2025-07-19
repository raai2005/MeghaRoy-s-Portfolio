@echo off
echo Starting Portfolio Development Server...
cd /d "c:\Users\anind\OneDrive\Desktop\MeghaPort"
echo Current directory: %CD%
echo.
echo Clearing Next.js cache...
if exist .next rmdir /s /q .next
echo.
echo Installing dependencies...
call npm install
echo.
echo Starting development server...
call npm run dev
pause
