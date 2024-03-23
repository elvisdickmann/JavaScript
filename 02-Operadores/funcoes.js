// FUNÇÕES
console.log('Funções')

function mensagem1() {
    console.log('Função de mensagem1')
    mensagem2();
}

function mensagem2() {
console.log('Função de mensagem2')   
}

function mensagem3() {
    return 'Olá'
}

function saudacao(nome) {
    console.log(`Olá, ${nome} !`)
}

mensagem1();
console.log(mensagem3())

var n1 = 'Joelma'
saudacao(n1);
// CALLSTACK ou PILHA DE CHAMADAS