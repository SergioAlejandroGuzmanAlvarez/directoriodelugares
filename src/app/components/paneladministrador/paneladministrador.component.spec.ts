import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneladministradorComponent } from './paneladministrador.component';

describe('PaneladministradorComponent', () => {
  let component: PaneladministradorComponent;
  let fixture: ComponentFixture<PaneladministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaneladministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaneladministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
