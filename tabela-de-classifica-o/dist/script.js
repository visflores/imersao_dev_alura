// Objetos para iniciar a tabela
var paulo = {
  nome: "Paulo",
  vitorias: 2,
  empates: 4,
  derrotas: 0,
  pontos: 0
}

var rafa = {
  nome: "Rafa",
  vitorias: 3,
  empates: 5,
  derrotas: 2,
  pontos: 0
}

var jogadores = [paulo, rafa]

// Funções do programa
//

// Função para calcular pontos:
function calculaPontos(jogador){
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}

// Função para exibir jogadores na tela
function exibirJogadores(jogadores){
  var html = ""
  for (var i = 0; i < jogadores.length; i++){
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate("  + i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
  }
  
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
}

// Função para adicionar Vitórias
function adicionarVitoria(i){
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadores(jogadores)
}

// Função para adicionar Empates
function adicionarEmpate(i){
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadores(jogadores)
}

// Função para adicionar Derrotas
function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.derrotas++
  exibirJogadores(jogadores)
}

// Adicionando novo jogador
function adicionarJogador(){
  var nomeDoJogador = document.getElementById("novo-jogador").value
  
  if (nomeDoJogador == ""){
    alert("Preencha o nome do novo jogador!!")
  }else{
    var novoJogador = {
      nome: nomeDoJogador,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    }
    
    jogadores.push(novoJogador)
    
    document.getElementById("novo-jogador").value = ""
    
    exibirJogadores(jogadores)
  }
}


// Chamando as funções
exibirJogadores(jogadores)