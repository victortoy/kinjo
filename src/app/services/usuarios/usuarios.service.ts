import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario, UsuarioLogin } from 'src/app/models/usuario';
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

  login(usuario: UsuarioLogin): Observable<Usuario> {
    return this.http.post<Usuario>(this.url + '/login', usuario);
  }

  obtenerUsuarios() {
    return this.http.get(this.url);
  }

}
