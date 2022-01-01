import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLoyalityPointsComponent } from './my-loyality-points.component';

describe('MyLoyalityPointsComponent', () => {
  let component: MyLoyalityPointsComponent;
  let fixture: ComponentFixture<MyLoyalityPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLoyalityPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLoyalityPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
