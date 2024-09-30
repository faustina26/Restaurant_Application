import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'Food-App';
}