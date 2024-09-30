import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';
import { login } from '../models/login';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';
import { RegisterService } from '../services/register.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {  

  user: login = {};

constructor(private authService:AuthService,private mb:MatSnackBar,private router:Router,private registerService:RegisterService){}

name:string='';

// validateUserCode(){

//   if(this.user.userEmail && this.user.userPassword){
//     this.registerService.fetch().subscribe({
//     next:d=>{
//       d.forEach(us=>{
//         if(us.userEmail==this.user.userEmail){
//           this.authService.login(this.user).subscribe({
//             next:data=>{
//               console.log(data)
//              //  console.log(data.username)
//               if(data.message==1){                                                  // checking wheather the returned response object contains token
//                 this.mb.open('Login', 'successful', {duration: 2000,panelClass: ['mat-toolbar', 'mat-primary']});
//                 localStorage.setItem('token',data.token)                  
//                 localStorage.setItem('username',data.username)
//                 this.authService.isLoggedStatus=true;                             // making loggedStatus to true
//                 console.log(localStorage.getItem('token')) 
//                 console.log(this.authService.isLoggedStatus)
//                //  this.router.navigateByUrl('cart')
//                this.router.navigateByUrl('home')
//               }
//             },
//             error:error=>{
//               this.mb.open('Login', 'failed', {duration: 2000,panelClass: ['mat-toolbar', 'mat-primary']});
//             }
//           })  
//         }
//         else{
//           this.mb.open('New User Please Signup ','failed', {duration: 2000,panelClass: ['mat-toolbar', 'mat-primary']})
//         }
//         // console.log(this.name)
//       })
//     }
//   })
//   }
 
//   }
validateUserCode() {
  if (this.user.userEmail && this.user.userPassword) {
    this.registerService.fetch().subscribe({
      next: users => {
        const userExists = users.some(user => user.userEmail === this.user.userEmail);
        if (userExists) {
          this.authService.login(this.user).subscribe({
            next: data => {
              console.log(data);
              if (data.message == 1) {
                this.mb.open('Login successful', 'Login', { duration: 2000, panelClass: ['mat-toolbar', 'mat-primary'] });
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', data.username);
                this.authService.isLoggedStatus = true;
                console.log(localStorage.getItem('token'));
                console.log(this.authService.isLoggedStatus);
                this.router.navigateByUrl('home');
              }
            },
            error: error => {
              this.mb.open('Login failed', '', { duration: 2000, panelClass: ['mat-toolbar', 'mat-primary'] });
            }
          });
        } else {
          this.mb.open('New User Please Signup', 'failed', { duration: 2000, panelClass: ['mat-toolbar', 'mat-primary'] });
        }
      }
    });
  }
}

}

