import { Component } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
products: any[] = [];
constructor(private productService: ProductService) {}

ngOnInit(): void{
  this.products = this.productService.getProducts();
}
}
