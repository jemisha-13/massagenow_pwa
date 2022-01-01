import { TestBed } from '@angular/core/testing';

import { PicktherapistService } from './picktherapist.service';

describe('PicktherapistService', () => {
  let service: PicktherapistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PicktherapistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
