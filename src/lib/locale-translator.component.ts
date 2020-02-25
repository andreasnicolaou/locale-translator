import { Component, OnInit } from '@angular/core';
import { LocaleTranslationsService } from './locale-translator.service';
import { LangTrans } from './models/lang.model';

@Component({
  selector: 'lib-locale-translator',
  template: `
    <h1>Translate en locale Example</h1>
    <p>
      Name: {{locale.name}}
      Native Name: {{locale.nativeName}}
    </p>
  `,
  styles: []
})
export class LocaleTranslationsComponent implements OnInit {
  public locale: LangTrans;
  constructor(private langService: LocaleTranslationsService) { }

  public ngOnInit() {
    const localeName: LangTrans = this.langService.getLanguage('en');
    this.locale = localeName;
  }




}
