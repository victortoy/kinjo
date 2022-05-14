import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kinjo';

  constructor(
    private router: Router
  ) {

  }

  usuarioSesion(): boolean {
    let usuario: Usuario = JSON.parse(localStorage.getItem('user'));
    return !!(usuario?.id);
  }

  cerrarSesion(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }


}
