import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cartKey = 'cartItems';

  // ✅ Check browser
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  getCartItems(): any[] {
    if (!this.isBrowser()) return [];

    const data = localStorage.getItem(this.cartKey);
    return data ? JSON.parse(data) : [];
  }

  private saveCart(items: any[]) {
    if (!this.isBrowser()) return;

    localStorage.setItem(this.cartKey, JSON.stringify(items));
  }

  addToCart(product: any) {
    const items = this.getCartItems();
    items.push(product);
    this.saveCart(items);
  }

  removeFromCart(index: number) {
    const items = this.getCartItems();
    items.splice(index, 1);
    this.saveCart(items);
  }

  getCartCount(): number {
    return this.getCartItems().length;
  }

  clearCart() {
    if (!this.isBrowser()) return;
    localStorage.removeItem(this.cartKey);
  }
}
