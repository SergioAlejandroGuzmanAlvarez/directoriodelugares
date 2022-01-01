import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarExperienciaComponent } from './listar-experiencia.component';

describe('ListarExperienciaComponent', () => {
  let component: ListarExperienciaComponent;
  let fixture: ComponentFixture<ListarExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarExperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
