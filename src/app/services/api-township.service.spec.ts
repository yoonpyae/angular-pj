import { TestBed } from '@angular/core/testing';

import { ApiTownshipService } from './api-township.service';

describe('ApiTownshipService', () => {
  let service: ApiTownshipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTownshipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
