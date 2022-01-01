import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRelationshipsComponent } from './my-relationships.component';

describe('MyRelationshipsComponent', () => {
  let component: MyRelationshipsComponent;
  let fixture: ComponentFixture<MyRelationshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRelationshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRelationshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
