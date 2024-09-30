import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }
  private baseUrl = "http://localhost:9000/api/v4";

  getRestaurants(): Observable<Restaurant[]> {
    const url = `${this.baseUrl}/getAll`;
    return this.http.get<Restaurant[]>(url);
  }

  getRestaurantById(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.baseUrl}/get/${id}`);
  }
  saveRestaurant(data:any):Observable<any>{
return this.http.post<any>(`${this.baseUrl}/save`,data);
  }
  
  getByName(name:any):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/get/one/${name}`)
  }
}
