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
    return this.cartItems.value.reduce((total, item) => {
      // Adiciona o preço de desconto, se existir, ou o preço normal
      const price = item.precodesconto ? item.precodesconto : item.preco;
      return total + price;
    }, 0);
  }

  clearCart() {
    this.cartItems.next([]);
  }

  getProductDetails(): string[] {
    return this.cartItems.value.map(item => {
      const price = item.precodesconto ? item.precodesconto : item.preco;
      return `${item.nome} - R$ ${price.toFixed(2)}`;
    });
  }
}
