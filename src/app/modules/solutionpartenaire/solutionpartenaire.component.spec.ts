import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionpartenaireComponent } from './solutionpartenaire.component';

describe('SolutionpartenaireComponent', () => {
  let component: SolutionpartenaireComponent;
  let fixture: ComponentFixture<SolutionpartenaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionpartenaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionpartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
