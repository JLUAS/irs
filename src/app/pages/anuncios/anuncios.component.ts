import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGoogleService } from '../../services/auth-google.service';

@Component({
  selector: 'app-anuncios',
  standalone: false,
  templateUrl: './anuncios.component.html',
  styleUrl: './anuncios.component.css'
})
export class AnunciosComponent implements OnInit{

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
      }, 1500); // Espera 2 segundos antes de verificar autenticación.
  }
}
