import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DisplayService {

  constructor(private http:HttpClient) { }
  urlImage:string="http://localhost:8011/api/v2"

  uploadImage(file:any):Observable<any>{
    console.log("inside upload service")
    return this.http.post<File>(`${this.urlImage}/upload`,file)
  }
  uploadImage1(file:any):Observable<any>{
    console.log("inside upload service")
    return this.http.post<File>(`${this.urlImage}/upload1`,file)
  }
  private baseUrl = "http://localhost:9000/api/v7";
save(data:any):Observable<any>{
  return this.http.post<any>(`${this.baseUrl}/save`,data);
}

getAll():Observable<any>{
  return this.http.get<any>(`${this.baseUrl}/getAll`);
}
deleteitem(data:any):Observable<any>{
  return this.http.delete<any>(`${this.baseUrl}/delete/${data}`,data);
}

}
