import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { RegisterService } from '../services/register.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {

  ngOnInit(): void {
    
  }
  constructor(private fb:FormBuilder,private registerService:RegisterService,private _snackBar:MatSnackBar,private router:Router){}
  registrationForm=this.fb.group(
    {
      userName:['', [Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-Z\s]*$/)

     ]],
      userEmail:['',[Validators.required,Validators.pattern(
        /^[a-zA-Z_.+\-]+[a-zA-Z0-9_.+\-]+@[a-zA-Z\-]+\.[a-zA-Z\-.]+$/
        ),
      ]],
      userPassword:['',[
        Validators.required,
        Validators.pattern(
          /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        ),
      ]],
      confirmPassword:['',[
        Validators.required,
        Validators.pattern(
          /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        ),
      ]],
      phoneNumber:['', [Validators.required,Validators.pattern(/^[789]\d{9,9}$/)]],
      address:this.fb.group(
        {
          city:['',[Validators.required]],
          state:['',[Validators.required]],
          pincode:['', [Validators.required,Validators.pattern(/^\d{5,6}$/)]]
        }
      )
    },
    {validators:this.mustMatchPassword}
  )
  mustMatchPassword(fg: AbstractControl) {
    const password = fg.get('userPassword')?.value;
    const confirmPassword = fg.get('confirmPassword')?.value;
    if (!password || !confirmPassword) {
      return null;
    }
    if (password != confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }
  
  get userName() {
    return this.registrationForm.get('userName');
  }

  get userEmail() {
    return this.registrationForm.get('userEmail');
  }

  get userPassword() {
    return this.registrationForm.get('userPassword');
  }
  get confirmPassword(){
    return this.registrationForm.get("confirmPassword");
  }

  get phoneNumber() {
    return this.registrationForm.get('phoneNumber');
  }

  get address() {
    return this.registrationForm.get('address');
  }

  get city() {
    return this.registrationForm.get('address.city');
  }

  get state() {
    return this.registrationForm.get('address.state');
  }

  get pincode() {
    return this.registrationForm.get('address.pincode');
  }
  onSubmit(){
    debugger;
    if(this.registrationForm.valid){
      const formData = this.registrationForm.getRawValue();
      this.registerService.fetch().subscribe({
        next:d=>{
          const userWithEmail = d.filter((user) => user.userEmail === formData.userEmail);
          if (userWithEmail.length > 0) {
            // User with the same email exists
            this._snackBar.open('User with this email already exists.', 'Close', {
              duration: 3000,
            });
            this.router.navigateByUrl('login')
          } 
          else{
            this.registerService.addUserData(this.registrationForm.value).subscribe({
              next:data=>{
   
                this._snackBar.open("SuccessFully Registered",
                    'success',{duration:3000,panelClass:['mat-toolbar','mat-primary']}
                    )
                    this.router.navigateByUrl('login')
              },
              error:e=>{
                this._snackBar.open("Failure Registered",
                    'success',{duration:3000,panelClass:['mat-toolbar','mat-primary']}
                    )
              }
             })
          }
        }
      })
          
    }
  }
}