var lista_nomes= ["Elvis", "Matheus", "Douglas", "Jhonny", "Maykon"];

for(var cont = 0; cont < lista_nomes.length; cont++) {
    console.log(lista_nomes[cont]);
}

for(var nome of lista_nomes) {
    console.log(nome);
}