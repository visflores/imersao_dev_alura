// Variaveis usadas para coletar as charadas e iniciar o contador
var valores;

var charadas;

var counter = 1;

// URL do arquivo JSON com as charadas
var url = "https://raw.githubusercontent.com/visflores/imersao_alura_jsons/main/charadas_editado.json";

// Carrega o arquivo JSON com as charadas.
window.onload = function (){
	
  let request = new XMLHttpRequest();

  request.open('GET', url, true);

  request.onload = function() {

		if (request.readyState == 4 && request.status == 200) {
      var repost = JSON.parse(request.responseText);
      
      // Coletando o valor da cotação do dolar.
      valores = repost['charada' + counter][0];
			
			charadas = repost
			
			document.getElementById("pergunta-charada").innerHTML = valores.charada;
		}
	};

  // Caso ocorra algum erro, podemos ver qual foi ele no console.
  request.onerror = function() {

    console.log("Erro:"+request);

  };
  
  // Fazendo a requisição.
	request.send();
	
}


// Função que, ao clicar no botão responder, verifica a resposta do usuário e imprime uma
// mensagem na tela.
function verResposta() {
	counter = counter + 1
	
	var respostaUsuario = document.getElementById("resposta").value;
	
	if (respostaUsuario.toLowerCase() == valores.resposta){	
		
		document.getElementById("resposta-charada").innerHTML = "Você acertou!! A resposta é " + valores.resposta;
		
		counter = limiteContador(counter);
		
		proximaCharada(counter);		
		
	}else{
		
		document.getElementById("resposta-charada").innerHTML = "Que pena, você errou! A resposta correta é " + valores.resposta;
		
		counter = limiteContador(counter);
		
		proximaCharada(counter);
	}
	
	document.getElementById("resposta").value = "";
}


// Função para verificar se as charadas se esgotaram, reiniciando o contador.
function limiteContador(counter) {
	if (counter > Object.keys(charadas).length) {
		counter = 1;
		
		document.getElementById("resposta-charada").innerHTML = "";
		
		return counter;
	}else{
		return counter;
	}
}


// Função para ir para a próxima charada.
function proximaCharada(counter){
	valores = charadas['charada' + counter][0];
	
	document.getElementById("pergunta-charada").innerHTML = valores.charada;
}
