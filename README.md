# locale-translator

Translate any locale with the directive provided or the service

<br><br>

[![npm](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/@andreasnicolaou/locale-translator)
[![npm](https://img.shields.io/npm/dt/andreasnicolaou/locale-translator.svg)](https://www.npmjs.com/package/@andreasnicolaou/locale-translator)
[![npm](https://img.shields.io/npm/dm/andreasnicolaou/locale-translator.svg)](https://www.npmjs.com/package/@andreasnicolaou/locale-translator)

<br><br>

## Installation

#### 1. Install via NPM:

```shell
npm i --save @andreasnicolaou/locale-translator
```

#### 3. Import `LocaleTranslationsModule` into your app's root module
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

export class MyService {

  constructor(private locale: LocaleTranslationsService) {

    let locale: LangTrans  = this.locale.getLanguage('en');
    console.log(locale) // name,nativeName

  }

}
```

<br><br>

### Example of pipe

#### Pipe will always return the locale name, if you want the native name just add translateLocale:true
```html
    <a>{{'en' | translateLocale}}</a>
```

## Contribution
- **Having an issue**? or looking for support? [Open an issue](https://github.com/andreasnicolaou/locale-translator/issues/new) and we will get you the help you need.
- Got a **new feature or a bug fix**? Fork the repo, make your changes, and submit a pull request.

## Support this project
If you find this project useful, please star the repo to let people know that it's reliable. Also, share it with friends and colleagues that might find this useful as well. Thank you :smile: