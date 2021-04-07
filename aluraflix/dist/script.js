// Arrays para guardar as informações
//
var cartazesDosFilmes = ["https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var nomeDosFilmes = ["Titanic", "Pantera Negra", "Vingadores: Fim de Jogo"]

var descricaoDosFilmes = ["Filme longo", "Muito Top!", "Triste, mas muito bom!"]
//

// Função para iniciar o catalogo ao carregar a tela
//
function iniciaCatalogo(){
  for (i = 0; i < cartazesDosFilmes.length; i ++){
    var novaSubDiv = "<div class='banco-de-filmes'><h2>"+ nomeDosFilmes[i] +"</h2><img src="+ cartazesDosFilmes[i] +"><p> Sinopse<br><br>"+ descricaoDosFilmes[i] +"<p></div>"
    
  document.getElementById("colecao-imagem").innerHTML = document.getElementById("colecao-imagem").innerHTML + novaSubDiv
    
  }
}


// Função para adicioanr um novo filme ao catalogo
//
function adicionaFilme(imagem, nome, descricao){
  cartazesDosFilmes.push(imagem)
  nomeDosFilmes.push(nome)
  descricaoDosFilmes.push(descricao)
  
  var novaSubDiv = "<div class='banco-de-filmes'><h2>"+ nomeDosFilmes[nomeDosFilmes.length-1] +"</h2><img src="+ cartazesDosFilmes[cartazesDosFilmes.length-1] +"><p> Sinopse<br><br>" + descricaoDosFilmes[descricaoDosFilmes.length-1] + "<p></div>";
    
  document.getElementById("colecao-imagem").innerHTML = document.getElementById("colecao-imagem").innerHTML + novaSubDiv;
}

// Função para atualizar o catalogo após a adição de um filme
//
function atualizarCatalogo(){
  var imagem = document.getElementById("url").value;
  var nome = document.getElementById("nome").value;
  var descricao = document.getElementById("descricao").value;
  
  retorno = validaForms(nome, imagem, descricao)
  
  console.log(retorno)
}

// Função para mostrar o forms de adição de filmes
//
function mostrarForms(){
  document.getElementById("form-add-filme").style.display = "block";
}

// Função para esconder o forms quando clicado fora dele na tela
//
function esconderForms(){
  fecharForms()
}

// Fecha o forms de envio de filmes
function fecharForms() {
  document.getElementById("form-add-filme").style.display = "none";
  
  document.getElementById("url").value = ""
  document.getElementById("nome").value = ""
  document.getElementById("descricao").value = ""
}

function validaForms(nome, imagem, descricao) {
  if (nome == "" && imagem == "" && descricao == ""){
    return "Todos os campos devem ser preenchidos!!"
  }else if (nome == ""){
    return "Preencha o nome!!";
  }else if (imagem == "") {
    return "A imagem deve ser no formato JPG!";
  } else if (descricao == "") {
    return "O campo descrição deve estar preenchido!"
  }else {
    return false;
  }
}


// Iniciando o catalogo
window.onload = iniciaCatalogo();