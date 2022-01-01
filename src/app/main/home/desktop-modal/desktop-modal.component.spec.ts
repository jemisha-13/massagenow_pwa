import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopModalComponent } from './desktop-modal.component';

describe('DesktopModalComponent', () => {
  let component: DesktopModalComponent;
  let fixture: ComponentFixture<DesktopModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
