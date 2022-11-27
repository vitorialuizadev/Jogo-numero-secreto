function verificaseochutepossuiumvalorvalido(chute){
   const numero = +chute;

   if(chuteForInvalido(numero)){
        elementoChute.innerHTML +='<div>Valor inválido</div>';
        return;
   }

   if(numeroformaioroumenorqueovalorpermitido(numero)){
    
    elementoChute.innerHTML +=`<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
    return;
   }

   if(numero === numeroSecreto){
    document.body.innerHTML =`
        <h1>Você acertou!</h1>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `
   }else if( numero > numeroSecreto){
    elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
     `
   }else{
    elementoChute.innerHTML += `
    <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>
    `
   }
}

    function chuteForInvalido(numero){
        return Number.isNaN(numero);
    }

    function numeroformaioroumenorqueovalorpermitido(numero){
        return numero > maiorValor || numero < menorValor;
    }

    document.body.addEventListener('click', e => {
        if(e.target.id == 'jogar-novamente'){
            window.location.reload();
        }
    })
       
    