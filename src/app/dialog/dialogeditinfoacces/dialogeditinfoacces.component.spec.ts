import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogeditinfoaccesComponent } from './dialogeditinfoacces.component';

describe('DialogeditinfoaccesComponent', () => {
  let component: DialogeditinfoaccesComponent;
  let fixture: ComponentFixture<DialogeditinfoaccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogeditinfoaccesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogeditinfoaccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
