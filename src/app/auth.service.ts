import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  userLogin(user:object){
    console.log("it is accessed"); 


    // const headers={'content-type':'application/json'}
    return this.http.post<any>('http://localhost:3000/login',{user});
  }
  loggedIn(){
    return !! localStorage.getItem('token')
  }
  getToken():any{
     return localStorage.getItem('token');

  }
}
