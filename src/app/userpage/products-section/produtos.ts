export interface IProduto {
    id: number,
    nome: string,
    tamanho: string,
    tecido: string,
    categoria: string;
    preco: number;
    precodesconto?: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, nome: "Boneca", tamanho: "24cm", tecido: "Algodão", categoria: "Bonecas", preco: 40.00, precodesconto: 30.00, imagem: "assets/images/products/boneca24cm40.png" },
    { id: 2, nome: "Boneca", tamanho: "24cm", tecido: "Algodão", categoria: "Bonecas", preco: 40.00, precodesconto: 30.00,imagem: "assets/images/products/boneca24cm40(2).png" },
    { id: 3, nome: "Boneca", tamanho: "36cm", tecido: "Algodão", categoria: "Bonecas", preco: 50.00, imagem: "assets/images/products/boneca36cm50.png" },
    { id: 4, nome: "Boneca", tamanho: "36cm", tecido: "Algodão", categoria: "Bonecas", preco: 50.00, imagem: "assets/images/products/boneca36cm50(2).png" },
    { id: 5, nome: "Boneca", tamanho: "46cm", tecido: "Algodão", categoria: "Bonecas", preco: 60.00, imagem: "assets/images/products/boneca46cm60.png" },
    { id: 6, nome: "Chaveirinho", tamanho: "7cm", tecido: "Algodão", categoria: "Chaveiros", preco: 5.00, imagem: "assets/images/products/chaveiro7cm5.png" },
    { id: 7, nome: "Chaveirinho", tamanho: "7cm", tecido: "Algodão", categoria: "Chaveiros", preco: 5.00, imagem: "assets/images/products/chaveiro7cm5(2).png" },
    { id: 8, nome: "Chaveirinho", tamanho: "7cm", tecido: "Algodão", categoria: "Chaveiros", preco: 5.00, imagem: "assets/images/products/chaveiro7cm5(3).png" },
    { id: 9, nome: "Chaveirinho", tamanho: "7cm", tecido: "Algodão", categoria: "Chaveiros", preco: 5.00, imagem: "assets/images/products/chaveiro7cm5(4).png" },
    { id: 10, nome: "Chaveirinho", tamanho: "7cm", tecido: "Algodão", categoria: "Chaveiros", preco: 5.00, imagem: "assets/images/products/chaveiro7cm5(5).png" },
    { id: 11, nome: "Chaveirinho", tamanho: "13cm", tecido: "Algodão", categoria: "Chaveiros", preco: 10.00, imagem: "assets/images/products/chaveiro13cm10.png" },
    { id: 12, nome: "Chaveirinho", tamanho: "13cm", tecido: "Algodão", categoria: "Chaveiros", preco: 10.00, imagem: "assets/images/products/chaveiro13cm10(2).png" },
    { id: 13, nome: "Chaveirinho", tamanho: "13cm", tecido: "Algodão", categoria: "Chaveiros", preco: 10.00, imagem: "assets/images/products/chaveiro13cm10(3).png" },
    { id: 14, nome: "Boneca Bailarina", tamanho: "14cm", tecido: "Feltro", categoria: "Bonecas", preco: 15.00, imagem: "assets/images/products/boneca-bailarina-14cm-15.png" },
    { id: 15, nome: "Boneca Bailarina", tamanho: "18cm", tecido: "Feltro", categoria: "Bonecas", preco: 15.00, imagem: "assets/images/products/boneca-bailarina-18cm-15.png" },
    { id: 16, nome: "Boneca Juliana", tamanho: "42cm", tecido: "Feltro", categoria: "Bonecas", preco: 70.00, imagem: "assets/images/products/boneca-juliana-42cm-70.png" },
    { id: 17, nome: "Boneca Princesa", tamanho: "33cm", tecido: "Feltro", categoria: "Bonecas", preco: 35.00, imagem: "assets/images/products/boneca-princesa-33cm-35.png" },
    { id: 18, nome: "Boneca Unicórnio", tamanho: "35cm", tecido: "Feltro", categoria: "Bonecas", preco: 35.00, imagem: "assets/images/products/boneca-unicornio-35cm-35.png" },
    { id: 19, nome: "Boneco Luffy", tamanho: "33cm", tecido: "Feltro", categoria: "Bonecos", preco: 35.00, imagem: "assets/images/products/boneco-luffy-33cm.png" },
    { id: 20, nome: "Boneco Miguel", tamanho: "42cm", tecido: "Feltro", categoria: "Bonecos", preco: 70.00, imagem: "assets/images/products/boneco-miguel-42cm-70.png" }
];