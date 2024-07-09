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
    alert("Produto adicionado ao carrinho!");
  }

  getCartItems() {
    return this.cartItems.asObservable();
  }

  getTotalPrice(): number {
    return this.cartItems.value.reduce((total, item) => total + item.preco, 0);
  }

  clearCart() {
    this.cartItems.next([]);
  }

  getProductDetails(): string[] {
    return this.cartItems.value.map(item => `${item.nome} - R$ ${item.preco.toFixed(2)}`);
  }
}
