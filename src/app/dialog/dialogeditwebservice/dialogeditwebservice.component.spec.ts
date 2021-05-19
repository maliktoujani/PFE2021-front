import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogeditwebserviceComponent } from './dialogeditwebservice.component';

describe('DialogeditwebserviceComponent', () => {
  let component: DialogeditwebserviceComponent;
  let fixture: ComponentFixture<DialogeditwebserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogeditwebserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogeditwebserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
