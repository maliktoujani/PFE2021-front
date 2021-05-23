import { TestBed } from '@angular/core/testing';

import { InfoaccesService } from './infoacces.service';

describe('InfoaccesService', () => {
  let service: InfoaccesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoaccesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
