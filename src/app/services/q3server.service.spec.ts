import { TestBed } from '@angular/core/testing';

import { Q3serverService } from './q3server.service';

describe('Q3serverService', () => {
  let service: Q3serverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Q3serverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
