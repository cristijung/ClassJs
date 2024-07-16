//tipos primitivos
//tipos boolean
//valores comparativos e implícitos

//retorno boleano
const numUm = 2;
const numDois = "2";
console.log(numUm === numDois);

//método nativo do String
const cidade = "Porto Alegre";
const municipio = "PORTO ALEGRE";
const maiusculo = cidade.toUpperCase();
console.log(cidade === maiusculo);
console.log(maiusculo === municipio);

const numero = 456;
const numeroTexto = "456";
console.log(numero + numeroTexto);
console.log(numero + Number(numeroTexto));

