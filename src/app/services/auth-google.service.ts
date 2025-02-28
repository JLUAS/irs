import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {

  constructor(private oauthService: OAuthService, private router: Router) {
    this.initLogin();
  }

  initLogin() {
    const config: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId: '342953985229-r32f674o0sk5e1kd7e0jdslnt2l0033d.apps.googleusercontent.com',
      redirectUri: 'https://irs-kohl.vercel.app/main',
      scope: 'openid profile email',
    };

    this.oauthService.configure(config);
    this.oauthService.setupAutomaticSilentRefresh();

    // Subscribe to token_received event to set the token in localStorage
    this.oauthService.events.subscribe(event => {
      if (event.type === 'token_received') {
        const token = this.oauthService.getAccessToken();
        localStorage.setItem('token-irs', token);
        console.log('Token set in localStorage:', token);
        // Optionally, you can navigate after token is received
        this.router.navigate(['/main']);
      }
    });

    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token-irs');
    console.log(!!token);
    return !!token;
  }

  login() {
    this.oauthService.initLoginFlow();
  }

  logout() {
    this.oauthService.logOut();
    localStorage.removeItem('token-irs');
  }

  getProfile() {
    return this.oauthService.getIdentityClaims();
  }
}
