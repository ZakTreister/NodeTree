import { TestBed } from '@angular/core/testing';

import { LocationComponentService } from './location.component.service';

describe('LocationComponentService', () => {
  let service: LocationComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
