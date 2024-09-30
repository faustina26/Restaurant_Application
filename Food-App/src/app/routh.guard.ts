
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class RouthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): boolean {

    if (this.authService.isAuthenticatedUser()) {
      return true;

  
    } else {
      // User is already logged in, prevent navigation
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
  
