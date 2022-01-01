import { TestBed } from '@angular/core/testing';

import { MywalletService } from './mywallet.service';

describe('MywalletService', () => {
  let service: MywalletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MywalletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
