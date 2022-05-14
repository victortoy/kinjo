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
      complete: () => {
        console.log('completo')
      },
      error: (e) => {
        console.log('error', e);
        this.isError = true;
        this.mensajeError = e.error || 'No se pudo ingresar';
      },    
      next: (v) => {
        this.isError = false;
        console.log("Log: ", v);
        this.router.navigate(['/home']);
      }
    });
  }

}
