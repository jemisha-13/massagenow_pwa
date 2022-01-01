import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyalitypointlistComponent } from './loyalitypointlist.component';

describe('LoyalitypointlistComponent', () => {
  let component: LoyalitypointlistComponent;
  let fixture: ComponentFixture<LoyalitypointlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoyalitypointlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyalitypointlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
