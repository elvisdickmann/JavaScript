// Create Read Uptdate Delete

var lista_produtos = [];

function create(nome, descricao, valor) {
    var produto = new Produto(nome,descricao, valor);
    lista_produtos.push(produto);
}

function read() {
    return  lista_produtos;
}