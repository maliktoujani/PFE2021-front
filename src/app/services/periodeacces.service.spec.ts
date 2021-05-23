import { TestBed } from '@angular/core/testing';

import { PeriodeaccesService } from './periodeacces.service';

describe('PeriodeaccesService', () => {
  let service: PeriodeaccesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeriodeaccesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
