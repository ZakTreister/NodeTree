import { TestBed } from '@angular/core/testing';

import { LocationConnector } from './location.connector';

describe('LocationConnector', () => {
  let service: LocationConnector;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationConnector);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
