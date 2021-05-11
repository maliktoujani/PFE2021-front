import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportparsolutionpartenaireComponent } from './rapportparsolutionpartenaire.component';

describe('RapportparsolutionpartenaireComponent', () => {
  let component: RapportparsolutionpartenaireComponent;
  let fixture: ComponentFixture<RapportparsolutionpartenaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportparsolutionpartenaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportparsolutionpartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
