import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportparwebserviceComponent } from './rapportparwebservice.component';

describe('RapportparwebserviceComponent', () => {
  let component: RapportparwebserviceComponent;
  let fixture: ComponentFixture<RapportparwebserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportparwebserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportparwebserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
