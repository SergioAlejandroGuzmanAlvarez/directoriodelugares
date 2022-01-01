import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutanayaritComponent } from './rutanayarit.component';

describe('RutanayaritComponent', () => {
  let component: RutanayaritComponent;
  let fixture: ComponentFixture<RutanayaritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutanayaritComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutanayaritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
