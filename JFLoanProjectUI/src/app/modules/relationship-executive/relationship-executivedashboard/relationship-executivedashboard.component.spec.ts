import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipExecutivedashboardComponent } from './relationship-executivedashboard.component';

describe('RelationshipExecutivedashboardComponent', () => {
  let component: RelationshipExecutivedashboardComponent;
  let fixture: ComponentFixture<RelationshipExecutivedashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationshipExecutivedashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationshipExecutivedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
