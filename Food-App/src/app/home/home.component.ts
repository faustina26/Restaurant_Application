import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Restaurant } from '../models/Restaurant';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

    Rest:Restaurant[]=[]
  
  constructor(private foodservice:FoodService,public authService:AuthService,private router:Router
    ,private registerService:RegisterService){}
  ngOnInit(): void {
    this.foodservice.getRestaurants().subscribe({
      next: (data) => {
        // console.log(data)
        this.Rest = data;
        this.filteredRestaurants = data;
      },
      // error: (error) => {
      //   alert('Failed to Fetch Notes Due to Server Error !!');
      // }
    });
    this.userName()
  }
  filteredRestaurants: Restaurant[] = [];

  // onSearchNote(senote: string ) {
  //   if (!senote || senote.trim() === '') {
  //     // this.ngOnInit(); // Reload all restaurants if the search string is empty
  //     this.filteredRestaurants=this.Rest;
  //   }
  //   else {
  //     this.filteredRestaurants = this.Rest.filter((note) =>
  //       note.restaurantName?.toLowerCase().startsWith(senote.toLowerCase())
  //       ||
  //       note.cuisine?.toLowerCase().startsWith(senote.toLowerCase())
  //     );
      
  //   }
   
  // }
  onSearchNote(senote: string ) {
    if (!senote || senote.trim() === '') {
      // If search string is empty, display all restaurants
      this.filteredRestaurants = this.Rest;
    } else {
      // Filter restaurants based on whether their names or cuisines contain the search string
      this.filteredRestaurants = this.Rest.filter((note) =>
        note.restaurantName?.toLowerCase().includes(senote.toLowerCase())
          ||
        note.cuisine?.toLowerCase().startsWith(senote.toLowerCase())
      );
    }
  }
  
  // Initialize filteredRestaurants with all restaurants

  onSelectLocation(selectedLocation: string) {
    console.log(selectedLocation);
    if (selectedLocation === 'All') {
      // If 'All' is selected, display all restaurants
      this.filteredRestaurants = this.Rest;
    } else {
      // Filter restaurants based on the selected location
      this.filteredRestaurants = this.Rest.filter((restaurant) =>
      restaurant.location === selectedLocation
      );
    }
  }

//   isLoggedIn(): boolean {
//     return this.authService.isLoggedInUser();
//   }
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