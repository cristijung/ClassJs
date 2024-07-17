// //Exemplos do arquivo index2.html
// //Eventos

const btn = document.getElementById('cor');
function gerarNumAleatorio(numero) {
    return Math.floor(Math.random() * (numero + 1));
}

btn.addEventListener('click', () => {
     const corAleatoria = `rgb(${gerarNumAleatorio(255)}, ${gerarNumAleatorio(255)}, ${gerarNumAleatorio(255)})`;
     document.body.style.backgroundColor = corAleatoria;

});
