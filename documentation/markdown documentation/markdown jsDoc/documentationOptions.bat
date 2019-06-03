@echo off
for %f in (*.md) do type "%f" >> jsDocMaster.md & echo: >> jsDocMaster.md;
pandoc jsDocMaster.md -o javascriptDocumentation.md;