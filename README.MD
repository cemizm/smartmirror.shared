# Shared library of the smart mirror project

Contains all shared components, directives, pipes and services, used by the smart mirror project.

## Installation

To install this library, run:

```bash
$ npm install @cemizm/smartmirror-shared --save
```

## Usage

After the Installation of the library via npm, you can import it into your Angular/Ionic application by adding the `SmartMirrorModule` to the `AppModule`:

```typescript
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {SmartMirrorModule} from "@cemizm/smartmirror-shared";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SmartMirrorModule.forRoot({apiUrl: 'https://sm-webapi.azurewebsites.net/api'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

```

Once the shared library is imported, you can use its components, directives, pipes and services in your Angular application:

```typescript
import {MirrorService} from "@cemizm/smartmirror-shared";

... 

  constructor(private mirrorService: MirrorService) {
  
  }

  getAll() {
    this.mirrorService.getAll().subscribe(mirrors => {
      this.mirrors = mirrors;
    }, err => {
      console.log(err);
    });
  }
```

## License

MIT © [Cem Basoglu](mailto:cem.basoglu@web.de)
