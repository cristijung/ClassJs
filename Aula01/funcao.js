//Números primos
//Objetivo:
//1 - encontrar e mostrar todos os pares de primos gemeos até 200

function isPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function encontrarPrimosGemeos(N) {
    for (let i = 2; i <= N - 2; i++) {
        if (isPrimo(i) && isPrimo(i + 2)) {
            console.log(`(${i}, ${i + 2})`);
        }
    }
}
encontrarPrimosGemeos(200);

//------------------------------------------------------

function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

function verificarStatusAluno(notas) {
    const media = calcularMedia(notas);

    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5 && media < 7) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

const notasAlunos = [8, 7, 6];
const situacao = verificarStatusAluno(notasAlunos);
console.log(`O aluno está ${situacao}`);
