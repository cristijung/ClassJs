
//exemplo simplificado
//uso de temporizadores

function operacaoAssincrona(tempo, callback) {
    console.log("Iniciando operação assíncrona ..........");
    setTimeout(function() {
        console.log(`Operação assíncrona concluída após ${tempo} milissegundos`);
        callback();
    }, tempo)
}

function buscaCallBack() {
    console.log("Callback executado! Operação concluída");

}

operacaoAssincrona(5000, buscaCallBack);

function ola() {
    console.log("Olá mundo ....");
}

setTimeout(ola, 3000);

//trabalhando com Date e temporizadores - setInterval, setTimeOut e clearInterval
function mostrarHora() {
    const agora = new Date();
    console.log(`Hora atual: ${agora.toLocaleTimeString()}`);    
}

const intervalo = setInterval(mostrarHora, 2000);

setTimeout(() => {
    clearInterval(intervalo);
    console.log("Hora parada");
}, 10000);