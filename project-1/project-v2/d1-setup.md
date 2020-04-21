:newspaper: **PROJECT SETUP**  

:page_with_curl: **_install vscode & node_**  

- install vscode with plugins  
- install node with npm
```js
$ node -v
v12.16.2
$ npm -v
6.14.4
```

:page_with_curl: **_install angular client_**  

- uninstalling existing angular client

```js
//uninstall angular client globally
$ npm uninstall -g @angular/cli
//uninstall angular client locally
$ npm uninstall  @angular/cli
//clean the cache
$ npm cache clean
$ npm cache clean --force
```

- install angular client

```js
//latest version
npm install -g @angular/cli
//specific version
npm install -g @angular/cli@8.0.1
```
- test installation
```js
$ ng --version
Angular CLI: 9.1.1
Node: 12.16.2
```
:beetle: If installation is corrupt, do the complete steps again.
