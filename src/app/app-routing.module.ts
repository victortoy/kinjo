import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspacioAprobacionComponent } from './components/espacios/espacio-aprobacion/espacio-aprobacion.component';
import { EspacioPageComponent } from './components/espacios/espacio-page/espacio-page.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'espacios',
    component: EspacioPageComponent
  },
  {
    path: 'espacios/aprobacion',
    component: EspacioAprobacionComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
