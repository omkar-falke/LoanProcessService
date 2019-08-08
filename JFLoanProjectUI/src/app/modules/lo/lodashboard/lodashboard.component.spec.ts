import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LodashboardComponent } from './lodashboard.component';

describe('LodashboardComponent', () => {
  let component: LodashboardComponent;
  let fixture: ComponentFixture<LodashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LodashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LodashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
