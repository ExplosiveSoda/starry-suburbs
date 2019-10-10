import { TestBed } from '@angular/core/testing';

import { MarkerServiceService } from './marker-service.service';

describe('MarkerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarkerServiceService = TestBed.get(MarkerServiceService);
    expect(service).toBeTruthy();
  });
});
