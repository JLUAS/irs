import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const google: any; // Declara el objeto global

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Inicializa el objeto de Google Sign-In
    if(localStorage.getItem('token-irs')){
      this.router.navigate(['/home']);
    }
    google.accounts.id.initialize({
      client_id: '342953985229-r32f674o0sk5e1kd7e0jdslnt2l0033d.apps.googleusercontent.com', // Reemplaza con tu Client ID
      callback: this.handleCredentialResponse.bind(this),
      auto_select: false,
    });

    // Renderiza el botón de Google Sign-In
    google.accounts.id.renderButton(
      document.getElementById('googleSignInDiv'),
      { theme: 'outline', size: 'large' }
    );
  }

  // Función que maneja la respuesta de autenticación de Google
  handleCredentialResponse(response: any): void {
    const token = response.credential;
    localStorage.setItem('token-irs', token);

    // Decodifica el token para extraer la información del usuario
    const payload = JSON.parse(atob(token.split('.')[1]));
    const email = payload.email;

    // Valida que el correo pertenezca al dominio institucional
    if (email.endsWith('@tec.mx')) {
      console.log('Usuario autorizado:', email);
      // Redirige a la ruta home
      this.router.navigate(['/home']);
    } else {
      alert('Acceso restringido solo a alumnos del Tec de Monterrey.');
      localStorage.removeItem('token');
    }
  }
}
