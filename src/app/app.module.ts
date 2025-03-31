import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthGoogleService } from './services/auth-google.service';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AnunciosComponent } from './pages/anuncios/anuncios.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { RecursosComponent } from './pages/recursos/recursos.component';
import { NuestroProgramaComponent } from './pages/nuestro-programa/nuestro-programa.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioStComponent } from './components/inicio-st/inicio-st.component';
import { WorkInProgressComponent } from './components/work-in-progress/work-in-progress.component';
import { SummerInternshipsComponent } from './components/summer-internships/summer-internships.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { VendorsComponent } from './components/vendors/vendors.component'; // Importa FormsModule

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    NavComponent,
    FooterComponent,
    InicioComponent,
    AnunciosComponent,
    ProyectosComponent,
    RecursosComponent,
    NuestroProgramaComponent,
    ContactoComponent,
    InicioStComponent,
    WorkInProgressComponent,
    SummerInternshipsComponent,
    LandingPageComponent,
    VendorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthGuardService,
    AuthGoogleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
