import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Dish } from '../models/Dish';
import { CartService } from '../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FoodService } from '../services/food.service';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

declare var Razorpay:any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit
 {

  dish:Dish[]=[];

  empty:boolean=false;

  constructor(private cartService:CartService,private mb:MatSnackBar,private foodservice:FoodService,public authService:AuthService,private router:Router
    ,private registerService:RegisterService){
      this.userName();
   
    }
  ngOnInit(): void {
    debugger;
   this.cartService.getUserListOfResturant().subscribe(
    (data: any)=>{
      this.dish=data;
      console.log(data); 
    },
    error=> {
      alert("Enter From API");
      // console.log("error From API") 
    }
   )
  
  }


  deleteCart(dishName: string | undefined) {
    console.log(dishName)
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
 
 increaseQuantity(dish: any) {
  dish.quantity += 1;
}

decreaseQuantity(dish: any) {
  if (dish.quantity > 1) {
    dish.quantity -= 1;
  }
}
totalCost(dishCost: number | undefined, quantity: number | undefined): number {
  // Check if either dishCost or quantity is undefined
  if (typeof dishCost === 'number' && typeof quantity === 'number') {
    // Both values are numbers, perform the calculation
    return dishCost * quantity;
  } else {
    // Either dishCost or quantity is undefined, return a default value
    return 0; // or any other default value you prefer
  }
}
getTotalAmount(): number {
  let total = 0;
  for (const d of this.dish) {
    total += this.totalCost(d.dishCost, d.quantity);
  }
  return total;
}

getdisAmt():number{
  let total = 0;
  for (const d of this.dish) {
    total += this.totalCost(d.dishCost, d.quantity);
  }

  // Calculate the discount amount
  

  return Math.round(total*(10/100));
}

totAmt=0;

getDiscountAmt(): number {
 
  // Calculate the total amount
  let total = 0;
  for (const d of this.dish) {
    total += this.totalCost(d.dishCost, d.quantity);
  }

  // Calculate the discount amount
  let disamt=Math.round( total-total*(10/100));
  
 ;
this.totAmt=Math.round(disamt) 
  return Math.round(disamt) ;
}

// ------------------------------
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


// -------------------------
paynow(){
// this.pay()
const RazorpayOptions={
  description:'Sample Razorpay Demo',
  currency:'INR',
  amount:`${this.totAmt}00` ,
  name:'Bite Bliss',
  key:'rzp_test_XbLxBIyg2Frxf7',
  image:'../../assets/Logo/logo1-removebg.png',
  prefill:{
    name:'Balaji',
    email:'balajieduca@gmail.com',
    phone:'7871231653'
  },
  theme:{
    color:''
  },
  modal:{
    ondismiss:()=>{
      console.log('dismissed');
    }
  }
}
const successCallback=(paymentId:any)=>{
  console.log(paymentId);
  this.router.navigate(['/order']);
}
// const successCallback="Successfully paid"
const failureCallback=(e:any)=>{
  console.log(e);
}
Razorpay.open(RazorpayOptions,successCallback,failureCallback);



}
pay(){
    console.log("successfull paid")
}
}
 
