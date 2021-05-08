import { TestBed } from '@angular/core/testing';

import { HistoriqueappelService } from './historiqueappel.service';

describe('HistoriqueappelService', () => {
  let service: HistoriqueappelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriqueappelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
