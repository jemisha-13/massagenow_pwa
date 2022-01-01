import { TestBed } from '@angular/core/testing';

import { MybackpackService } from './mybackpack.service';

describe('MybackpackService', () => {
  let service: MybackpackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MybackpackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
