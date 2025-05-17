import { NgModule } from '@angular/core';
import { TranslateLocalePipe } from './locale-translator.pipe';
@NgModule({
  imports: [TranslateLocalePipe],
  exports: [TranslateLocalePipe],
})
export class LocaleTranslationsModule {}
