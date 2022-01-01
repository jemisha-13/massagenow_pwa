import { TestBed } from '@angular/core/testing';

import { MyrelationshipsService } from './myrelationships.service';

describe('MyrelationshipsService', () => {
  let service: MyrelationshipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyrelationshipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
