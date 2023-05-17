// 7 DAYS OFF CODE - ALURA - CODE-2 - INTERAGINDO COM O USUÁRIO.

var nome = prompt("qual seu nome?");
var idade = prompt("quantos anos você tem?");
var linguagemProgramação = prompt("qual linguagem você está aprendendo?");

alert("olá " + nome + "! você tem " + idade + " anos e esta aprendando " + linguagemProgramação + "? que legal!!");

var gostou = prompt("esta gostando de estudar " + linguagemProgramação + "? digite 'S' para sim e 'N' para não: ");

if (gostou === "S") {
  alert("Que bom que esta gostando, continue assim e chegará longe!!");
 }
 if(gostou === "N") {
  alert("Ah que pena! tente outras linguagens, talvez tenha alguma que te agrade.");
 }
else{
  alert("Digite 'S' caso esteja gostando da linguagem e 'N' caso não esteja gostando. Use letras maiúaculas em ambas as respostas");
}
