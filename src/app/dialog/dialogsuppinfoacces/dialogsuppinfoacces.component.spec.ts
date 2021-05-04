import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsuppinfoaccesComponent } from './dialogsuppinfoacces.component';

describe('DialogsuppinfoaccesComponent', () => {
  let component: DialogsuppinfoaccesComponent;
  let fixture: ComponentFixture<DialogsuppinfoaccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogsuppinfoaccesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogsuppinfoaccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
