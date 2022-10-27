import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl: string = 'https://fakestoreapi.com/products';

  constructor(private httpClient: HttpClient) {}

  retrieveAllExperts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl);
  }

  createProduct(product: Product): Observable<Product>{
    return this.httpClient.post<Product>(this.baseUrl, product);
    } 
}
