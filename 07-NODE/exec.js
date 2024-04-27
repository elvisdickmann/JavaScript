console.log("Mensagem em node")

// SOMA
var soma = require('./soma.js');
console.log(soma(10,19));


//Criar um Módulo de Subtração  e executar no arquivo exec.js
let subtracao = require('./subtracao.js')
console.log(subtracao(10,5));


// Para executar, digitar no terminal: node exec.js