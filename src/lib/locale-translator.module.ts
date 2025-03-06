import { NgModule } from '@angular/core';
import { LocaleTranslationsComponent } from './locale-translator.component';
import { TranslateLocalePipe } from './pipe/translateLocale.pipe';
@NgModule({
  declarations: [LocaleTranslationsComponent, TranslateLocalePipe],
  exports: [TranslateLocalePipe, LocaleTranslationsComponent]
})
export class LocaleTranslationsModule {}
