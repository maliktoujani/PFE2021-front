import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogajoutComponent } from './dialogajout.component';

describe('DialogajoutComponent', () => {
  let component: DialogajoutComponent;
  let fixture: ComponentFixture<DialogajoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogajoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogajoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
