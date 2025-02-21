import { Component, OnInit } from '@angular/core';

declare const google: any; // Declara el objeto global

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
    // Inicializa el objeto de Google Sign-In usando la configuración de la documentación oficial
    google.accounts.id.initialize({
      client_id: '342953985229-r32f674o0sk5e1kd7e0jdslnt2l0033d.apps.googleusercontent.com', // Reemplaza con tu Client ID
      callback: this.handleCredentialResponse.bind(this),
      auto_select: false, // Opcional: para evitar autoselección de cuentas
    });

    // Renderiza el botón de Google Sign-In en el div con id "googleSignInDiv"
    google.accounts.id.renderButton(
      document.getElementById('googleSignInDiv'),
      { theme: 'outline', size: 'large' } // Configura el estilo según la documentación
    );
  }

  // Función que maneja la respuesta de Google una vez autenticado el usuario
  handleCredentialResponse(response: any): void {
    const token = response.credential;
    localStorage.setItem('token', token);

    // Decodifica el token para obtener la información del usuario (en un entorno real, haz la validación en el backend)
    const payload = JSON.parse(atob(token.split('.')[1]));
    const email = payload.email;

    // Aquí puedes agregar la lógica para aceptar solo correos institucionales, por ejemplo:
    if (email.endsWith('@tec.mx')) {
      console.log('Usuario autorizado:', email);
      // Procede a redirigir o almacenar el estado de la sesión
    } else {
      alert('Acceso restringido solo a alumnos del Tec de Monterrey.');
      // Puedes revocar el acceso o limpiar el token
    }
  }
}
