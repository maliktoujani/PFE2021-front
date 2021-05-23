import { TestBed } from '@angular/core/testing';

import { SolutionPartenaireService } from './solutionpartenaire.service';

describe('SolutionpartenaireService', () => {
  let service: SolutionPartenaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolutionPartenaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
