console.log("Utilizando Express")

// Criar 4 funções anÔnimas.

// Function 1 - (Cadastrar)
let cadastrar = function(nome, sobrenome) {
    let mensagem = ('Dados Cadastrados com Sucesso!') 
    return mensagem;    
}
// Function 2 - (Listar)  -Dicionário-
let listar = function() {
    let pessoa1 = {'nome':'Elvis', 'sobrenome':'Dickmann'};
    let pessoa2 = {'nome':'Ozzy', 'sobrenome':'Osbourne'};
    let pessoas = [pessoa1, pessoa2];
    return pessoas;
}
// Function 3 - (Alterar)
let alterar = function(nome,sobrenome) {
    let mensagem = ('Dados Alterados com Sucesso!')
    return mensagem;
}
// Function 4 - (Deletar)
let deletar = function(nome,sobrenome){
    let mensagem = ('Dados Deletados com Sucesso!')
    return mensagem;
}

console.log(cadastrar('a' , 'a'));
console.log(listar());
console.log(alterar('a' , 'a'));
console.log(deletar('a' , 'a'));



