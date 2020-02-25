import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LocaleTranslationsComponent } from './locale-translator.component';

describe('LocaleTranslationsComponent', () => {
  let component: LocaleTranslationsComponent;
  let fixture: ComponentFixture<LocaleTranslationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocaleTranslationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaleTranslationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
