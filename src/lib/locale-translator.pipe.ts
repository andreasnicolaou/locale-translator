import { Pipe, PipeTransform } from '@angular/core';
import { LocaleTranslationsService } from './locale-translator.service';
import { LocaleCode, LocaleType } from './locale-languages.const';
@Pipe({
  standalone: true,
  name: 'translateLocale',
})
export class TranslateLocalePipe implements PipeTransform {
  constructor(private readonly localeTranslationsService: LocaleTranslationsService) {}

  public transform(code: LocaleCode, native: boolean = false): string | null {
    if (!code || code.trim() === '') {
      return null;
    }
    const lang: LocaleType | undefined = this.localeTranslationsService.getLocale(code);
    if (!lang) {
      console.warn(`Missing locale translation for code: ${code}`);
      return null;
    }
    return native ? lang?.nativeName : lang?.name;
  }
}
