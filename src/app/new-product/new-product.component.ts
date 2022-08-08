import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { ProductModel } from '../product-list/product.model';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  title:string= "Add NEw Product";
 productItem=new ProductModel (null, null,null,null,null,null,null,null);

  constructor(private pser:ProductserviceService) { }

  ngOnInit(): void {
  }

  addProduct(){
    console.log(this.productItem)

    this.pser.addNewProduct(this.productItem);

   
    console.log("add new product called");
    alert("success");
    // this.router.navigate(['\']);

  }

}
