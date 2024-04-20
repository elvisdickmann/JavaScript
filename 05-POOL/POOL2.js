class produto {
    constructor(nome,descricao,valor) {
        this.nome = nome;
        this.descricao = descricao;
        this.valor = valor;
    }

// Getter
getValor(){
    return `R$ ${this.valor}`;
}
}

var p1 =  new produto("Café solução", "Ruim", 19);

console.log(p1.getValor());