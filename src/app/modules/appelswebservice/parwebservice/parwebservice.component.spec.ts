import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParwebserviceComponent } from './parwebservice.component';

describe('ParwebserviceComponent', () => {
  let component: ParwebserviceComponent;
  let fixture: ComponentFixture<ParwebserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParwebserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParwebserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
