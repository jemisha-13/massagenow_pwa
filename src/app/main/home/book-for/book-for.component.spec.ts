import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookForComponent } from './book-for.component';

describe('BookForComponent', () => {
  let component: BookForComponent;
  let fixture: ComponentFixture<BookForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
