// SEVEN DAYS OFF CODE - ALURA - CODE-4 - JOGO DA ADIVINHAÇÃO COM A MÁQUINA.

const numeroAleatorio = Math.floor(Math.random() * (10 - 0 + 1) + 0);

let quantidadeDeChances = 3;

let numeroChutado = "";

let acertou = false;

for (let i = 0; i < quantidadeDeChances ; i++) {
    numeroChutado = prompt("qual número você acha que está em minha memória? chute um número entre 0 e 10, você tem 3 chances para acertar.  ");
    if(numeroChutado == numeroAleatorio){
        acertou = true;
        alert("parabéns você acertou!!");
        break;
    }
    alert("errou!!");
}
if(!acertou) {
    alert("você não conseguiu acertar... o número que está em minha memória é " + numeroAleatorio + ".");
}
