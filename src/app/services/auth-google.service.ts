import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc'

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
      redirectUri: 'https://irs-kohl.vercel.app/inicio',
      scope: 'openid profile email',
    };

    this.oauthService.configure(config);
    this.oauthService.setupAutomaticSilentRefresh();

    this.oauthService.events.subscribe(event => {

      if (event.type === 'token_received') {
        const token = this.oauthService.getAccessToken();
        localStorage.setItem('token-irs', token);

        this.router.navigate(['/main']);
      }
    });

    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.oauthService.hasValidAccessToken()) {
        const token = this.oauthService.getAccessToken();
        localStorage.setItem('token-irs', token);

        this.router.navigate(['/main']);
      }
    });
  }


  isAuthenticated(): boolean {
    const token = localStorage.getItem('token-irs');
    return !!token;
  }

  login() {
    this.oauthService.initLoginFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  getProfile() {
    return this.oauthService.getIdentityClaims();
  }

}
