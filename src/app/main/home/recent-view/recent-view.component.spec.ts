import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentViewComponent } from './recent-view.component';

describe('RecentViewComponent', () => {
  let component: RecentViewComponent;
  let fixture: ComponentFixture<RecentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
