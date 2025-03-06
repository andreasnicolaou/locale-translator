# locale-translator

Translate any locale with the provided directive or service.

[![npm](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/@andreasnicolaou/locale-translator)
![GitHub package.json version](https://img.shields.io/github/package-json/v/andreasnicolaou/locale-translator)

## Installation

```shell
npm install @andreasnicolaou/locale-translator
```

#### Import `LocaleTranslationsModule` into your app's root module
```typescript

import { LocaleTranslationsModule } from '@andreasnicolaou/locale-translator';

@NgModule({
  ...
  imports: [
    LocaleTranslationsModule
  ],
  ...
})
export class AppModule { }

```

If you only want to use only the service just import 


```typescript
import { LocaleTranslationsService } from '@andreasnicolaou/locale-translator';

...

export class MyComponent {
  constructor(private readonly localeTranslationsService: LocaleTranslationsService) {
    const locale: LangTrans = this.localeTranslationsService.getLanguage('en');
    console.log(locale) // Logs out name and nativeName
  }
}
```

### Example of pipe

#### Pipe will always return the locale name, if you want the native name just add translateLocale:true
```html
    <div>{{ 'en' | translateLocale }}</div>
```

```html
    <div>{{ 'en' | translateLocale:true }}</div>
```

## Contribution
- **Having an issue**? or looking for support? [Open an issue](https://github.com/andreasnicolaou/locale-translator/issues/new) and we will get you the help you need.
- Got a **new feature or a bug fix**? Fork the repo, make your changes, and submit a pull request.

## Support this project
If you find this project useful, please star the repo to let people know that it's reliable. Also, share it with friends and colleagues that might find this useful as well. Thank you :smile:
