//ex 1 - destacar texto
function destacarTexto() {
    let elemento = document.getElementById('paragrafo');
    elemento.classList.toggle('destacado');
}

//ex 2 - contador
let count = 0;

function incrementarUm() {
    atualizar(++count);
}

function resetarCount() {
    count = 0;
    atualizar(count);
}

function atualizar(count) {
    document.getElementById('trocar').innerText = count;
}