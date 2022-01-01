import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineSupportComponent } from './online-support.component';

describe('OnlineSupportComponent', () => {
  let component: OnlineSupportComponent;
  let fixture: ComponentFixture<OnlineSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
