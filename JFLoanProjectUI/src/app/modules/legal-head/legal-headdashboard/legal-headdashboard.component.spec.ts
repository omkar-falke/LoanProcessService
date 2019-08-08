import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalHeaddashboardComponent } from './legal-headdashboard.component';

describe('LegalHeaddashboardComponent', () => {
  let component: LegalHeaddashboardComponent;
  let fixture: ComponentFixture<LegalHeaddashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalHeaddashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalHeaddashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
