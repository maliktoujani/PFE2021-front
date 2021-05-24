import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncontratComponent } from './gestioncontrat.component';

describe('GestioncontratComponent', () => {
  let component: GestioncontratComponent;
  let fixture: ComponentFixture<GestioncontratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioncontratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioncontratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
