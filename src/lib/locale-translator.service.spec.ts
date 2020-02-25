import { TestBed } from '@angular/core/testing';

import { LocaleTranslationsService } from './locale-translator.service';

describe('LocaleTranslationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocaleTranslationsService = TestBed.get(LocaleTranslationsService);
    expect(service).toBeTruthy();
  });
});
