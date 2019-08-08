import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquirydetailsComponent } from './enquirydetails.component';

describe('EnquirydetailsComponent', () => {
  let component: EnquirydetailsComponent;
  let fixture: ComponentFixture<EnquirydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquirydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquirydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
