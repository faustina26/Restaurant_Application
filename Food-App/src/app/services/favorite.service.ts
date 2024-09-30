import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http:HttpClient) { }
  private fav_url:string="http://localhost:9000/api/v5/user";

  getFav():Observable<any>{
    return this.http.get<any>(`${this.fav_url}/dish`);
  }
  addFav(data:any):Observable<any>{
    return this.http.post<any>(`${this.fav_url}/save`,data)
  }
  delete(dishName:any):Observable<any>{
    return this.http.delete<any>(`${this.fav_url}/${dishName}`);
  }
 
}
