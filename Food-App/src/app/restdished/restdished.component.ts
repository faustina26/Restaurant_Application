import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/Restaurant';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food.service';
import { CartService } from '../services/cart.service';
import { Dish } from '../models/Dish';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterService } from '../services/register.service';
import { AuthService } from '../services/auth.service';
import { FavoriteService } from '../services/favorite.service';


@Component({
  selector: 'app-restdished',
  templateUrl: './restdished.component.html',
  styleUrl: './restdished.component.css'
})
export class RestdishedComponent implements OnInit {

  restaurant: Restaurant ={};
  favoriteStatus: { [key: string]: boolean } = {}; // Initialize favoriteStatus as an empty object


  constructor(
    private route: ActivatedRoute,
    private cartService:CartService,
    private foodService: FoodService,
    private router:Router,
    private mb:MatSnackBar,
  private registerService:RegisterService,
    public authService:AuthService,
    private favService:FavoriteService
    
  ) { 
    this.userName();
   
    
  }

  ngOnInit(): void {
    this.loadFavorites();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.foodService.getRestaurantById(id).subscribe(restaurant => {
        this.restaurant = restaurant;
      });
    }
    
  }
 
//   addToCart(dish: Dish) {
//     this.cartService.getUserListOfResturant().subscribe({
//         next: data => {
//             if (data.some(cartDish => cartDish.dishId === dish.dishId)) {
//                 // If the dish is already in the cart, notify the user
//                 this.mb.open('Dish is already in the cart', 'Close', {
//                     duration: 2000,
//                     panelClass: ['mat-toolbar', 'mat-primary']
//                 });
//                 this.router.navigateByUrl('cart')
//             } else {
//                 // If the dish is not in the cart, add it
//                 this.cartService.addToCartOfDish(dish).subscribe(
//                     () => {
//                         console.log('Dish added to cart:', dish);
//                         this.mb.open('Added Successfully', 'Close', {
//                             duration: 2000,
//                             panelClass: ['mat-toolbar', 'mat-primary']
//                         });
//                         this.router.navigateByUrl('/cart');
//                     },
//                     error => {
//                         console.error('Error adding dish to cart:', error);
//                         this.mb.open('Error adding dish to cart', 'Close', {
//                             duration: 2000,
//                             panelClass: ['mat-toolbar', 'mat-warn']
//                         });
//                     }
//                 );
//             }
//         },
//         error: error => {
//             console.error('Error fetching user\'s cart:', error);
//             this.mb.open('Error fetching user\'s cart', 'Close', {
//                 duration: 2000,
//                 panelClass: ['mat-toolbar', 'mat-warn']
//             });
//         }
//     });
// }
addToCart(dish: Dish) {
  this.cartService.getUserListOfResturant().subscribe({
    next: data => {
      if (data && Array.isArray(data) && data.some(cartDish => cartDish.dishId === dish.dishId)) {
        // If the dish is already in the cart, notify the user
        this.mb.open('Dish is already in the cart', 'Close', {
          duration: 2000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
        this.router.navigateByUrl('cart')
      } else {
        // If the dish is not in the cart or data is null/undefined, add it
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
      // console.error();
      this.mb.open('Login To Add Cart', 'Login', {
        duration: 2000,
        panelClass: ['mat-toolbar', 'mat-warn']
      });
      this.router.navigateByUrl('login')
    }
  });
}

  // -------------------------
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
  // ---------------------------------------------------------------------
  addToFav(dish: Dish) {
    debugger;
    if (this.favoriteStatus[dish.dishName ?? '']) {
      this.removeFromFav(dish); // If already a favorite, remove it
    } else {
      this.favService.addFav(dish).subscribe(() => {
        this.favoriteStatus[dish.dishName ?? ''] = true; // If not a favorite, add it
      });
    }
  }
  
  removeFromFav(dish: Dish) {
    this.favService.delete(dish.dishName ?? '').subscribe(() => {
      this.favoriteStatus[dish.dishName ?? ''] = false; // Remove from favorites
    });
  }
  
  loadFavorites() {
    this.favService.getFav().subscribe(favorites => {
      favorites.forEach((favorite: any) => {
        this.favoriteStatus[favorite.dishName ?? ''] = true; // Mark dishes that are favorites
      });
    });
  }
  
  
}
