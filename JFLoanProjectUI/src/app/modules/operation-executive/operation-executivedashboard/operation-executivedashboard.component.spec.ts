import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationExecutivedashboardComponent } from './operation-executivedashboard.component';

describe('OperationExecutivedashboardComponent', () => {
  let component: OperationExecutivedashboardComponent;
  let fixture: ComponentFixture<OperationExecutivedashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationExecutivedashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationExecutivedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
