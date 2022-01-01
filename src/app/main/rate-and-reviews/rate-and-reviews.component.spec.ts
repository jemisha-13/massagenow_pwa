import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateAndReviewsComponent } from './rate-and-reviews.component';

describe('RateAndReviewsComponent', () => {
  let component: RateAndReviewsComponent;
  let fixture: ComponentFixture<RateAndReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateAndReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateAndReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
