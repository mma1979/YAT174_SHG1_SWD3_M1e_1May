import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosClientService {

  constructor(private http :  HttpClient) { }

  getAll(){
    return this.http.get<any[]>('https://octaprimetech.com/products');
  }
}
