import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  product!: Product;
  constructor(private productService:ProductsService) { 
    this.product = {}
  }

  ngOnInit(): void {
  }

  getProducts() {
    this.productService.retrieveAllExperts().subscribe(
      (data) => {
      console.log(data)
      },
      (error) => {}
      );       
  }

  addProduct(){

    this.productService.createProduct(this.product).subscribe(
      (data) => {
      console.log(data)
      },
      (error) => {}
      );       

  }
}
