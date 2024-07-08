import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { IProduto } from './produtos';
import { CartService } from '../../services/cart.service';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-section',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.css']
})
export class ProductsSectionComponent implements OnInit {

  produtos: IProduto[] = [];
  displayedProducts: IProduto[] = [];
  itemsToShow = 6;
  currentIndex = 0;
  
  constructor(
    private produtosService: ProdutosService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.produtos = this.produtosService.getAll();
    this.displayedProducts = this.produtos.slice(0, this.itemsToShow);
  }

  addToCart(produto: IProduto) {
    this.cartService.addToCart(produto);
  }

  showMoreProducts() {
    this.currentIndex += this.itemsToShow;
    const newProducts = this.produtos.slice(this.currentIndex, this.currentIndex + this.itemsToShow);
    this.displayedProducts = [...this.displayedProducts, ...newProducts];
  }

  hasMoreProducts(): boolean {
    return this.currentIndex + this.itemsToShow < this.produtos.length;
  }
}
