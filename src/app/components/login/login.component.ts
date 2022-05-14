import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { Router } from "@angular/router";
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  mensajeError: string;
  isError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuariosService,
    private router: Router
  ) {
    this.crearFormulario();
  }

  get usuario() {
    return this.loginForm.get('usuario');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
    let usuario: Usuario = this.getUser();
    if (usuario?.id) {
      this.redirectByRol(usuario.rolId);
    }
  }

  crearFormulario() {
    this.loginForm = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    let { usuario, password } = this.loginForm.value;
    let usuarioLogin = {
      usuario,
      password
    }
    this.isError = false;

    this.usuarioService.login(usuarioLogin).subscribe({
      complete: () => {},
      error: (e) => {
        console.log('error', e);
        this.isError = true;
        this.mensajeError = e.error || 'No se pudo ingresar';
      },    
      next: (usuario: Usuario) => {
        this.isError = false;
        localStorage.setItem('user', JSON.stringify(usuario));
        this.redirectByRol(usuario.rolId);
      }
    });
  }

  getUser(): Usuario {
    return JSON.parse(localStorage.getItem('user'));
  }

  redirectByRol(rolId: string) {
    console.log('redirect: ', rolId);
    
    if (rolId === '1' || rolId === '3') {
      this.router.navigate(['/home']);
    } else if (rolId == '2') {
      this.router.navigate(['/espacios/aprobacion']);
    } else if (rolId == '4' || rolId == '5') {
      this.router.navigate(['/espacios']);
    }
  }

}
