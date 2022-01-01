import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipPaymentComponent } from './tip-payment.component';

describe('TipPaymentComponent', () => {
  let component: TipPaymentComponent;
  let fixture: ComponentFixture<TipPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
