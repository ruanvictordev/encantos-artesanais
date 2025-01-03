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
    { id: 857, nome: "Boneca", tamanho: "24cm", tecido: "Algodão", categoria: "Bonecas", preco: 40.00, precodesconto: 30.00, imagem: "assets/images/products/boneca24cm40.png" },
    { id: 411, nome: "Boneca Bailarina", tamanho: "18cm", tecido: "Feltro", categoria: "Bonecas", preco: 15.00, imagem: "assets/images/products/boneca-bailarina-18cm-15.png" },
    { id: 712, nome: "Boneca", tamanho: "24cm", tecido: "Algodão", categoria: "Bonecas", preco: 40.00, precodesconto: 30.00, imagem: "assets/images/products/boneca24cm40(2).png" },
    { id: 623, nome: "Boneca", tamanho: "36cm", tecido: "Algodão", categoria: "Bonecas", preco: 50.00, imagem: "assets/images/products/boneca36cm50.png" },
    { id: 914, nome: "Boneca", tamanho: "36cm", tecido: "Algodão", categoria: "Bonecas", preco: 50.00, imagem: "assets/images/products/boneca36cm50(2).png" },
    { id: 733, nome: "Unicórnio", tamanho: "35cm", tecido: "Feltro", categoria: "Bonecas", preco: 35.00, imagem: "assets/images/products/boneca-unicornio-35cm-35.png" },
    { id: 381, nome: "Boneca", tamanho: "46cm", tecido: "Algodão", categoria: "Bonecas", preco: 60.00, imagem: "assets/images/products/boneca46cm60.png" },
    { id: 874, nome: "Boneco Luffy", tamanho: "33cm", tecido: "Feltro", categoria: "Bonecos", preco: 35.00, imagem: "assets/images/products/boneco-luffy-33cm.png" },
    { id: 100, nome: "Boneca Punk Breston", tamanho: "26cm", tecido: "Feltro", categoria: "Bonecas", preco: 20.00, imagem: "assets/images/products/boneca-punk-breston-26cm-20.png" },
    { id: 101, nome: "Boneca em Feltro", tamanho: "33cm", tecido: "Feltro", categoria: "Bonecas", preco: 35.00, imagem: "assets/images/products/boneca-33 cm-35.png" },
    { id: 498, nome: "Chaveirinho", tamanho: "7cm", tecido: "Algodão", categoria: "Chaveiros", preco: 5.00, imagem: "assets/images/products/chaveiro7cm5.png" },
    { id: 859, nome: "Boneca Princesa", tamanho: "33cm", tecido: "Feltro", categoria: "Bonecas", preco: 35.00, imagem: "assets/images/products/boneca-princesa-33cm-35.png" },
    { id: 685, nome: "Chaveirinho", tamanho: "7cm", tecido: "Algodão", categoria: "Chaveiros", preco: 5.00, imagem: "assets/images/products/chaveiro7cm5(2).png" },
    { id: 392, nome: "Chaveirinho", tamanho: "7cm", tecido: "Algodão", categoria: "Chaveiros", preco: 5.00, imagem: "assets/images/products/chaveiro7cm5(3).png" },
    { id: 701, nome: "Boneca Juliana", tamanho: "42cm", tecido: "Feltro", categoria: "Bonecas", preco: 70.00, imagem: "assets/images/products/boneca-juliana-42cm-70.png" },
    { id: 763, nome: "Chaveirinho", tamanho: "7cm", tecido: "Algodão", categoria: "Chaveiros", preco: 5.00, imagem: "assets/images/products/chaveiro7cm5(4).png" },
    { id: 641, nome: "Chaveirinho", tamanho: "7cm", tecido: "Algodão", categoria: "Chaveiros", preco: 5.00, imagem: "assets/images/products/chaveiro7cm5(5).png" },
    { id: 100, nome: "Ursinho em Tecido", tamanho: "32cm", tecido: "Feltro", categoria: "Bonecos", preco: 35.00, imagem: "assets/images/products/boneca-punk-breston-32cm-35.png" },
    { id: 130, nome: "Ursinho em Feltro", tamanho: "29cm", tecido: "Feltro", categoria: "Bonecos", preco: 35.00, imagem: "assets/images/products/ursinho-32cm-35.png" },
    { id: 521, nome: "Chaveirinho", tamanho: "13cm", tecido: "Algodão", categoria: "Chaveiros", preco: 10.00, imagem: "assets/images/products/chaveiro13cm10.png" },
    { id: 892, nome: "Chaveirinho", tamanho: "13cm", tecido: "Algodão", categoria: "Chaveiros", preco: 10.00, imagem: "assets/images/products/chaveiro13cm10(2).png" },
    { id: 768, nome: "Chaveirinho", tamanho: "13cm", tecido: "Algodão", categoria: "Chaveiros", preco: 10.00, imagem: "assets/images/products/chaveiro13cm10(3).png" },
    { id: 354, nome: "Boneca Bailarina", tamanho: "14cm", tecido: "Feltro", categoria: "Bonecas", preco: 15.00, imagem: "assets/images/products/boneca-bailarina-14cm-15.png" },
    { id: 495, nome: "Boneco Miguel", tamanho: "42cm", tecido: "Feltro", categoria: "Bonecos", preco: 70.00, imagem: "assets/images/products/boneco-miguel-42cm-70.png" }
];
