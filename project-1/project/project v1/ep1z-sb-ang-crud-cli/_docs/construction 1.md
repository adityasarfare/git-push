```ts
export class AppModule { }
```

```ts
@NgModule (Decorator : Annotation)
```

```ts
@NgModule() //metadata about the class
export class AppModule {

 }
```

```ts
import { NgModule } from '@angular/core';
@NgModule() --metadata about the class
export class AppModule {

 }
```

```ts
import { AppComponent } from './app.component';
@NgModule({
   //declare all the components belonging to this module
   declaration : [AppComponent],
   //the other components imported into this module from other modules
   imports : [],
   //the services
   providers : [],
   //the component that the module should load.
   bootstrap: [AppComponent]
})
```



