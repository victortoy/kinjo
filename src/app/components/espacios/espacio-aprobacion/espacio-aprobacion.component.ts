import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Espacio } from 'src/app/models/espacio';
import { EstadoReserva } from 'src/app/models/estadoReserva';
import { Reserva } from 'src/app/models/reserva';
import { EspacioService } from 'src/app/services/espacios/espacio.service';
import { ReservaService } from 'src/app/services/reservas/reserva.service';

@Component({
  selector: 'app-espacio-aprobacion',
  templateUrl: './espacio-aprobacion.component.html',
  styleUrls: ['./espacio-aprobacion.component.css']
})
export class EspacioAprobacionComponent implements OnInit {

  listaReservas: Reserva[] = [];
  listaEstados: EstadoReserva[] = [];
  listaEspacios: Espacio[] = [];
  modalRef?: BsModalRef;
  reservaSeleccionada: Reserva;

  constructor(
    private reservaService: ReservaService,
    private espacioService: EspacioService,
    private toastrService: ToastrService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.obtenerEstados();
    this.obtenerReservas();
    this.obtenerEspacios();
  }

  cambiarEstado(isAccepted: boolean) {

  }
 
  openModal(template: TemplateRef<any>, datosReserva: Reserva) {
    this.reservaSeleccionada = datosReserva;
    this.modalRef = this.modalService.show(template);
  }

  obtenerReservas(): void {
    this.reservaService.obtenerReservasPendientes().subscribe({
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
  
  getNombreEspacio(id: string) {
    return this.listaEspacios.find((espacio: Espacio) => espacio.espacio_id === id)?.nombre;
  }

}
