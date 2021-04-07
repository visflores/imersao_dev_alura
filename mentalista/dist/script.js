var numeroSecreto = parseInt(Math.random() * 10);
var tempoDeResolucao = setInterval(desenhaBoneco, 3000);
var tentativas = 5;

// Bloco de código para desenhar o demogorgon
//
var barra = "-";
var boneco = "&#127939";

// Função para desenhar o bonequinho na tela
function desenhaBoneco(){
  document.getElementById("boneco").value = "";
  
  boneco = boneco + barra;
  
  document.getElementById("boneco").innerHTML = boneco;
}
// Final do bloco para desenhar demogorgon

function pararDesenho() {
  clearInterval(tempoDeResolucao);
}

function codigoEnviado(){
  var chute = document.getElementById("codigo").value;
  
  if (chute == numeroSecreto){
    setTimeout(pararDesenho, 1)    
    document.getElementById("resultado").innerHTML = "Você Acertou!!!! Conseguiu derrotar o Demogorgon!!!";  
  }else if (chute > numeroSecreto){   
    document.getElementById("resultado").innerHTML = "O chute é maior do que o número secreto!!";    
    tentativas = tentativas - 1;
  }else if (chute < numeroSecreto) {  
    document.getElementById("resultado").innerHTML = "O chute é menor do que o número secreto!!";   
    tentativas = tentativas - 1; 
  }else{     
    document.getElementById("resultado").innerHTML = "Aaaaa o código é numérico!!!!";   
    tentativas = tentativas - 1;
    }
  
     
  if (tentativas == 0){
    document.getElementById("resultado").innerHTML = "Aaaaa o Demogorgon te pegou!!!!!";
    document.getElementById("envia-codigo").disabled = true;
    document.getElementById("codigo").disabled = true;
    setTimeout(pararDesenho, 1);
  }
  
   document.getElementById("num-tentativas").innerHTML = "Restam " + tentativas + " tentativas";
}

setTimeout(pararDesenho, 40000)