// Programação Orientada a Objetos

// variavéis padrões JS
var nome = "Ana";
var idade = 10;
var nomes = ["Marcos", "Vitória"];

// Classe Pessoa
class Pessoa {
    // Métodos são Constructor que é executado quando se cria a variável desta class
    constructor(){
        console.log("Passando Construtor")
        this.nome = "";
        this.sobrenome = "";
        this.idade = "0";
    }
}

var p1 = new Pessoa();
p1.nome = "Alex";
p1.sobrenome = "Silva";
p1.idade =  85;
console.log(p1);

var p2 = new Pessoa()
p2.nome = "Elvis"
p2.sobrenome = "Dickmann"
p2.idade = 20;
console.log(p2)