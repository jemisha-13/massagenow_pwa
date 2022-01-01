import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomToasterComponent } from './custom-toaster.component';

describe('CustomToasterComponent', () => {
  let component: CustomToasterComponent;
  let fixture: ComponentFixture<CustomToasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomToasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
