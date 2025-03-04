import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGoogleService } from '../../services/auth-google.service';

@Component({
  selector: 'app-contacto',
  standalone: false,
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit{

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
