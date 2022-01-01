import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFevoriteTherapistComponent } from './delete-fevorite-therapist.component';

describe('DeleteFevoriteTherapistComponent', () => {
  let component: DeleteFevoriteTherapistComponent;
  let fixture: ComponentFixture<DeleteFevoriteTherapistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFevoriteTherapistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFevoriteTherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
