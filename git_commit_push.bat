@echo off
setlocal

:: Get current date and time in format YYYY-MM-DD HH:MM:SS using PowerShell
for /f "delims=" %%a in ('powershell -Command "Get-Date -Format 'yyyy-MM-dd HH:mm:ss'"') do set "timestamp=%%a"

echo Adding all changes...
git add .

if %ERRORLEVEL% NEQ 0 (
    echo Error: Failed to add changes
    pause
    exit /b %ERRORLEVEL%
)

echo Committing changes with message: "life tracker updated %timestamp%"
git commit -m "life tracker updated %timestamp%"

if %ERRORLEVEL% NEQ 0 (
    echo Error: Failed to commit changes
    pause
    exit /b %ERRORLEVEL%
)

echo Pushing changes to remote repository...
git push

if %ERRORLEVEL% NEQ 0 (
    echo Error: Failed to push changes
    pause
    exit /b %ERRORLEVEL%
)

echo Success! All changes have been committed and pushed with timestamp: %timestamp%
pause
