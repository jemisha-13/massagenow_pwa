import { TestBed } from '@angular/core/testing';

import { BookforService } from './bookfor.service';

describe('BookforService', () => {
  let service: BookforService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookforService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
