import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule,HttpHeaders } from '@angular/common/http';
import { ProductModel } from './product-list/product.model';
import { json } from 'body-parser';


@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient ) { 

  }
   getProducts(){
     return this.http.get("http://localhost:3000/product");
   }

   addNewProduct(productItem: object){

   
    // console.log(productItem);
    console.log("it is accessed"); 


  const headers={'content-type':'application/json'}
  
  
   return this.http.post("http://localhost:3000/product",{productItem})
   .subscribe((data)=>{ 
    console.log( (data))})
    
   }
}
