import { Injectable } from '@angular/core';
import { IProduto, produtos } from '../userpage/products-section/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;

  constructor() { }

  getAll() {
    return this.produtos;
  }

  getOne(produtoId: number) {
    return this.produtos.find(produto => produto.id === produtoId);
  }
}