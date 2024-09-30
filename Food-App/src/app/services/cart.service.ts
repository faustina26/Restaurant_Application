import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dish } from '../models/Dish';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  private url:string="http://localhost:9000/api/v2/user"


  getUserListOfResturant():Observable<Dish[]>{              // ngOnInit of fav component   
    return this.http.get<Dish[]>(`${this.url}/dish`)
  }
  
  addToCartOfDish(data:any):Observable<Dish>
{
  return this.http.post<Dish>(`${this.url}/save`,data);
}
deleteCart(dishName: string): Observable<any> {
  const cart_url = `http://localhost:9000/api/v2/user/${dishName}`; // Replace 'api' with your base URL if needed
  return this.http.delete<any>(cart_url);
}
}
