// Galera, sou novo no JavaScript mas sei programar um pouco em outras linguagens (i.e Python rs')
// O código abaixo eu fiz com (muito) auxilio de pesquisa na internet e achei a API que busca o valor
// atual do dolar em um blog também indicado abaixo.

// Espero que os comentários ajudem a entender como fiz o código e qual é a lógica por de trás dele.
// Caso tenham alguma dúvida podem me mandar mensagem no Discord! vflores#7162.

// Vamos primeiro pegar o dia de hoje para poder coletar a cotaçãoa atual
// Aqui estamos instanciando um objeto da classe Date, assim conseguimos 
// verficar a data atual!
var diaDeHoje = new Date();

// Essa variavel irá armazenar os valores de cotação de compra, venda e o dia.
var valores;

// Montato data no formato MM-DD-AAAA
diaDeHoje = (diaDeHoje.getMonth()+1) + "-" + diaDeHoje.getDate() + "-" + diaDeHoje.getFullYear()

// Vamos passar a data para a URL da API do banco central

var url = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='"+diaDeHoje+"'&$format=json";

// Para verificar no console se a string concatenou corretamente --> console.log(url)

// Abaixo estamos falando para a janela, assim que carregar, executar a função.
// Essa função faz o request (requisição) na API do banco central pela cotação 
// do dolar no dia  atual. O código para essa requisição pode ser encontrado no
// seguinte site http://www.dbins.com.br/dica/cotacao-do-dolar-com-javascript
window.onload = function (){
  let request = new XMLHttpRequest();

  request.open('GET', url, true);

  request.onload = function() {

    if (request.readyState == 4 && request.status == 200) {

      var resposta = JSON.parse(request.responseText);
      
      // Coletando o valor da cotação do dolar.
      valores = resposta.value[0];
      
      // Mandando esse valor para um elemento no HTML com o id "valor-dolar".
      document.getElementById("valor-dolar").innerHTML = "R$ " + parseFloat(valores.cotacaoCompra).toFixed(2)

 } 

};

  // Caso ocorra algum erro, podemos ver qual foi ele no console.
  request.onerror = function() {

    console.log("Erro:"+request);

  };
  
  // Fazendo a requisição.
  request.send();
  
}

// Agora vamos criar uma função para pegar o valor da caixa de texto e calcular a conversão
// quando clicarmos no botão calcular.

function calcularConversao() {
  // Coletando o valor digitado na caixa de texto que tem o id "preco_ps5".
  var valorDoPs5 = parseFloat(document.getElementById("preco_ps5").value);
  
  // Esse método isNaN verifica se um valor não é um número.
  if(isNaN(valorDoPs5)){
    // Valor que vamos imprimir no campo de id "valor-convertido" caso não seja um número.
    document.getElementById("valor-convertido").innerHTML = "Hummm! Acho que você não digitou um número.";
  }else{
    // Caso seja um número, vamos fazer os calculos e imprimir!
    // Calculando a conversão
    var valorConvertido = valorDoPs5 * parseFloat(valores.cotacaoCompra);
    
    console.log(valores.cotacaoCompra)
    // Imprimindo essa conversão em um paragrafo (p) do HTML.
    document.getElementById("valor-convertido").innerHTML = "R$ " + parseFloat(valorConvertido).toFixed(2);
  }
};
