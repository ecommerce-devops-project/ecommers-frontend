import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../core/services/product.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterOutlet],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
product = {
    name: '',
    price: '',
    image: ''
  };

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  onSubmit() {
    this.productService.addProduct(this.product).subscribe({
      next: () => {
        alert('Product Added Successfully');
        this.router.navigate(['/products']); // ✅ redirect
      },
      error: () => {
        alert('Error adding product');
      }
    });
  }
}
