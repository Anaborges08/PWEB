function analisarCarrinho(carrinho) {
    let valorTotal = 0;
    let maisCaro = carrinho[0];
    let maisBarato = carrinho[0];

    for (let item of carrinho) {
        valorTotal += item.preco * item.quantidade;

        if (item.preco > maisCaro.preco) {
            maisCaro = item;
        }

        if (item.preco < maisBarato.preco) {
            maisBarato = item;
        }
    }

    return {
        totalCompra: valorTotal.toFixed(2),
        produtoMaisCaro: maisCaro.nome,
        produtoMaisBarato: maisBarato.nome
    };
}

const carrinho = [
    { nome: "Notebook", preco: 2500, quantidade: 1 },
    { nome: "Mouse", preco: 80, quantidade: 2 },
    { nome: "Teclado", preco: 120, quantidade: 1 }
];

console.log(analisarCarrinho(carrinho));
