export interface IProduto {
    id: number,
    nome: string,
    tamanho: string,
    tecido: string,
    categoria: string;
    preco: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, nome: "Boneca de pano", tamanho: "24cm", tecido: "Algodão", categoria: "Boneca", preco: 40.00, imagem: "assets/images/products/boneca24cm40.png" },
    { id: 2, nome: "Boneca de pano", tamanho: "24cm", tecido: "Algodão", categoria: "Boneca", preco: 40.00, imagem: "assets/images/products/boneca24cm40(2).png" },
    { id: 3, nome: "Boneca de pano", tamanho: "36cm", tecido: "Algodão", categoria: "Boneca", preco: 50.00, imagem: "assets/images/products/boneca36cm50.png" },
    { id: 4, nome: "Boneca de pano", tamanho: "36cm", tecido: "Algodão", categoria: "Boneca", preco: 50.00, imagem: "assets/images/products/boneca36cm50(2).png" },
    { id: 5, nome: "Boneca de pano", tamanho: "46cm", tecido: "Algodão", categoria: "Boneca", preco: 60.00, imagem: "assets/images/products/boneca46cm60.png" },
    { id: 6, nome: "Chaveirinho", tamanho: "7cm", tecido: "Algodão", categoria: "Chaveiro", preco: 5.00, imagem: "assets/images/products/chaveiro7cm5.png" },
    { id: 7, nome: "Chaveirinho", tamanho: "7cm", tecido: "Algodão", categoria: "Chaveiro", preco: 5.00, imagem: "assets/images/products/chaveiro7cm5(2).png" },
    { id: 8, nome: "Chaveirinho", tamanho: "7cm", tecido: "Algodão", categoria: "Chaveiro", preco: 5.00, imagem: "assets/images/products/chaveiro7cm5(3).png" },
    { id: 9, nome: "Chaveirinho", tamanho: "7cm", tecido: "Algodão", categoria: "Chaveiro", preco: 5.00, imagem: "assets/images/products/chaveiro7cm5(4).png" },
    { id: 10, nome: "Chaveirinho", tamanho: "7cm", tecido: "Algodão", categoria: "Chaveiro", preco: 5.00, imagem: "assets/images/products/chaveiro7cm5(5).png" },
    { id: 11, nome: "Chaveirinho", tamanho: "13cm", tecido: "Algodão", categoria: "Chaveiro", preco: 10.00, imagem: "assets/images/products/chaveiro13cm10.png" },
    { id: 12, nome: "Chaveirinho", tamanho: "13cm", tecido: "Algodão", categoria: "Chaveiro", preco: 10.00, imagem: "assets/images/products/chaveiro13cm10(2).png" },
    { id: 13, nome: "Chaveirinho", tamanho: "13cm", tecido: "Algodão", categoria: "Chaveiro", preco: 10.00, imagem: "assets/images/products/chaveiro13cm10(3).png" },

]