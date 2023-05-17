// 7 DAYS OFF CODE - ALURA - CODE-5 - LISTA DE COMPRAS SUPERMERCADO.

let frutas = [];
let legumes = [];
let carne = [];
let doces = [];
let higienePessoal = [];
let congelados = [];
let laticinios = [];
let outraCategoria = [];

let comprasDoUsuario = "";

let categoriaDeCompra = "";

let adicionarMais = "sim";

while(adicionarMais != "não") {
    adicionarMais = prompt("deseja adicionar algum item a sua lista de supermercado? digite sim ou não: ");
    while(adicionarMais != "sim" && adicionarMais != "não") {
            alert("operação não reconhecida!!");
            adicionarMais = prompt("deseja adicionar algum item a sua lista de supermercado? digite sim ou não: ");
    }

    if(adicionarMais === "não") {
        break;
    }
    comprasDoUsuario = prompt("oque gostaria de adicionar a sua lista? ");
    categoriaDeCompra = prompt("em qual categoria se encaixa o produto inserido anteriormente? 'frutas', 'legumes', 'carne', 'doces', 'higiene pessoal', congelados, 'laticinios', 'outra categoria'. Digite exatamente igual as opções apresentadas. ");
    if(categoriaDeCompra === "frutas"){
        frutas.push(comprasDoUsuario);
    }
    else if(categoriaDeCompra === "legumes"){
        legumes.push(comprasDoUsuario);
    }
    else if(categoriaDeCompra === "carne") {
        carne.push(comprasDoUsuario);
    }
    else if(categoriaDeCompra === "doces") {
        doces.push(comprasDoUsuario);
    }
    else if(categoriaDeCompra === "higiene pessoal") {
        higienePessoal .push(comprasDoUsuario);
    }
    else if(categoriaDeCompra === "congelados") {
        congelados.push(comprasDoUsuario);
    }
    else if(categoriaDeCompra === "laticinios") {
        laticinios.push(comprasDoUsuario);
    }
    else if(categoriaDeCompra === "outra categoria"){
        outraCategoria.push(comprasDoUsuario);
    }
    else {
        alert("Essa categoria não foi definida!");
        comprasDoUsuario = prompt("oque gostaria de adicionar a sua lista? ");
        categoriaDeCompra = prompt("em qual categoria se encaixa o produto inserido anteriormente? 'frutas', 'legumes', 'carne', 'doces', 'higiene pessoal', congelados, 'laticinios', 'outra categoria'. Digite exatamente igual as opções apresentadas. ");
    }
}
alert("lista de compras:\n " + "frutas: " + frutas + "\n" + "legumes: " + legumes + "\n" + "carne: " + carne + "\n" + "doces: " + doces + "\n" + "higiene pessoal: " + higienePessoal + "\n" + "congelados" + congelados + "\n" + "laticinios: " + laticinios + "\n" + "outra categoria: " + outraCategoria);


        
        