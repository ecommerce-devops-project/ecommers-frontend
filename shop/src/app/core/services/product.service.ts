import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProducts(){
    return[
      { id: 1, name: 'Laptop', price: 50000, image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Mobile', price: 20000, image: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Headphones', price: 3000, image: 'https://via.placeholder.com/150' }
    ];
  }
}
