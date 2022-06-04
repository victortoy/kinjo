import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EstadoReserva } from 'src/app/models/estadoReserva';
import { Reserva } from 'src/app/models/reserva';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.apiBack + environment.reservas;
  }

  obtenerReservasPorUsuario(usuarioId): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(`${this.url}/lista/${usuarioId}`);
  }

  obtenerReservasPendientes(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(`${this.url}/lista`);
  }

  obtenerEstados(): Observable<EstadoReserva[]> {
    return this.http.get<EstadoReserva[]>(this.url + '/estados');
  }

  cancelar(id: string) {
    return this.http.delete(`${this.url}/cancelar/${id}`);
  }

}
