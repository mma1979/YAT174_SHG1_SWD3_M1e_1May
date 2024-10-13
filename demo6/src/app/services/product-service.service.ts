import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../mdels/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  baseUrl = 'https://localhost:44391'

  constructor(private http : HttpClient) { }

  // CRUD [ Create, Read, Update, Delete]
  // GET, POST, PUT, DELET (Read, Create, Update, Delete) => http methods or http verbs

  getAllProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`)

  }

  getProductById(productId : number) : Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/products/${productId}`)
  }

  createProduct(newProduct : Product) : Observable<Product>{
    return this.http.post<Product>(`${this.baseUrl}/products`, newProduct)
  }

  updateProduct(productId:number, modifiedProduct: Product): Observable<Product>{
    return this.http.put<Product>(`${this.baseUrl}/products/${productId}`, modifiedProduct)
  }

  deleteProduct(productId : number) : Observable<Product>{
    return this.http.delete<Product>(`${this.baseUrl}/products/${productId}`)
  }
}
