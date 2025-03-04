import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AnunciosComponent } from './pages/anuncios/anuncios.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { RecursosComponent } from './pages/recursos/recursos.component';
import { NuestroProgramaComponent } from './pages/nuestro-programa/nuestro-programa.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent},
  { path: 'anuncios', component: AnunciosComponent},
  { path: 'proyectos', component: ProyectosComponent},
  { path: 'recursos', component: RecursosComponent},
  { path: 'nuestro programa', component: NuestroProgramaComponent},
  { path: 'contacto', component: ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
