import { Component } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { IProduto } from './produtos';
import { CartService } from '../../services/cart.service';
import {NgFor} from '@angular/common';


@Component({
  selector: 'app-products-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './products-section.component.html',
  styleUrl: './products-section.component.css'
})
export class ProductsSectionComponent {

  produtos: IProduto[] | undefined;
  
  constructor(
    private produtosService: ProdutosService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.produtos = this.produtosService.getAll();
  }

  addToCart(produto: IProduto) {
    this.cartService.addToCart(produto);
  }
}
