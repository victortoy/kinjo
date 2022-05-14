import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { EspacioPageComponent } from './components/espacios/espacio-page/espacio-page.component';
import { EspacioReservasComponent } from './components/espacios/espacio-reservas/espacio-reservas.component';

import { UsuariosService } from './services/usuarios/usuarios.service';
import { EspacioService } from './services/espacios/espacio.service';

// Modulos componentes ngx-bootstrap
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { EspacioReservasActualesComponent } from './components/espacios/espacio-reservas-actuales/espacio-reservas-actuales.component';
import { ReservaService } from './services/reservas/reserva.service';
import { ToastrModule } from 'ngx-toastr';
import { EspacioAprobacionComponent } from './components/espacios/espacio-aprobacion/espacio-aprobacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProyectosComponent,
    EspacioPageComponent,
    EspacioReservasComponent,
    EspacioReservasActualesComponent,
    EspacioAprobacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    TabsModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [
    UsuariosService,
    EspacioService,
    ReservaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
