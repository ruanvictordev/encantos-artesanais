import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';
import { CartService } from '../../services/cart.service';
import { ProdutosService } from '../../services/produtos.service';
import { CartPopupComponent } from "../cart-popup/cart-popup.component"; 
import { IProduto } from '../products-section/produtos';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [CommonModule, CartPopupComponent]
})
export class HeaderComponent implements OnInit{
  constructor(private scrollService: ScrollService, private cartService: CartService) {}

  cartItems: IProduto[] = [];
  totalPrice: number = 0;
  
  scrollTo(section: string): void {
    this.scrollService.scrollTo(section);
  }

  isPopupVisible = false;

  showPopup() {
    this.isPopupVisible = true;
  }

  hidePopup() {
    this.isPopupVisible = false;
  }

  clearCart() {
    this.cartService.clearCart();
  }

  sendMessage() {
    if (this.cartItems.length > 0) {
      const productDetails = this.cartService.getProductDetails();
      const message = `Olá, tenho interesse nos produtos: ${productDetails.join(', ')} do site. Estão disponíveis?`;
      const whatsappUrl = `https://wa.me/5586998436269?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      alert("Adicione produtos no carrinho!");
    }
  }

  ngOnInit() {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    }); 
  }
}
