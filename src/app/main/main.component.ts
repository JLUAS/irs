import { Component, OnInit } from '@angular/core';
import { AuthGoogleService } from '../services/auth-google.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone:false
})
export class MainComponent implements OnInit {

  constructor(
    private authGoogleService: AuthGoogleService,
    private router: Router
  ) { }
  isAuthenticated:boolean=true
  ngOnInit(): void {
    setTimeout(() => {
      this.isAuthenticated = this.authGoogleService.isAuthenticated();
      if (!this.isAuthenticated) {
        console.log("Authenticated in", this.isAuthenticated);
        this.router.navigate(['/']);
      }
    }, 2000); // 2000 milisegundos = 2 segundos
  }


  showData() {
    const data = JSON.stringify(this.authGoogleService.getProfile())

    console.log(data);
  }

  logOut() {
    this.authGoogleService.logout();
    this.router.navigate(['login']);
  }

}
