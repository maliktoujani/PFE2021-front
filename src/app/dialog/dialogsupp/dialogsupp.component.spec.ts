import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsuppComponent } from './dialogsupp.component';

describe('DialogsuppComponent', () => {
  let component: DialogsuppComponent;
  let fixture: ComponentFixture<DialogsuppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogsuppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogsuppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
