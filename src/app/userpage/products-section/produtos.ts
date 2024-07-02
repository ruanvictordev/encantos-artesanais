export interface IProduto {
    id: number;
    nome: string,
    tamanho: string,
    tecido: string,
    descricao: string;
    preco: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, nome: "Boneca de pano", tamanho: "30cm", tecido: "Algodão", descricao: "Boneca bonita", preco: 39.00, imagem: "assets/images/products/p1.png" },
    { id: 2, nome: "Chaveiro de Boneca", tamanho: "30cm", tecido: "Algodão", descricao: "Boneca bonita", preco: 39.00, imagem: "assets/images/products/p2.png" },
    { id: 3, nome: "Bolsa de boneca", tamanho: "30cm", tecido: "Algodão", descricao: "Boneca bonita", preco: 39.00, imagem: "assets/images/products/p3.png" },
    { id: 4, nome: "Bebê boneca", tamanho: "30cm", tecido: "Algodão", descricao: "Boneca bonita", preco: 39.00, imagem: "assets/images/products/p4.png" },
    { id: 5, nome: "Luffy", tamanho: "30cm", tecido: "Algodão", descricao: "Boneca bonita", preco: 39.00, imagem: "assets/images/products/p4.png" },
]