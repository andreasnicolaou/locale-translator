import { Pipe, PipeTransform } from '@angular/core';
import { LangTrans } from '../models/lang.model';
import { LocaleTranslationsService } from '../locale-translator.service';
@Pipe({
  name: 'translateLocale'
})

export class TranslateLocalePipe implements PipeTransform {
  constructor(private readonly localeTranslationsService: LocaleTranslationsService) {
  }

  public transform(id: string, native: boolean = false): string | null {
    if (!id || id.trim() === '') {
      return null;
    }
    const lang: LangTrans = this.localeTranslationsService.getLanguage(id.toLowerCase());
    if (!lang) {
      return id;
    }
    return native ? lang.nativeName : lang.name;
  }

}
