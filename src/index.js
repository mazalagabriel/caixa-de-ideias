/* sintaxe da função
function nome (parâmetro){
  corpo da função
  return
}

//invocando a função
nome() */
function helloWorld() {
  return document.write(`Hello World`);
}

helloWorld();

//NOTAÇÃO - DEFININDO UMA FUNÇÃO COMO VARIÁVEL
let mult = function(x){
  return x * x
}
console.log(mult(4))

let div = function(y){
  return y / y
  }
  console.log(div(8))

  let soma = function(k){
    return k + k
  }
  console.log(soma(2))

  
