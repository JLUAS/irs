import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGoogleService } from '../../services/auth-google.service';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit{

  isAuthenticated: boolean = true;
  constructor(
    private authGoogleService: AuthGoogleService,
    private router: Router
  ) { }
  ngOnInit(): void {
          setTimeout(() => {
        this.isAuthenticated = this.authGoogleService.isAuthenticated();
        if (!this.isAuthenticated) {
          console.log("Authenticated in", this.isAuthenticated);
          this.router.navigate(['/']);
        }
      }, 500); // Espera 2 segundos antes de verificar autenticación.
  }

}
