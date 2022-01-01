import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickTherapistComponent } from './pick-therapist.component';

describe('PickTherapistComponent', () => {
  let component: PickTherapistComponent;
  let fixture: ComponentFixture<PickTherapistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickTherapistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickTherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
