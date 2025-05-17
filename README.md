# LocaleTranslator

Effortlessly convert ISO 639-1 locale codes (like `'en'`, `'fr'`, `'de'`) into human-readable language names or native names using a simple Angular pipe or service.

![GitHub contributors](https://img.shields.io/github/contributors/andreasnicolaou/locale-translator)
![GitHub License](https://img.shields.io/github/license/andreasnicolaou/locale-translator)
![GitHub package.json version](https://img.shields.io/github/package-json/v/andreasnicolaou/locale-translator)
![NPM Downloads](https://img.shields.io/npm/dm/%40andreasnicolaou%2Flocale-translator)

## Installation

```bash
npm install @andreasnicolaou/locale-translator
```

#### 1. Import the Module Based on Your Angular Version

🟢 **For Angular 15+ (Standalone Projects)**

You can directly import the pipe into any standalone component:

```typescript
import { TranslateLocalePipe } from '@andreasnicolaou/locale-translator';

@Component({
  standalone: true,
  selector: 'your-component',
  imports: [TranslateLocalePipe],
  templateUrl: './your-component.html',
})
export class YourComponent {}
```

🟠 **For Angular <15 or Module-Based Projects**

Use the provided `LocaleTranslationsModule` to wrap the pipe and service:

```typescript
import { LocaleTranslationsModule } from '@andreasnicolaou/locale-translator';

@NgModule({
  declarations: [],
  imports: [LocaleTranslationsModule],
  exports: [],
})
export class YourModule {}
```

> 💡 Note: If you're using Angular 15+ but prefer NgModule-based architecture, you can also use the module wrapper for compatibility.

#### Use the Service in Your Component (Optional)

```typescript
import { LocaleTranslationsService, LocaleCode, LocaleType } from '@andreasnicolaou/locale-translator';

export class MyComponent {
  constructor(private readonly localeTranslationsService: LocaleTranslationsService) {
    const locale: LocaleType | undefined = this.localeTranslationsService.getLocale('en');
    console.log(locale); // Logs the name and the nativeName

    const localesMap: Map<LocaleCode, LocaleType> = this.localeTranslationsService.getAll();
    console.log(localesMap); // Logs all available locales
  }
}
```

## API

### `LocaleTranslationsService`

The service provides methods to retrieve locale data and manage translations.

| Method                                    | Description                                                                                              |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `getLocale(code: LocaleCode): LocaleType` | Retrieves the language details for a given locale code. If no translation is found, returns `undefined`. |
| `getAll(): Map<LocaleCode, LocaleType>`   | Retrieves all language data, where the keys are locale codes, and the values are `LocaleType` objects.   |

### `translateLocale` Pipe

The `translateLocale` pipe is used to translate a locale code into its respective name or native name.

| Argument | Type                       | Description                                                           |
| -------- | -------------------------- | --------------------------------------------------------------------- |
| `code`   | `LocaleCode`               | The locale code (e.g., `'en'`, `'fr'`). This argument is required.    |
| `native` | boolean (default: `false`) | If set to `true`, the pipe will return the native name of the locale. |

### Usage Examples

#### The pipe returns the language name by default. To get the native name, pass `true` as a second argument.

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
