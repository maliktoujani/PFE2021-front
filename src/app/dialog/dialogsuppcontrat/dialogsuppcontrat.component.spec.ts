import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsuppcontratComponent } from './dialogsuppcontrat.component';

describe('DialogsuppcontratComponent', () => {
  let component: DialogsuppcontratComponent;
  let fixture: ComponentFixture<DialogsuppcontratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogsuppcontratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogsuppcontratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
