import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  title:string= 'Product List'
  products:ProductModel[]=[];

  imageWidth: number=50;
  imageMargin: number=2;
  constructor( private pList:ProductserviceService) { 

    

  }

  ngOnInit(): void {
    
    this.pList.getProducts().subscribe((Data) => {
      this.products=JSON.parse(JSON.stringify(Data));

    })

    }



 
    
  }


