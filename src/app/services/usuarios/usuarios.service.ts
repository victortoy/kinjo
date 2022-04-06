import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }

  login(usuario: Usuario): Observable<any> {
    return this.http.post(environment.appUsuario + '/login', usuario);
  }

  obtenerUsuarios() {
    return this.http.get(environment.appUsuario);
  }

}
