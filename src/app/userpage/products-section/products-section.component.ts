import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { IProduto } from './produtos';
import { CartService } from '../../services/cart.service';
import { NgFor, NgClass, CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-section',
  standalone: true,
  imports: [NgFor, NgClass, CommonModule],
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.css']
})
export class ProductsSectionComponent implements OnInit {

  produtos: IProduto[] = [];
  displayedProducts: IProduto[] = [];
  itemsToShow = 6;
  currentIndex = 0;
  selectedCategory: string = 'Todos';
  
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

  filterProducts(category: string) {
    this.selectedCategory = category;
    this.currentIndex = 0;
    if (category === 'Todos') {
      this.displayedProducts = this.produtos.slice(0, this.itemsToShow);
    } else {
      const filtered = this.produtos.filter(produto => produto.categoria === category);
      this.displayedProducts = filtered.slice(0, this.itemsToShow);
    }
  }

  hasMoreProducts(): boolean {
    return this.currentIndex + this.itemsToShow < this.produtos.length;
  }
}
