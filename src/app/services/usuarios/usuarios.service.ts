import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.apiBack + environment.usuarios;
  }

  login(usuario: Usuario): Observable<any> {
    return this.http.post(this.url + '/login', usuario);
  }

  obtenerUsuarios() {
    return this.http.get(this.url);
  }

}
