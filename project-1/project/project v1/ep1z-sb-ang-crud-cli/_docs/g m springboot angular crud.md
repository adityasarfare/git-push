:books: **SPRING BOOT ANGULAR CRUD**

:one: **setup angular project using angular cli**

- install node
- https://nodejs.org/download/release/v10.16.3/node-v10.16.3-x64.msi

```js
$ node -v
v10.16.3
$ npm -v
6.9.0
```

- install angular client

```js
//uninstall angular client globally
npm uninstall -g @angular/cli
//uninstall angular client locally
npm uninstall @angular/cli
//clean the cache
npm cache clean
//install angular client
npm install -g @angular/cli@8.0.1
//test
ng --version
```

- create angular project

```js
ng new ep1z-sb-ang-crud-cli
//install bootstrap and jquery in the node_modules folder
npm install bootstrap jquery --save
//Configure installed Bootstrap & JQuery in an angular.json
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
//add global styles to style.css
/* You can add global styles to this file, and also import other style files */

@import '~bootstrap/dist/css/bootstrap.min.css';
.footer {
    position: absolute;
    bottom: 0;
    width:100%;
    height: 70px;
    background-color: blue;
    text-align: center;
    color: white;
}
```

:two: **create angular components and services**

```js
ng g s employee
ng g c create-employee
ng g c employee-details
ng g c employee-list
```

:three: **Create an Employee Model (TypeScript)**

- ep1z-sb-ang-crud-cli\src\app\employee.ts

```ts
[employee.ts](../src/app/employee.ts)
```
