import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from 'src/app/models/reserva';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EspacioService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiBack + environment.espacios;
  }

  obtenerLista(): Observable<any> {
    return this.http.get(this.url + '/consulta');
  }

  reservar(datos: Reserva) {
    return this.http.post(this.url + '/reservar', datos)
  }
}
