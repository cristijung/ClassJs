//via cep
const cep = document.querySelector('#buscar-cep')

const showData = (result) => {
    for(const campo in result) {
        if(document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = result[campo]
        }
    }
}

cep.addEventListener('blur', (e) => {
    let search = cep.value.replace('-', '')
    const options = {
        method: 'GET',
        mode: 'cors', //mecanismo usado para compartilhamento entre navegadores os recursos que estão sendo usados neste pesquisa
        cache: 'default'
    }


fetch(`https://viacep.com.br/ws/${search}/json/`, options)
.then(response => { response.json()
    .then( data => showData(data))    
})
.catch(e => console.log('Erro na busca do CEP: ' + e,message))
})

