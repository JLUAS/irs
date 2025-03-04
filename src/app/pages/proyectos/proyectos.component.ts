import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  standalone: false,
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements OnInit{

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
