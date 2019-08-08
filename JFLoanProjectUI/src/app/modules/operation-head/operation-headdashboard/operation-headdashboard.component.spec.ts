import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationHeaddashboardComponent } from './operation-headdashboard.component';

describe('OperationHeaddashboardComponent', () => {
  let component: OperationHeaddashboardComponent;
  let fixture: ComponentFixture<OperationHeaddashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationHeaddashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationHeaddashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
