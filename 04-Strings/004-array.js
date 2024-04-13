// Criação de um Array
var nomes = [];
var cidades = new Array();
var cursos = ["Python", "C#", "Java", "Front", "NodeJs"];

console.log(nomes);
console.log(cidades);
console.log(cursos);

// Adicionando Elementos no Array
nomes.push("Anna", "Alex");
console.log(nomes);

// Exibir Elemento específico (index)
console.log(cursos[1]);

// Alterar um elemento do Array
nomes[0] = "Ana";
console.log(nomes);

// Remover Elementos
console.log(cursos);
// Remove o Ultimo Elemento
cursos.pop();

// Remover o primeiro Elemento
cursos.shift();
console.log(cursos);

// Remove do meio da lista da posição inicial até o final
cursos.splice(1,1);
console.log(cursos);


var numeros = [5,8,2,19,16,22,13];
// Ordenação de Array
console.log(numeros.sort());

cursos = ["Python", "C#", "Java", "Front", "NodeJs"];
console.log(cursos.sort);