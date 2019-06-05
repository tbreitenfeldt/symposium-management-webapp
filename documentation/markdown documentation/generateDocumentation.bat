@echo off
del /Q "markdown jsDoc\*"
del /Q "markdown phpDoc\*"

node fileRecursor.js
cd "markdown jsDoc"
del fileRecursor.md
del javadoc-to-markdown.md
type *.md > jsDocMaster.md
pandoc jsDocMaster.md -o jsDoc.docx
xcopy /Y jsDoc.docx ..\

cd "../markdown phpDoc"
del authenticateUser.md config.md error.md forgotPassword.md index.md login.md logout.md register.md resetForgotPassword.md resetPassword.md aboutConference.md conferenceChooser.md conferenceSchedule.md editSchedule.md resetPassword.md showSchedule.md userSettings.md Exception.md "OAuth.md" PHPMailer.md POP3.md README.md SMTP.md accesibilityMenuOnly.md adminHeader.md footer.md indexHeader.md userHeader.md creds.md
type *.md > phpDocMaster.md
pandoc phpDocMaster.md -o phpDoc.docx
xcopy /Y phpDoc.docx ..\