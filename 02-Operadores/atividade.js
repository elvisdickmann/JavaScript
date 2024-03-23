// ATIVIDADES AULA 1 E 2
console.log('Atividades')

// CRIAR FUNÇÃO DE SOMA
function soma(n1, n2, n3, n4) {
    let resultado = n1 + n2 + n3 + n4;
    return resultado
}

//  CRIAR FUNÇÃO  SUBTRAÇÃO
function subtracao(n1, n2, n3, n4) {
    let resultado = n1 - n2 - n3 -n4;
    return resultado
}

// CRIAR FUNÇÃO  MULTIPLICAÇÃO
function multiplicacao(n1, n2) {
    let resultado = n1 * n2 * n3;
    return resultado
}

//  CRIAR FUNÇÃO  DIVISÃO
function divisao(n1, n2) {
    let resultado = n1 / n2;
    return resultado
    
}

// console.log(soma(10,20,30,40));
// console.log(subtracao(40,30,20,10));
// console.log(multiplicacao(3,2,5));
// console.log(divisao(10,2));

// BASEADO NAS FUNÇÕES ACIMA, REALIZE UMA CHAMADA PARA CALCULAR A SEGUINTE EXPRESSÃO:
// 5 + 10 (20*10*5) / 2 EM UMA ÚNICA IMPRESSÃO DE CONSOLE.LOG()

console.log(soma(soma(5,10) , divisao(multiplicacao(multiplicacao(20,10),5), 2 )));
