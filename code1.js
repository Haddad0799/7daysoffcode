// 7 DAYS OFF CODE - ALURA - CODE-1 - COMPARANDO LISTA DE STRINGS COM LISTA DE NUMBERS.

const numeroUm = 1;
const stringUm= "1";
const numeroTrinta = 30;
const stringTrinta = "30";
const numeroDez = 10;
const stringDez = "10";

var listaDeNumeros = [numeroUm, numeroTrinta, numeroDez];
var listaDeStrings = [stringUm, stringTrinta, stringDez];

var valoresListasIguais = false;

for (let i = 0; i < listaDeNumeros.length; i++) {
    for (let i = 0; i < listaDeStrings.length; i++) {
        if(listaDeNumeros[i] === listaDeStrings[i]) {
            valoresListasIguais = true;
        }
    }
}

if (valoresListasIguais == true) {
    console.log("o numero correspondente a posição i da lista de numeros é igual a string correspondente a posição i da lista de strings");
}
else {
    console.log("o numero correspondente a posição i da lista de numeros não é igual a string correspondente a posição i da lista de strings");
}


