import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from '../models/login';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

   private login_url = "http://localhost:9000/api/v1/login";
   constructor(private http: HttpClient) { 
   this.islogin();
   }


  login(user: any): Observable<any> {

    this.isAuthenticated = true; 
    return this.http.post<any>(this.login_url, user);
  }
isLoggedStatus: boolean = false;

  islogin(){
    if(localStorage.getItem('token')!==null){
      return this.isLoggedStatus=true;
    }
    else {
      return this.isLoggedStatus;
    }
  }



  islogout(){
    console.log("called logout")
    console.log(localStorage.getItem('token'))
    if(localStorage.getItem('token')==null){
       this.isLoggedStatus=false;
    }
    

    return this.isLoggedStatus

  }
  private isAuthenticated: boolean = false;

logIn(username: string, password: string): boolean {
    // Replace this with your actual authentication logic
    if (username === 'Rameshwari' && password === 'Rameshwari@123') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

}