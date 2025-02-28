// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthGoogleService } from './auth-google.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthGoogleService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      // Redirige al login si no está autenticado
      this.router.navigate(['/login']);
      return false;
    }
  }
}
