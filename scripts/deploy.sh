#!/bin/zsh
# Script to deploy Slidev SPA slide to GitHub Pages
# The SPA is build and stored in the /docs directory.  When it 
# is checkin a GitHub Action takes the file in the docs directory
# and puts them to GitHub Pages under the 
#
#
cd ../healthomics

# Remove the docs directory
rm -r ../docs

# Build the slides and put them in the docs directory
slidev  build --base /slidev/ --out ../docs/