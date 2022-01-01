import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyTipComponent } from './buy-tip.component';

describe('BuyTipComponent', () => {
  let component: BuyTipComponent;
  let fixture: ComponentFixture<BuyTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
