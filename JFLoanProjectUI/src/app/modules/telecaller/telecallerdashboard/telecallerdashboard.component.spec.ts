import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecallerdashboardComponent } from './telecallerdashboard.component';

describe('TelecallerdashboardComponent', () => {
  let component: TelecallerdashboardComponent;
  let fixture: ComponentFixture<TelecallerdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelecallerdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelecallerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
