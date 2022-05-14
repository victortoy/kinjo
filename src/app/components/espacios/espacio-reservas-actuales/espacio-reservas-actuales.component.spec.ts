import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacioReservasActualesComponent } from './espacio-reservas-actuales.component';

describe('EspacioReservasActualesComponent', () => {
  let component: EspacioReservasActualesComponent;
  let fixture: ComponentFixture<EspacioReservasActualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacioReservasActualesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacioReservasActualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
