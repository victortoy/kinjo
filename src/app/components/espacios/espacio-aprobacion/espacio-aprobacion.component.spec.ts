import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacioAprobacionComponent } from './espacio-aprobacion.component';

describe('EspacioAprobacionComponent', () => {
  let component: EspacioAprobacionComponent;
  let fixture: ComponentFixture<EspacioAprobacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacioAprobacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacioAprobacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
