import { Component } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-helpcomponent',
  templateUrl: './helpcomponent.component.html',
  styleUrl: './helpcomponent.component.css'
})
export class HelpcomponentComponent {

  constructor(public authService:AuthService,private router:Router,private registerService:RegisterService){
this.userName();
  }
  logout() {
    console.log("inside logout")
    localStorage.removeItem('token')
    localStorage.removeItem('message')
    localStorage.removeItem('username')
    localStorage.clear()
    console.log(localStorage.getItem('token'))
    if (this.authService.islogout() == false) {
      this.router.navigateByUrl('home')
      console.log(localStorage.getItem('username'))
    }
    this.name=''
  }
  
  isArrowDown: boolean = true;
  
  toggleArrow() {
    this.isArrowDown = !this.isArrowDown;
    
  }
  name:string=''
  panelOpenState:boolean=false;
  
  
  userName(){
  this.registerService.fetch().subscribe({
    next:d=>{
      d.forEach(user=>{
        if(user.userEmail==localStorage.getItem('username')){
          this.name=user.userName.toUpperCase();
         
        }
      
      })
    }
  })
  }
}
