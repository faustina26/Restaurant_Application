import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 
  
  
   private user_url:string ="http://localhost:9000/api/v3"
  constructor(private http:HttpClient) { }
  addUserData(data:any):Observable<any>{
    return this.http.post<any>(`${this.user_url}/savedata`,data);
  }
fetch():Observable<User[]>{
  return this.http.get<User[]>(`${this.user_url}/fetch`);
}

}
