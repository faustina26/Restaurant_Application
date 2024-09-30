import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guardcomp',
  templateUrl: './guardcomp.component.html',
  styleUrl: './guardcomp.component.css'
})
export class GuardcompComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.logIn(this.username, this.password)) {
      this.router.navigate(['/admin']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}

