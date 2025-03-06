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
  public locale!: LangTrans;
  constructor(private readonly localeTranslationsService: LocaleTranslationsService) { }

  public ngOnInit() {
    this.locale = this.localeTranslationsService.getLanguage('en');
  }




}
