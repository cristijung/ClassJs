//quanto aos tipos no Js

//inicialização da var
var altura = 6;
var comprimento = 22;
area = altura * comprimento;
var area;

console.log(area);

//inicialização da let
//precisa sempre ser incicializada antes
//usamos a técnica hoisting
let areas;
let alturas = 6;
let comprimentos = 22;
areas = alturas * comprimentos;

console.log(areas);

//usando uma const
const forma = "quadrado";
const alturaDois = 8;
const comprimentoDois = 14;
let areaDois;

if (forma === 'quadrados') {
    areaDois = alturaDois * comprimentoDois;
} else {
    areaDois = (alturaDois * comprimentoDois) /2;
}

console.log(areaDois);


