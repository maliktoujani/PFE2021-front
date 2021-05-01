import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogeditcontratComponent } from './dialogeditcontrat.component';

describe('DialogeditcontratComponent', () => {
  let component: DialogeditcontratComponent;
  let fixture: ComponentFixture<DialogeditcontratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogeditcontratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogeditcontratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
