import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-espacio-page',
  templateUrl: './espacio-page.component.html',
  styleUrls: ['./espacio-page.component.css']
})
export class EspacioPageComponent implements OnInit {

  descripcion: boolean = true;
  reservas: boolean = false;
  misReservas: boolean = false;

  constructor() {
  }

  ngOnInit(): void {

  }

  onSelect(nombre) {
    this.descripcion = (nombre === 'descripcion');
    this.reservas = (nombre === 'reservas');
    this.misReservas = (nombre === 'misReservas');
  }

}
