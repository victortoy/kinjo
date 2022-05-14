import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacioReservasComponent } from './espacio-reservas.component';

describe('EspacioReservasComponent', () => {
  let component: EspacioReservasComponent;
  let fixture: ComponentFixture<EspacioReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacioReservasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacioReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
