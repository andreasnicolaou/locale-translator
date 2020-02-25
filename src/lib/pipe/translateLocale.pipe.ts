import { Pipe, PipeTransform } from '@angular/core';
import { LangTrans } from '../models/lang.model';
import { LocaleTranslationsService } from '../locale-translator.service';

@Pipe({
    name: 'translateLocale'
})

export class TranslateLocalePipe implements PipeTransform {

    constructor(private langService: LocaleTranslationsService) {
    }

    public transform(id: string, native: boolean = false): string {
        if (typeof id !== 'string') {
            return;
        }

        if (typeof id === 'undefined' || id === ' ') {
            return 'Default';
        }

        const lang: LangTrans = this.langService.getLanguage(id.toLowerCase());

        if (typeof lang === 'undefined') {
            return id;
        }

        if (native) {
            return lang.nativeName;
        }

        return lang.name;
    }

}
