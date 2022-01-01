import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirExperienciaComponent } from './subir-experiencia.component';

describe('SubirExperienciaComponent', () => {
  let component: SubirExperienciaComponent;
  let fixture: ComponentFixture<SubirExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirExperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
