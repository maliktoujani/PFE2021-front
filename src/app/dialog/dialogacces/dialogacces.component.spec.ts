import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogaccesComponent } from './dialogacces.component';

describe('DialogaccesComponent', () => {
  let component: DialogaccesComponent;
  let fixture: ComponentFixture<DialogaccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogaccesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogaccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
