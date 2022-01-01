import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBackpackComponent } from './my-backpack.component';

describe('MyBackpackComponent', () => {
  let component: MyBackpackComponent;
  let fixture: ComponentFixture<MyBackpackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBackpackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBackpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
