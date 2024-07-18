//exemplo de mercadorias

const listMercadorias = [
    { item: "TV", preco: 5000, cor: "Preto" },
    { item: "Sofá", preco: 7899.99, cor: "Preto"  },
    { item: "Geladeira", preco: 1200, cor: "Preto"  },
    { item: "Computador", preco: 7563.99, cor: "Preto"  },
    { item: "Poltrona", preco: 1325, cor: "Preto"  }
];

const mostrarMerdacorias = listMercadorias.map(mercadorias);
function mercadorias(elemento) {
    return{
        item: elemento.item,
        preco: elemento.preco,
    };
}

console.log(mostrarMerdacorias);

const mercadoriasComDesconto = listMercadorias.map(aplicarDesconto);
function aplicarDesconto(elemento) {
    return {
        item: elemento.item,
        preco: elemento.preco - elemento.preco * 0.5,
    }; 
}

mercadoriasComDesconto.forEach((elemento) => {
    console.log(
        `O preço da mercadoria é: ${elemento.item} com desconto é: ${elemento.preco.toLocaleString("pt-br", {style: "currency", currency: "BRL",})}`
    );
});