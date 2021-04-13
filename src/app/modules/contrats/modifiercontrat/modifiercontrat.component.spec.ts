import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiercontratComponent } from './modifiercontrat.component';

describe('ModifiercontratComponent', () => {
  let component: ModifiercontratComponent;
  let fixture: ComponentFixture<ModifiercontratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiercontratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiercontratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
