import { Component, OnInit } from '@angular/core';

declare const google: any; // Declaramos la variable global de Google

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    // Inicializa el servicio de autenticación de Google
    google.accounts.id.initialize({
      client_id: '342953985229-r32f674o0sk5e1kd7e0jdslnt2l0033d.apps.googleusercontent.com', // Reemplaza con tu Client ID
      callback: this.handleCredentialResponse.bind(this)
    });
    // Opcional: Puedes invocar google.accounts.id.prompt() para mostrar el One Tap automáticamente
    // google.accounts.id.prompt();
  }

  // Función llamada al hacer clic en el botón personalizado
  signInWithGoogle(): void {
    // Este método muestra el flujo de autenticación (One Tap) de Google
    google.accounts.id.prompt();
  }

  // Callback que se ejecuta cuando Google retorna la respuesta de autenticación
  handleCredentialResponse(response: any): void {
    const token = response.credential;
    // Decodificamos el token (para producción, valida siempre en el backend)
    const payload = JSON.parse(atob(token.split('.')[1]));
    const email = payload.email;

    // Verificamos que el correo sea institucional (ejemplo: termina con "@tec.mx")
    if (email.endsWith('@tec.mx')) {
      console.log('Usuario autorizado:', email);
      // Aquí puedes proceder a crear la sesión o redirigir al usuario a la sección protegida
    } else {
      alert('Acceso restringido solo a alumnos del Tec de Monterrey.');
      // Aquí puedes revocar la sesión o limpiar datos si fuera necesario
    }
  }
}
