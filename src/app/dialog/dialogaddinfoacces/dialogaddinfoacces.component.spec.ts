import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogaddinfoaccesComponent } from './dialogaddinfoacces.component';

describe('DialogaddinfoaccesComponent', () => {
  let component: DialogaddinfoaccesComponent;
  let fixture: ComponentFixture<DialogaddinfoaccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogaddinfoaccesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogaddinfoaccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
