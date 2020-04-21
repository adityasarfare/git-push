index.html
```html
 <app></app>
```
main.ts
```ts
platformBrowserDynamic().bootstrapModule(AppModule)
```
app.module.ts
```ts
 bootstrap: [AppComponent]
```
app.component.ts
```ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App with Twitter Bootstrap Framework';
}

```
app.component.html
```html
<h1 style="text-align: center;">
    {{title}}
</h1>
```

:bulb: ACTION
```html
<h1 style="text-align: center;">
    Angular App with Twitter Bootstrap Framework
</h1>
```
index.html
```html
 <!-- <app></app> -->
 <h1 style="text-align: center;">
    Angular App with Twitter Bootstrap Framework
</h1>
```