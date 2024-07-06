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

  ngOnInit() {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    }); 
  }
}
