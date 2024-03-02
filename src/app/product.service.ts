import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from './types/product';

// injectable token
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpClient = inject(HttpClient);
  constructor() { }

  getProducts(){
    return this.httpClient.get<Product[]>("http://localhost:3000/products")
  }
  getProductById(id:number){
    return this.httpClient.get<Product>("http://localhost:3000/products/"+id)

  }
  addProduct(product : Product){
    return this.httpClient.post<Product>("http://localhost:3000/products/",product)
  }
}
