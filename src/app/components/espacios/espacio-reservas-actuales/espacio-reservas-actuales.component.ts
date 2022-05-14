import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Espacio } from 'src/app/models/espacio';
import { EstadoReserva } from 'src/app/models/estadoReserva';
import { Reserva } from 'src/app/models/reserva';
import { EspacioService } from 'src/app/services/espacios/espacio.service';
import { ReservaService } from 'src/app/services/reservas/reserva.service';

@Component({
  selector: 'app-espacio-reservas-actuales',
  templateUrl: './espacio-reservas-actuales.component.html',
  styleUrls: ['./espacio-reservas-actuales.component.css']
})
export class EspacioReservasActualesComponent implements OnInit {

  listaReservas: Reserva[] = [];
  listaEstados: EstadoReserva[] = [];
  listaEspacios: Espacio[] = [];

  constructor(
    private reservaService: ReservaService,
    private espacioService: EspacioService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.obtenerEstados();
    this.obtenerReservas();
    this.obtenerEspacios();
  }

  obtenerReservas(): void {
    //TODO cambiar por usuario logueado
    let usuarioId = 1;

    this.reservaService.obtenerReservas(usuarioId).subscribe({
      next: (success: any) => {
        this.listaReservas = success;
      },
      complete: () => {},
      error: (e) => {
        console.log('error', e);
      }
    });
  }

  obtenerEstados() {
    this.reservaService.obtenerEstados().subscribe({
      next: (success: any) => {
        this.listaEstados = success;
      },
      complete: () => { },
      error: (e: any) => {
        console.log('error', e);
      }
    });
  }
 
  obtenerEspacios() {
    this.espacioService.obtenerLista().subscribe({
      next: (success: any) => {
        this.listaEspacios = success;
      },
      complete: () => { },
      error: (e: any) => {
        console.log('error', e);
      }
    });
  }

  cancelarReserva(id) {
    this.reservaService.cancelar(id).subscribe({
      next: (response: any) => {
        this.toastrService.success(response.message);
      },
      complete: () => {
        this.obtenerReservas();
      },
      error: (e: any) => {
        console.log('error', e);
      }
    })
  }

  getDescripcionEstado(id: string): string {
    return this.listaEstados.find((estado: EstadoReserva) => estado.id === id)?.descripcion;
  }

  getNombreEspacio(id: string) {
    return this.listaEspacios.find((espacio: Espacio) => espacio.espacio_id === id)?.nombre;
  }
}
