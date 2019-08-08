import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaulterdetailsComponent } from './defaulterdetails.component';

describe('DefaulterdetailsComponent', () => {
  let component: DefaulterdetailsComponent;
  let fixture: ComponentFixture<DefaulterdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaulterdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaulterdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
