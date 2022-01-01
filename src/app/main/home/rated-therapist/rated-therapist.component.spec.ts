import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatedTherapistComponent } from './rated-therapist.component';

describe('RatedTherapistComponent', () => {
  let component: RatedTherapistComponent;
  let fixture: ComponentFixture<RatedTherapistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatedTherapistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatedTherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
