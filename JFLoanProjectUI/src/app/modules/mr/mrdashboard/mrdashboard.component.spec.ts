import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrdashboardComponent } from './mrdashboard.component';

describe('MrdashboardComponent', () => {
  let component: MrdashboardComponent;
  let fixture: ComponentFixture<MrdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
