var cartasDoJogo
var cartas = []

// URL do arquivo JSON com as charadas
var url = "https://raw.githubusercontent.com/visflores/imersao_alura_jsons/main/cartas_super_trunfo.json";

// Carrega o arquivo JSON com as charadas.
window.onload = function (){
	
  let request = new XMLHttpRequest();

  request.open('GET', url, true);

  request.onload = function() {

		if (request.readyState == 4 && request.status == 200) {
      cartasDoJogo = JSON.parse(request.responseText);
      
      for (var carta in cartasDoJogo){
        cartas.push(carta)
      }
      atualizaQuantidadeDeCartas()
		}
	};
  // Caso ocorra algum erro, podemos ver qual foi ele no console.
  request.onerror = function() {

    console.log("Erro:"+request);

  };
  
  // Fazendo a requisição.
	request.send();
	
}

// Lista de objetos
//

var cartaMaquina
var cartaJogador

var pontosJogador = 0
var pontosMaquina = 0

// Chamando Funções
//

atualizaPlacar()

// Funções do programa
//

// Sorteia a carta da Maquina e do Jogador
function sortearCarta(){  
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
  cartaMaquina = cartasDoJogo[cartas[numeroCartaMaquina]]
  
  cartas.splice(numeroCartaMaquina, 1)
  
  var numeroCartaJogador = parseInt(Math.random() * cartas.length)
  cartaJogador = cartasDoJogo[cartas[numeroCartaJogador]]
  cartas.splice(numeroCartaJogador, 1)
  
  document.getElementById("btnSortear").disabled = true
  document.getElementById("btnJogar").disabled = false
  
  exibirOpcoes()
  mostrarCartaDoJogador()
  atualizaQuantidadeDeCartas()
}

// Função para apresentar as opções de atributos
//
function exibirOpcoes(){
  var opcoes = document.getElementById("opcoes")
  var opcoesTexto = ""
  
  for (var atributo in cartaJogador.atributos){
    opcoesTexto += "<input type='radio' name='atributos' value='" + atributo + "'>" + atributo + " --> " + cartaJogador.atributos[atributo] + "<br>"
  }
  
  document.getElementById("mensagem-escolha").style.display = "block"
  opcoes.innerHTML = opcoesTexto
}

// Função para coletar o atributo selecionado
//
function obterAtributoSelecionado() {
  var atributoEscolhido = document.getElementsByName("atributos")
  
  for (var i = 0; i < atributoEscolhido.length ; i++){
    if (atributoEscolhido[i].checked) {
      return atributoEscolhido[i].value
    }
  }
}


// Função para mostrar a carta escolhida
//

function mostrarCartaDoJogador() {
  var mostrarCarta = document.getElementById("carta-sorteada")
  
  var nome = "<h1>" + cartaJogador.nome + "</h1>"
  
  mostrarCarta.innerHTML += nome
  
  var imagemCartaJogador = "<img id='carta-jogador' src='" + cartaJogador.url + "'>"
  
  mostrarCarta.innerHTML += imagemCartaJogador
   
  apresentaDescricao()
}

// Função para comparar as cartas do jogador e da maquina
//

function compararCartas() {
  var divCartaJogador = document.getElementById("comparar-carta-jogador")
  var divCartaMaquina = document.getElementById("comparar-carta-maquina")
  var atributoEscolhido = obterAtributoSelecionado()
  
  var nomeCartaJogador = "<h3>" + cartaJogador.nome + "</h3>"
  var atributosCartaJogador = ""
  for (var atributo in cartaJogador.atributos) {
    if (atributo == atributoEscolhido) {
      atributosCartaJogador+= "<p style='color: red;'>" + atributo + " - " + cartaJogador.atributos[atributo] + "</p>"
    } else {
      atributosCartaJogador+= "<p>" + atributo + " - " + cartaJogador.atributos[atributo] + "</p>"
    }
  }
  
  var imagemCartaJogador = "<img id='comparacao-cartas' src='" + cartaJogador.url + "'>"
  
  divCartaJogador.innerHTML = nomeCartaJogador + imagemCartaJogador + atributosCartaJogador
  
  var nomeCartaMaquina = "<h3>" + cartaMaquina.nome + "</h3>"
  var atributosCartaMaquina = ""
  
  for (var atributo in cartaMaquina.atributos) {
    if (atributo == atributoEscolhido) {
      atributosCartaMaquina += "<p style='color: red;'>" + atributo + " - " + cartaMaquina.atributos[atributo] + "</p>"
    }else {
      atributosCartaMaquina += "<p>" + atributo + " - " + cartaMaquina.atributos[atributo] + "</p>"
    } 
  }
  
  var imagemCartaMaquina = "<img id='comparacao-cartas' src='" + cartaMaquina.url + "'>"
  
  divCartaMaquina.innerHTML = nomeCartaMaquina + imagemCartaMaquina + atributosCartaMaquina
  
}

// Função com a regra de nosso jogo
//
function jogar(){
  var resultadoDoJogo = document.getElementById("resultado-do-jogo")
  var atributoSelecionado = obterAtributoSelecionado()
  
  if (cartaMaquina.atributos["Trunfo"]) {
    resultadoDoJogo.innerHTML = "<h2>Você Perdeu...</h2>"
    pontosMaquina++
  }else if (cartaJogador.atributos["Trunfo"]) {
    resultadoDoJogo.innerHTML = "<h2>Você venceu!!!!!</h2>"
    pontosJogador++
  } else if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    resultadoDoJogo.innerHTML = "<h2>Você venceu!!!!!</h2>"
    pontosJogador++
  }else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    resultadoDoJogo.innerHTML = "<h2>Você Perdeu...</h2>"
    pontosMaquina++
  }else {
    resultadoDoJogo.innerHTML = "<h2>Empate!</h2>"
  }
  
  document.getElementById("btnNovoJogo").disabled = false
  document.getElementById("btnJogar").disabled = true
  atualizaPlacar()
  compararCartas()
}

// Função para atualizar o placar
//

function atualizaPlacar(){
  var divPontuacao = document.getElementById("pontuacao")
  
  html = "Jogador " + pontosJogador + " / " + pontosMaquina + " Máquina"
  
  divPontuacao.innerHTML = html
}

// Função para jogar novamente
//

function novoJogo() {
  var divCartas = document.getElementById("carta-sorteada")
  var divComparaCartas = document.getElementById("comparar-cartas")
  
  divCartas.innerHTML = "<div class='carta-sorteada' id='carta-sorteada'></div>"
  
  divComparaCartas.innerHTML = "<div class='comparar-carta-jogador' id='comparar-carta-jogador'></div><div class='comparar-carta-maquina' id='comparar-carta-maquina'></div>"
  
  renovaCampos()
  fimDeJogo(cartas)
}

// Função para remover renovar valores dos campos após um jogo
//

function renovaCampos() {
  document.getElementById("btnJogar").disabled = true
  document.getElementById("btnSortear").disabled = false
  document.getElementById("btnNovoJogo").disabled = true
  document.getElementById("resultado-do-jogo").innerHTML = ""
  document.getElementById("opcoes").innerHTML = ""
  document.getElementById("mensagem-escolha").style.display = "none"
}

function apresentaDescricao() {
  var divCartaSorteada = document.getElementById("carta-sorteada")
  
  html = "<div class='descricao'>"+ cartaJogador.descricao +"</div>"
  
  divCartaSorteada.innerHTML += html
}

// Atualiza quantidade de cartas
//
function atualizaQuantidadeDeCartas() {
  var divQuantidadeCartas = document.getElementById("quantidade-cartas")
  
  var html = "Quantidade de cartas no jogo: " + cartas.length
  
  divQuantidadeCartas.innerHTML = html
}

function fimDeJogo(cartas) {
  if (cartas.length == 0) {
    var divFimDeJogo = document.getElementById("fim-de-jogo")
    var html = "O jogo chegou ao fim! Recarregue a página para jogar novamente!"
    renovaCampos()
    document.getElementById("btnSortear").disabled = true
    
    divFimDeJogo.innerHTML = html
  }
}