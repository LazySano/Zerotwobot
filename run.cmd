@ECHO off
IF NOT DEFINED IS_CHILD_PROCESS (CMD /K SET IS_CHILD_PROCESS=1 ^& %0 %*) & EXIT )
TITLE Zerotwo Bot
CLS
COLOR 0F
ECHO.

SET cwd=%~dp0

ECHO [Zerotwo]: Checking System...
IF EXIST zerotwo.js (
  ECHO [Zerotwo]: System Checked. O7. Booting up...
  node .
) ELSE (
  TITLE [ERROR] System Check Failed
  ECHO [Zerotwo]: System check failed. Check if you Zerotwo BOT installed correctly.
  GOTO :EXIT
)
ECHO.

EXIT /B 0

:EXIT
ECHO.
ECHO [Zerotwo]: Press any key to exit.
PAUSE >nul 2>&1
CD /D "%cwd%"
TITLE Windows Command Prompt (CMD)
COLOR
