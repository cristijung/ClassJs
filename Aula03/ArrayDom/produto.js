
const produtos = [
    { id: 1, nome: "Caderno", preco: 50, disponivel: true},
    { id: 2, nome: "Agenda", preco: 150, disponivel: true},
    { id: 3, nome: "Livro A", preco: 250, disponivel: false},
    { id: 4, nome: "Caneta", preco: 25, disponivel: true},
    { id: 5, nome: "Lápis", preco: 5, disponivel: false},
    { id: 6, nome: "Borracha", preco: 0.5, disponivel: false},
    { id: 7, nome: "Apontador", preco: 1, disponivel: true}
];

//função para renderizar os produtos
//manipulando o DOM com inserção de nó na hierarquia do DOM
function renderizarProdutos(produtos) {
    const produtosDiv = document.getElementById("produtos");
    produtosDiv.innerHTML = "";
    produtos.map(produto => {
        const produtoDiv = document.createElement("div");
        produtoDiv.classList.add("produto", "col-12", "col-md-6", "col-lg-4");
        produtoDiv.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${produto.nome}</h5>
                    <p class="card-text">Preço: ${produto.preco.toFixed(2)}</p>
                    <p class="card-text">Disponível: ${produto.disponivel ? "Sim" : "Não"}</p>
                </div>
            </div>
        `;
        produtosDiv.appendChild(produtoDiv);
    });
}

//função p mostrar todos os produtos
function mostrarTodosProdutos() {
    renderizarProdutos(produtos);
}

//função p mostrar só os disponíveis
function mostrarProdutosDisponiveis() {
    const produtosDisponiveis = produtos.filter(produto => produto.disponivel);
    renderizarProdutos(produtosDisponiveis);
}

//add os eventos listener aos btns
document.getElementById("mostrarTodos").addEventListener("click", mostrarTodosProdutos);
document.getElementById("mostrarDisponiveis").addEventListener("click", mostrarProdutosDisponiveis);

mostrarTodosProdutos();