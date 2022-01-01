import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSlotSelectedComponent } from './time-slot-selected.component';

describe('TimeSlotSelectedComponent', () => {
  let component: TimeSlotSelectedComponent;
  let fixture: ComponentFixture<TimeSlotSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeSlotSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSlotSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
