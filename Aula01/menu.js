function calcularTotal(item, quantidade) {
  let preco;

  switch (item) {
    case "1":
      preco = 10;
      break;
    case "2":
      preco = 15;
      break;
    case "3":
      preco = 12;
      break;
    case "4":
      preco = 78;
      break;
    default:
      console.log("Opção Inválida");
      return 0;
  }
  return preco * quantidade;
}

//array de objetos dos itens do menu
let menu = [
  { id: "1", nome: "Hamburguer", preco: 10 },
  { id: "2", nome: "Pizza", preco: 15 },
  { id: "3", nome: "Salada", preco: 12 },
  { id: "4", nome: "Vinho", preco: 78 },
];

//função para mostra o menu
function mostrarMenu() {
  console.log("Menu do restaurante:");
  menu.forEach((item) => {
    console.log(`${item.id}: ${item.nome} - R$ ${item.preco}`);
  });
}

//função para o pedido
function fazerPedido(itemId, quantidade) {
  let total = calcularTotal(itemId, quantidade);
  if (total > 0) {
    console.log(`Total a pagar: R$ ${total}`);
  }
}

//chamar a exibição do menu
mostrarMenu();

//simulação
let itemSelecionado = "4";
let quantidadeSelecionada = 3;
fazerPedido(itemSelecionado, quantidadeSelecionada);
