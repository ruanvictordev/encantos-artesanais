import { Injectable } from '@angular/core';
import { IProduto, produtos } from '../userpage/products-section/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;

  constructor() { }

  getAll(): IProduto[] {
    return this.produtos;
  }

  getByCategory(category: string): IProduto[] {
    if (category === 'Todos') {
      return this.produtos;
    }
    return this.produtos.filter(produto => produto.categoria === category);
  }

  getOne(produtoId: number): IProduto | undefined {
    return this.produtos.find(produto => produto.id === produtoId);
  }
}
