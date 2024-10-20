import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../mdels/product';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

 

  constructor(private http : HttpClient) { }

  // CRUD [ Create, Read, Update, Delete]
  // GET, POST, PUT, DELET (Read, Create, Update, Delete) => http methods or http verbs

  getAllProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.baseUrl}/products`)

  }

  getProductById(productId : number) : Observable<Product>{
    return this.http.get<Product>(`${environment.baseUrl}/products/${productId}`)
  }

  createProduct(newProduct : Product) : Observable<Product>{
   
    return this.http.post<Product>(`${environment.baseUrl}/products`, newProduct)
  }

  updateProduct(productId:number, modifiedProduct: Product): Observable<Product>{
    return this.http.put<Product>(`${environment.baseUrl}/products/${productId}`, modifiedProduct)
  }

  deleteProduct(productId : number) : Observable<Product>{
    return this.http.delete<Product>(`${environment.baseUrl}/products/${productId}`)
  }
}
