# How to use Slidev


Setup
1. Install locally in the container

This will prompt for a directory name and install the dependencies

```
npm init slidev@latest
Need to install the following packages:
create-slidev@0.49.0-beta.4
Ok to proceed? (y) y

  ●■▲
  Slidev Creator  v0.49.0-beta.4

✔ Project name: … healthomics
  Scaffolding project in healthomics ...
  Done.

✔ Install and start it now? … yes
✔ Choose the package manager › npm
```
Follow the prompts to start making your slides.


2. Start Slidev
```
cd healthomics
npm run dev
```


## Install on my GitHub Pages

How to put install as a set of web pages

1. Build the Single Page Application
```
npm run build
```

Will create a /dist directory


2. Put on GitHub Pages
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

# References

https://sli.dev/guide/

https://sli.dev/guide/getting-started.html