import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  tieneAuth: boolean = false;
  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.tieneAuth = this.tokenService.hasAuth();
  }

  onLogin() {
    this.router.navigate(['/login']);
  }

  onLogout() {
    this.tokenService.logOut();
    window.location.reload();
  }

}
