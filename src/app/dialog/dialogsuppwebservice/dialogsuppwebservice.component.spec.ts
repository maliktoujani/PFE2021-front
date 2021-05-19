import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsuppwebserviceComponent } from './dialogsuppwebservice.component';

describe('DialogsuppwebserviceComponent', () => {
  let component: DialogsuppwebserviceComponent;
  let fixture: ComponentFixture<DialogsuppwebserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogsuppwebserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogsuppwebserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
