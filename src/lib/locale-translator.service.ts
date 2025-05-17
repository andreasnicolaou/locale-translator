import { Injectable } from '@angular/core';
import { LANGUAGE_MAP, LocaleCode, LocaleType } from './locale-languages.const';
@Injectable({
  providedIn: 'root',
})
export class LocaleTranslationsService {
  private readonly langMap = new Map<LocaleCode, LocaleType>(
    Object.entries(LANGUAGE_MAP) as [LocaleCode, LocaleType][]
  );

  public getLocale(code: LocaleCode): LocaleType | undefined {
    return this.langMap.get(code);
  }

  public getAll(): Map<LocaleCode, LocaleType> {
    return this.langMap;
  }
}
