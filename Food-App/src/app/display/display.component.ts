import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { DisplayService } from '../services/display.service';

import { AuthService } from '../services/auth.service';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';
import { FoodService } from '../services/food.service';
import { Restaurants } from '../model/Restaurant';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
 
  data:number=0
     constructor(private favoriteService:DisplayService,private foodService:FoodService,private mb:MatSnackBar,public authService:AuthService,private router:Router,private registerService:RegisterService) {
      this.userName()
      this.foodService.getRestaurants().subscribe({
        next:data=>{
          this.data=data.length+1
          console.log(this.data);
        }
      })
     }
  
   
  
     file!:File;
     onFileSelected(event:any){
        this.file=event.target.files[0];
        console.log(this.file)
     }

     isDishInvalid(index: number): boolean {
      if (this.restaurant.dishList && index >= 0 && index < this.restaurant.dishList.length) {
        const dish = this.restaurant.dishList[index];
        return !dish || !dish.dishName || !dish.dishType || !dish.dishCost;
      }
      return true; // Return true if the dishList is undefined or index is out of bounds
    }
   
     onUpload(){
        console.log("upload invoked")
       const imageFormData=new FormData();
       imageFormData.append('file',this.file,this.file.name)
       this.favoriteService.uploadImage(imageFormData).subscribe({
         next:data=>{
           alert("File successfully uploaded")
         },
         error:error=>{
           alert("File successfully uploaded")
         }
       })
     }
     onUpload1(){
      console.log("upload invoked")
      const imageFormData=new FormData();
      imageFormData.append('file',this.file,this.file.name)
      this.favoriteService.uploadImage1(imageFormData).subscribe({
        next:data=>{
          alert("File successfully uploaded")
        },
        error:error=>{
          alert("File successfully uploaded")
        }
      })
    }
  
     restaurant: Restaurants = {
      restaurantName: '',
      restaurantId: 0,
      location: '',
      cuisine: '',
      rating: 0,
      address: {
        area: '',
        state: '',
        zipCode: 0
      },
      restaurantImage: '', // Add restaurantImage property
      dishList: []
    };
  
    // constructor(private favoriteService: AdminService) {}
  
       // Check if restaurantName and restaurantImage are the same
      
       submitRestaurant() {
        // Check if restaurantName and restaurantImage are the same
        this.restaurant.restaurantId = this.data;
      
        // If they are the same, proceed with saving the restaurant
        this.favoriteService.save(this.restaurant).subscribe(
          {
            next: data => {
              this.mb.open('Successfully Added', '', {
                duration: 2000,
                panelClass: ['mat-toolbar', 'mat-primary']
              });
      
              // Reset the form after submission
              this.resetForm();
            },
            error: e => {
              this.mb.open('Successfully Added', '', {
                duration: 2000,
                panelClass: ['mat-toolbar', 'mat-primary']
              });
              this.resetForm();
            }
          }
        );
      }
      
      resetForm() {
        this.restaurant = {
          restaurantName: '',
          restaurantId: 0,
          location: '',
          cuisine: '',
          rating: 0,
          address: {
            area: '',
            state: '',
            zipCode: 0
          },
          restaurantImage: '',
          dishList: []
        };
      }
  
  
    onRestaurantImageSelected(event: any) {
      const file: File = event.target.files[0];
      this.restaurant.restaurantImage = URL.createObjectURL(file); // Store image URL
    }
  
    onDishImageSelected(event: any, index: number) {
      const file: File = event.target.files[0];
      if (this.restaurant.dishList && this.restaurant.dishList[index]) {
        this.restaurant.dishList[index].dishImage = URL.createObjectURL(file);
      }
    }
    addDish() {
      this.restaurant.dishList?.push({ dishName: '', dishType: '', dishCost: 0, dishImage: '' });
    }
  
    removeDish(index: number) {
      this.restaurant.dishList?.splice(index, 1);
    }

    // constructor(public authService:AuthService,private router:Router,private registerService:RegisterService){
      //   this.userName();
      //     }
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
 