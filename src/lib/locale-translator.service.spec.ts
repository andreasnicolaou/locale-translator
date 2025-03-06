import { TestBed } from '@angular/core/testing';
import { LocaleTranslationsService } from './locale-translator.service';

describe('LocaleTranslationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocaleTranslationsService = TestBed.inject(LocaleTranslationsService);
    expect(service).toBeTruthy();
  });
});
