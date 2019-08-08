import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalheadsendnoticeComponent } from './legalheadsendnotice.component';

describe('LegalheadsendnoticeComponent', () => {
  let component: LegalheadsendnoticeComponent;
  let fixture: ComponentFixture<LegalheadsendnoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalheadsendnoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalheadsendnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
