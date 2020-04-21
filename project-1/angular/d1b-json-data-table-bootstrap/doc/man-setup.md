:beginner: **ANGULAR SETUP**

:scroll: SOFTWARE SETUP

:one: install vscode  
:two: vscode plugins  
:three: install node with npm

```js
node -v
v10.16.3
v12.16.1 (cloud)

npm -v
6.9.0
6.13.0 (cloud)
```

:scroll: INSTALL ANGULAR CLIENT

- uninstalling angular client

```js
ng --version
Angular CLI: 8.0.1
//uninstall angular client globally
npm uninstall -g @angular/cli
//uninstall angular client locally
npm uninstall  @angular/cli
//clean the cache
npm cache clean
npm cache clean --force
```

- install angular client

```js
npm install -g @angular/cli@8.0.1
```

:beetle: If installation is corrupt, do the complete steps again.

:scroll: CREATE ANGULAR PROJECT

```js
ng new d1a-setup-application
```

:scroll: RUN THE ANGULAR PROJECT

:beetle: Job name "..getProjectMetadata" does not exist.
Error: Job name "..getProjectMetadata" does not exist.

:bulb: https://stackoverflow.com/questions/60174503/job-name-getprojectmetadata-does-not-exist
npm i @angular-devkit/build-angular@0.803.24

:bookmark: _access the application_  
 http://localhost:4200/

:scroll: INSTALL BOOTSTRAP FRAMEWORK  

:memo: Reference : bootstrap library files
```js
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
```
:bell: npm install bootstrap jquery --save

configure installed Bootstrap & JQuery in an angular.json

```json
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```
add global styles to style.css
```CSS
@import "~bootstrap/dist/css/bootstrap.min.css";
.theme {
  background-color: aliceblue;
  color: slateblue;
}
```
