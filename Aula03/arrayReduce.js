//reduce

const salaJs = [6, 7, 8, 4, 10, 2];
const salaJava = [3, 10, 9, 9, 2, 4];
const salaReact = [5, 2, 10, 3];

function calcMedia(mediaDeSala) {
    const somaDasNotas = mediaDeSala.reduce((acumulado, nota, index) => acumulado + nota, 0);
    const medias = somaDasNotas / mediaDeSala.length;
    return medias
}

console.log(`A média da sala de Js é: ${calcMedia(salaJs)}`);
console.log(`A média da sala de Java é: ${calcMedia(salaJava)}`);
console.log(`A média da sala de React é: ${calcMedia(salaReact)}`);

//concat
const meninos = ['Pafúncio', 'Jorge', 'Marcelo', 'Jorge'];
const meninas = ['Ana', 'Bia', 'Lia'];
const lista = meninos.concat(meninas);
console.log(lista);

//reduce segunda forma com + 1 parâmetro (3)
const calcularMedia = (acumulador, valor, index, arr) => {
    if (index === arr.length - 1) {
      acumulador = acumulador / arr.length;
    } else {
      acumulador += valor;
    }
    return acumulador;
  };
  
  const salaJavaScript = [6, 7, 8, 9, 10, 4];
  const salaJavas = [3, 10, 9, 9, 10, 8];
  const salaReacts = [5, 10, 8, 3];
  
  const mediaSalaJavaScript = salaJavaScript.reduce(calcularMedia, 0, 0);
  const mediaSalaJavas = salaJavas.reduce(calcularMedia, 0, 0);
  const mediaSalaReacts = salaReacts.reduce(calcularMedia, 0, 0);
  
  console.log("Média da sala de JS:", mediaSalaJavaScript);
  console.log("Média da sala de Java:", mediaSalaJavas);
  console.log("Média da sala de React:", mediaSalaReacts);

//set
//para remover elementos duplicados
const guris = ['Pafúncio', 'Jorge', 'Marcelo', 'Jorge'];
const gurias = ['Ana', 'Bia', 'Lia'];
const listas = meninos.concat(meninas);

const listaSemDuplicado = Array.from(new Set(listas));
console.log(listaSemDuplicado);