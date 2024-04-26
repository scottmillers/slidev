# My Slidev Setup


## Prerequisites

Slidev requires Node.js >= 18.0

However, I wasn't able to get it to work with Node.js 20, or the latest.  So I had to install Node.js 18.  

## Install


1.  To install globally so you can use the `slidev` command line
    ```
    npm i -g @slidev/cli
    ```


2. Create some slides
    ```
    mkdir healthomics
    slidev
    ```


## Build the Single Page Application 

1. Build the Single Page Application

  The command below will create a Single Page application that can be deployed to a /slidev subfolder on a website. 

  ```
  cd healthomics
  slidev  build --base /slidev/ --out ../docs/  
  ```



## Install the Single Page Application on GitHub Pages

1. Go to GitHub


How to put install as a set of web pages

To deploy your slides on GitHub Pages:

- upload all the files of the project in your repo (i.e. named name_of_repo)
- create .github/workflows/deploy.yml with the following content to deploy your slides to GitHub Pages via GitHub - Actions. In this file, replace <name_of_repo> with name_of_repo. Make sure to leave the leading and trailing slashes in place.  Use slidev for the name of the repo
```
name: Deploy pages

on:
  workflow_dispatch: {}
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: docs
    permissions:
      contents: read
      pages: write
      id-token: write

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 'lts/*'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build -- --base /slidev/

      - uses: actions/configure-pages@v4

      - uses: actions/upload-pages-artifact@v3
        with:
          path: docs

      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```



## Export to PDF


You need to have access to a machine with a browser with the Chromium libraries

To export to to PDF you need to install playwrite-chromium

```
npm i -D playwrite-chromium
```

Then to export run this command
```
npm run expert
```
The files will be 


## Install Problems (April 22, 2024)

Slidedev gets stuck on the install.  I tried the latest and then tried a earlier version.  Both get stuck here:
```
(#########⠂⠂⠂⠂⠂⠂⠂⠂⠂) ⠼ idealTree: timing idealTree Completed in 185603ms
```
I also tried chaning my Dev Container to be Ubuntu.  That also got stuck on the install. 

## References

https://sli.dev/guide/

https://sli.dev/guide/getting-started.html