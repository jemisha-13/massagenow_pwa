import { TestBed } from '@angular/core/testing';

import { MyloyalitypointService } from './myloyalitypoint.service';

describe('MyloyalitypointService', () => {
  let service: MyloyalitypointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyloyalitypointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
