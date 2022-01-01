import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendTipComponent } from './send-tip.component';

describe('SendTipComponent', () => {
  let component: SendTipComponent;
  let fixture: ComponentFixture<SendTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
