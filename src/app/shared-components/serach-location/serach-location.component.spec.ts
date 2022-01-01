import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachLocationComponent } from './serach-location.component';

describe('SerachLocationComponent', () => {
  let component: SerachLocationComponent;
  let fixture: ComponentFixture<SerachLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerachLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
