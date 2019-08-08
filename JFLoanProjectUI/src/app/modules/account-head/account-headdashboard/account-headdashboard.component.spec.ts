import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountHeaddashboardComponent } from './account-headdashboard.component';

describe('AccountHeaddashboardComponent', () => {
  let component: AccountHeaddashboardComponent;
  let fixture: ComponentFixture<AccountHeaddashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountHeaddashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountHeaddashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
