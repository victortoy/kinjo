import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Espacio } from 'src/app/models/espacio';
import { Reserva } from 'src/app/models/reserva';
import { Usuario } from 'src/app/models/usuario';
import { EspacioService } from 'src/app/services/espacios/espacio.service';

@Component({
  selector: 'app-espacio-reservas',
  templateUrl: './espacio-reservas.component.html',
  styleUrls: ['./espacio-reservas.component.css']
})
export class EspacioReservasComponent implements OnInit {

  reservaForm: FormGroup;

  listaEspacios: Espacio[] = [];
  minDate = new Date();
  maxDate = new Date();

  aceptoTerminos: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private espacioService: EspacioService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.crearFormulario();
    this.cargarParametrosIniciales();
    this.limpiarFormulario();
  }

  cargarParametrosIniciales() {
    this.espacioService.obtenerLista().subscribe({
      error: (e) => {
        console.log('error', e);
      },
      next: (success) => {
        this.listaEspacios = success;
      }
    });
  }

  enviar() {
    const datosEnvio: any = { ...this.reservaForm.value };
    let usuario: Usuario = JSON.parse(localStorage.getItem('user'));
    datosEnvio.usuarioId = usuario.id;

    this.espacioService.reservar(datosEnvio)
      .subscribe({
        next: (response: any) => {
          this.toastrService.success(response.message);
        },
        complete: () => {
          this.limpiarFormulario();
        },
        error: (e: any) => {
          console.log('error', e);
        }
      });
  }

  crearFormulario() {
    this.reservaForm = this.formBuilder.group({
      espacio: ['', [Validators.required]],
      fecha: ['', Validators.required],
      horaInicio: ['', [Validators.required]],
      horaFin: ['', [Validators.required]],
      comentario: [''],
      terminos: ['', Validators.required]
    });
  }

  limpiarFormulario() {
    this.minDate = new Date();
    this.minDate = new Date();

    this.reservaForm.controls['fecha'].setValue(this.minDate);
    this.reservaForm.controls['horaInicio'].setValue(this.minDate);
    this.reservaForm.controls['horaFin'].setValue('');
    this.reservaForm.controls['comentario'].setValue('');
    this.reservaForm.controls['terminos'].setValue(false);
  }

  get horaInicio(): AbstractControl {
    return this.reservaForm.get('horaInicio');
  }

  get horaFin(): AbstractControl {
    return this.reservaForm.get('horaFin');
  }

  get fecha(): AbstractControl {
    return this.reservaForm.get('fecha');
  }

  get espacio(): AbstractControl {
    return this.reservaForm.get('espacio');
  }

}
