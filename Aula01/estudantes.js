//exemplo de gestão de lista de estudante

//lista de alunos
let estudantes = [
  { nome: "Ana Banana", notas: [8, 6, 9] },
  { nome: "Bruno", notas: [8.5, 4, 5.8] },
  { nome: "Pafúncio", notas: [9, 2.3, 7] },
  { nome: "Marisa", notas: [7, 5, 9] },
];

//função para calcular a média das notas
function calcularMedia(notas) {
  let soma = notas.reduce((acc, notas) => acc + notas, 0);
  return soma / notas.length;
}

//função para exibir as médias
function mostrarMedias(estudantes) {
  estudantes.forEach((estudantes) => {
    let media = calcularMedia(estudantes.notas);
    console.log(`${estudantes.nome}: Média = ${media.toFixed(2)}`);
  });
}

//função para add estudante
function addEstudante(nome, notas) {
  estudantes.push({ nome: nome, notas: notas });
}

//função para localizar estudante
function localizarEstudante(nome) {
  return estudantes.find((estudantes) => estudantes.nome === nome);
}

//mostrar a média dos estudantes
mostrarMedias(estudantes);

//adicionando um novo estudante
addEstudante("Marcela", [4.5, 8, 10]);

console.log("\nLista de estudantes atualizada: ");
mostrarMedias(estudantes);

//encontrar um estudante pelo nome e mostrar suas notas
let estudante = localizarEstudante("Marcela");
if (estudante) {  
  console.log(`\nNotas de ${estudante.nome}: ${estudante.notas.join(', ')}`);
} else {
  console.log("Estudante não encontrado");
}
