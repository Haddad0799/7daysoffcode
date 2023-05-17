// SEVEN DAYS OFF CODE - ALURA - CODE3 - INTERAGINDO COM O USUÁRIO DE ACORDO COM SUAS ESCOLHAS.

var escolhaDoUsuario = prompt("Você deseja se tornar um back-end ou um front-end? ")
let linguagem = "";

if (escolhaDoUsuario === "back-end") {
    linguagem = prompt("qual linguagem deseja aprender c# ou java? ");
}  
else if (escolhaDoUsuario === "front-end") {
     linguagem = prompt("qual linguagem deseja aprender, react ou vue? ");  
}
else {
    alert("mensagem invália! certifique-se que digitou corretamente a área escolhida.");
}


var desenvolvedorfullstack = prompt("gostaria de seguir aprendendo a área escolhida ou deseja se tornar um desenvovedor fullstack? digite 1 caso deseje se manter na sua área e 2 caso queira se tornar fullstack: ");

if (desenvolvedorfullstack == 1) {
    alert("continue se aperfeiçoando em "+ linguagem + " para dominar a área de " + escolhaDoUsuario + "!");
}
else if(desenvolvedorfullstack == 2) {
    alert("hora de aprender outras linguagens além de " + linguagem + " para se tornar um desenvolvedor fullstack!");
}
else {
    alert("use apenas 1 para seguir na área escolhida e 2 para se tornar fullstack!")
}

let mensagem = prompt("existe mais alguma tecnologia que gostaria de aprender? digite 'sim' em caso positivo: ");

while (mensagem === "sim") {
    let novaTecnologia = prompt("qual? ");
    alert("muito interessante aprender " + novaTecnologia + "!!");
    mensagem = prompt("existe mais alguma tecnologia que gostaria de aprender? digite 'sim' em caso positivo: ");
}
