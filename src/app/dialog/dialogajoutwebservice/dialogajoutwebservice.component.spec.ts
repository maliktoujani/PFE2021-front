import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogajoutwebserviceComponent } from './dialogajoutwebservice.component';

describe('DialogajoutwebserviceComponent', () => {
  let component: DialogajoutwebserviceComponent;
  let fixture: ComponentFixture<DialogajoutwebserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogajoutwebserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogajoutwebserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
