import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../services/favorite.service';
import { Dish } from '../models/Dish';
import { FoodService } from '../services/food.service';

import { AuthService } from '../services/auth.service';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-favoritecomp',
  templateUrl: './favoritecomp.component.html',
  styleUrl: './favoritecomp.component.css'
})
export class FavoritecompComponent implements OnInit {

  favDish:Dish[]=[]

  constructor(private favService:FavoriteService,
    private mb:MatSnackBar,
    public authService:AuthService,private router:Router,
    private cartService:CartService
    ,private registerService:RegisterService){
    this.userName();
    
  }
  ngOnInit(): void {
   this.favService.getFav().subscribe(
    (data: any)=>{
      this.favDish=data;
      console.log(data); 
    },
    error => {
      console.log("error From API") 
    }
   )
   
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
// =====================
delete(dishName: string | undefined) {
  this.favService.delete(dishName).subscribe({
    next: data => {
      // Remove the deleted dish from the favDish array
      this.favDish = this.favDish.filter(dish => dish.dishName !== dishName);

      // Display a message
      this.mb.open('Dish Removed from Favorite', 'Removed', {
        duration: 2000,
        panelClass: ['mat-toolbar', 'mat-warn']
      });
    }
  });
}


addToCart(dish: Dish) {
  this.cartService.getUserListOfResturant().subscribe({
    next: data => {
      // Check if the dish is already in the user's cart
      const isDishInCart = data.some(a => a.dishName === dish.dishName);
      if (isDishInCart) {
        this.mb.open('Dish already added', '', {
          duration: 2000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
        this.router.navigateByUrl('cart')
      } else {
        // If the dish is not in the cart, add it
        this.cartService.addToCartOfDish(dish).subscribe(
          () => {
            console.log('Dish added to cart:', dish);
            this.mb.open('Added Successfully', 'Close', {
              duration: 2000,
              panelClass: ['mat-toolbar', 'mat-primary']
            });
            this.router.navigateByUrl('/cart');
          },
          error => {
            console.error('Error adding dish to cart:', error);
            this.mb.open('Error adding dish to cart', 'Close', {
              duration: 2000,
              panelClass: ['mat-toolbar', 'mat-warn']
            });
          }
        );
      }
    },
    error: error => {
      console.error('Error fetching user\'s cart:', error);
      this.mb.open('Error fetching user\'s cart', 'Close', {
        duration: 2000,
        panelClass: ['mat-toolbar', 'mat-warn']
      });
    }
  });
}
}
