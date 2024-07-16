//tipos primitivos
//Tpo String

const text1 = "Oi";
const text2 = 'Oi';
const text3 = '45.89';
const text4 = 'Ana Banana trouxe uma fruta!';

//concatenando
const nome = 'Pafúncio';
const sobrenome = 'Silva';
const idade = 24;
const dados = ("Nome: " + nome + sobrenome + " e tem " + idade + "anos");
const info = `Nome ${nome} com o sobrenome de ${sobrenome}`;
console.log(dados);
console.log(info);

//template string
let a = 5;
let b = 10;
console.log(`O valor é: ${a + b} e não ${2 * a + b}!!`);

