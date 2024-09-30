import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../services/display.service';
import { FoodService } from '../services/food.service';
import { Restaurant } from '../models/Restaurant';
import { CartService } from '../services/cart.service';
import { app } from '../../../server';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  constructor(private displayService:DisplayService,private foodService:FoodService,private cartService:CartService,private mb:MatSnackBar){
    this.ngOnInit();

  }
  regRest:Restaurant[]=[]
  reqRest:Restaurant[]=[]
  ngOnInit(): void {
    this.foodService.getRestaurants().subscribe({
      next:data=>{
        this.regRest=data;
      }
    })
    this.displayService.getAll().subscribe({
      next:data=>{
        this.reqRest=data;
      }
    })
  }

  deleteCart(dishName: string | undefined) {
    // console.log(dishName)
    if (dishName !== undefined) {
       this.cartService.deleteCart(dishName).subscribe({
        
          next: () => {
             // Handle successful deletion
             this.ngOnInit();
             console.log('Dish deleted successfully');
             // Optionally, perform any additional actions after successful deletion
          },
          error: (error) => {
             // Handle error if deletion fails
             console.error('Error deleting dish:', error);
             // Optionally, provide user feedback or retry logic
          }
       });
    } else {
       console.error('Invalid dish name:', dishName);
       // Optionally, provide user feedback or handle the undefined case
    }
 }

 deleteCart2(dishName:String|undefined){
  
  if (typeof dishName === 'string') {
    this.displayService.deleteitem(dishName.toString()).subscribe({
      next: data => {
        this.ngOnInit();
        this.mb.open('Deleted ', '', {
                               duration: 2000,
                               panelClass: ['mat-toolbar', 'mat-primary']
                           });
      }
      ,
      error:e=>{
        this.ngOnInit();
        this.mb.open('Deleted ', '', {
                               duration: 2000,
                               panelClass: ['mat-toolbar', 'mat-primary']
                           });
      }
    });

  }
 }
submitandDelete(r:any){
  this.approved(r);
  this.deleteCart2(r.restaurantName)
}
 approved(data:Restaurant){
  this.foodService.saveRestaurant(data).subscribe({
    next:d=>{
     
      this.ngOnInit();
      
      this.mb.open('Approved ', 'Success', {
        duration: 2000,
        panelClass: ['mat-toolbar', 'mat-primary']
    });
    },
    error:e=>{
      this.ngOnInit();
      this.mb.open('Approved ', 'Success', {
                             duration: 2000,
                             panelClass: ['mat-toolbar', 'mat-primary']
                         });
    }
  });
  
 }

}
