var h1 = document.getElementById("titulo");
console.log(h1);
console.log(h1.innerHTML);
h1.innerHTML = "Novo Título";

var body = document.querySelector("body");
body.innerHTML += "<a href= ''>Meu Link com JS</a>";

var divConteudo = document.getElementsByClassName("conteudo");
console.log(divConteudo[0]);