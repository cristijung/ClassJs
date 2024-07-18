//filter

const alunos = ['Ana', 'Bia', 'Caio', 'Teo', 'Lisa'];
const medias = [7, 5, 4, 9, 10];

const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] < 7;
});

console.log(reprovados);