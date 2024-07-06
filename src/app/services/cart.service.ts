import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduto } from '../userpage/products-section/produtos';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<IProduto[]>([]);
  cartItems$ = this.cartItems.asObservable();

  addToCart(produto: IProduto) {
    const currentItems = this.cartItems.value;
    this.cartItems.next([...currentItems, produto]);
  }

  getCartItems() {
    return this.cartItems.asObservable();
  }

  clearCart() {
    this.cartItems.next([]);
  }
}
