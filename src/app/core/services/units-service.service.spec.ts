import { TestBed } from '@angular/core/testing';

import { UnitsServiceService } from './units-service.service';

describe('UnitsServiceService', () => {
  let service: UnitsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
