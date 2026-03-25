import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiurl = 'http://localhost:3000/api/products'

  constructor(private http:HttpClient) { }

  getProducts(): Observable<any>{
    return this.http.get(this.apiurl);
  }
  addProduct(product:any){
    return this.http.post(this.apiurl, product);
  }
}
