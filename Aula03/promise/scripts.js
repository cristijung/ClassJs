//exemplo 1

const tempo = (duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
};

tempo(4000).then(function () {
  console.log("apareceu depois de 4 segundos");
});

//-------------------
//exemplo 2
function minhaFuncao() {
    return new Promise((resolve, reject) => {
      
      const sucesso = true;
  
      if (sucesso) {        
        resolve("Operação bem-sucedida!");
      } else {            
        reject("Erro na operação");
      }
    });
  }
  
   minhaFuncao()
    .then((resultado) => {
      console.log(resultado); 
    })
    .catch((erro) => {
      console.error(erro); 
    });
