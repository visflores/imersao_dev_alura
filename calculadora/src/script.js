var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))

var segundoValor = parseInt(prompt("Digite o segundo valor:"))

var operacao = prompt("(1) - Soma, (2) - Subtração, (3) - Divisão, (4) - Multiplicação")

if (operacao == 1){
  var resultado = primeiroValor + segundoValor
  
  document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
}else if (operacao == 2){
  var resultado = primeiroValor - segundoValor
  
  document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
}else if (operacao == 3){
  var resultado = primeiroValor / segundoValor
  
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
}else if (operacao == 4){
  var resultado = primeiroValor * segundoValor
  
  document.write("<h2>" + primeiroValor + " * " + segundoValor + " = " + resultado + "</h2>")
}else{
  document.write("<h2>Operação Invalida!</h2>")
} 