import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutcontratComponent } from './ajoutcontrat.component';

describe('AjoutcontratComponent', () => {
  let component: AjoutcontratComponent;
  let fixture: ComponentFixture<AjoutcontratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutcontratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutcontratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
