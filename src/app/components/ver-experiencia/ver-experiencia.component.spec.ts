import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerExperienciaComponent } from './ver-experiencia.component';

describe('VerExperienciaComponent', () => {
  let component: VerExperienciaComponent;
  let fixture: ComponentFixture<VerExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerExperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
