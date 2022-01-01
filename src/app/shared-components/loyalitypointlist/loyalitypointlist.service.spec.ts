import { TestBed } from '@angular/core/testing';

import { LoyalitypointlistService } from './loyalitypointlist.service';

describe('LoyalitypointlistService', () => {
  let service: LoyalitypointlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoyalitypointlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
