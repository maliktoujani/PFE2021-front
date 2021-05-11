import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParsolutionpartenaireComponent } from './parsolutionpartenaire.component';

describe('ParsolutionpartenaireComponent', () => {
  let component: ParsolutionpartenaireComponent;
  let fixture: ComponentFixture<ParsolutionpartenaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParsolutionpartenaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParsolutionpartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
