// 7 DAYS OFF CODE - ALURA - CODE-6 - LISTA DE COMPRAS COM OPÇÃO DE REMOVER ITEM.

// lista de arrays que contém a categoria de cada item.
let açougue = [];
let friosELaticinios  = [];
let adegaEBebidas = [];
let higieneELimpeza = [];
let hortifrutiEMercearia = [];
let padaria = [];
let enlatados = [];
let cereais = [];
let rotisseria = [];
let outraCategoria = [];

// itens e categoria dos itens do usuário.

let itemDoUsuario = "";
let categoriaDoItem = "";

// caso o usuário queira adicionar mais itens ou remover algum item.
let adicionarMais = "sim";
let remover = "";

// repetindo programa enquanto o valor de adicionarMais for diferente de "não".
while(adicionarMais != "não") {
    // adicionar uma lista nova caso não exista nenhuma.
    if(açougue.length == 0 && friosELaticinios.length == 0 && adegaEBebidas == 0 && higieneELimpeza == 0 && hortifrutiEMercearia == 0 && padaria.length == 0 && enlatados.length == 0 && cereais.length == 0 && rotisseria.length == 0 && outraCategoria.length == 0) {
        adicionarMais = prompt("Deseja adicionar algo em uma lista de compras? digite 'sim' ou 'não': ");
        }
    // adicionar ou remover itens de uma lista existente.
     else {
        adicionarMais = prompt("Deseja adicionar mais algum item na sua lista de compras ou deseja remover algum item da sua lista? digite 'sim', 'não' ou 'remover'.");
        }
     // mensagem de erro caso o usuario digite uma opção inválida.   
    while (adicionarMais != "sim" && adicionarMais != "não" && adicionarMais != "remover") {
             alert("Operação desconhecida!");
         adicionarMais = prompt("Deseja adicionar mais algum item na sua lista de compras ou deseja remover algum item da sua lista? digite 'sim', 'não' ou 'remover'.");
        }    
       // caso o usuario não queira adicionar ou remover mais nada para o programa. 
    if (adicionarMais === "não") {
        break;
    }   
    // realiza o processo de adquirir as informações dos produtos e categoria dos produtos que o usuário deseja adicionar.
    if (adicionarMais === "sim") {
        itemDoUsuario = prompt("Digite o item que deseja adicionar: ");
        categoriaDoItem = prompt("Digite em qual categoria o item esclhido se encaixa 'açougue', 'frios e laticinios', 'adega e bebidas', 'higiene e limpeza', 'hortifruti e mercearia', 'padaria', 'enlatados','cereais','rotisseria', 'outra categoria': ");
        // processo de armazenamento dos itens do usuario em suas respectivas categorias.
        if(categoriaDoItem === "açougue") {
            açougue.push(itemDoUsuario);
        }
        else if(categoriaDoItem === "frios e laticinios") {
            friosELaticinios.push(itemDoUsuario);
        }
        else if(categoriaDoItem === "adega e bebidas") {
            adegaEBebidas.push(itemDoUsuario);
        }
        else if(categoriaDoItem === "higiene e limpeza") {
            higieneELimpeza.push(itemDoUsuario);
        }
        else if(categoriaDoItem === "hortifruti e mercearia") {
            hortifrutiEMercearia.push(itemDoUsuario);
        }
        else if(categoriaDoItem === "padaria") {
            padaria.push(itemDoUsuario);
        }
        else if(categoriaDoItem === "enlatados") {
            enlatados.push(itemDoUsuario);
        }
        else if(categoriaDoItem === "cereais") {
            cereais.push(itemDoUsuario);
        }
        else if(categoriaDoItem === "rotisseria") {
            rotisseria.push(itemDoUsuario);
        }
        else if(categoriaDoItem === "outra categoria") {
            outraCategoria  .push(itemDoUsuario);
        }
        // mensagem de erro caso o usuario digite uma categoria inválida.
        else {
            alert("Operação desconhecida!");
         adicionarMais = prompt("Deseja adicionar mais algum item na sua lista de compras ou deseja remover algum item da sua lista? digite 'sim', 'não' ou 'remover'.");
        }
    } 
    //  parte do código que executa a remoção de itens caso o usuario escolha remover. 
    if (adicionarMais === "remover") {
        // avisa o usuario caso ele selecione a opção remover sem que haja itens a serem removidos.
        if(açougue.length == 0 && friosELaticinios.length == 0 && adegaEBebidas.length == 0 && higieneELimpeza.length == 0 && hortifrutiEMercearia.length == 0 && padaria.length == 0 && enlatados.length == 0 && cereais.length == 0 && rotisseria.length == 0 && outraCategoria.length == 0 ) {
            alert("sua lista de compras não possui itens a serem excluidos!");
            adicionarMais = prompt("Deseja adicionar algo em uma lista de compras? digite 'sim' ou 'não': ");
        }
        // se a lsta não estiver vazia inicia o processo de remoção.
        else {
            remover = prompt("Lista de compras: \n açougue: " + açougue + "\nfrios e laticinios: " + friosELaticinios + "\nadega e bebidas: " + adegaEBebidas + "\nhigiene e limpeza: " + higieneELimpeza + "\nhortifruti e mercearia: " + hortifrutiEMercearia + "\npadaria: " + padaria + "\nenlatados: " + enlatados + "\ncereais: " + cereais + "\nrotisseria: " + rotisseria + "\noutra categoria: " + outraCategoria + "digite o produto de sua lista que deseja remover: ");
            // identifica se o item digitado corresponde a algum item presente em alguma categoria e remove-o confirmando a remoção para o usuário.
            if(açougue.indexOf(remover) != -1 ) {
                açougue.splice(açougue.indexOf(remover),1);
                alert("o item " + remover + "foi removido com sucesso!");
            }
            else if (friosELaticinios.indexOf(remover) != -1) {
                friosELaticinios.splice(friosELaticinios.indexOf(remover),1);
                alert("o item " + remover + "foi removido com sucesso!");
            }
            else if (adegaEBebidas.indexOf(remover) != -1) {
                adegaEBebidas.splice(adegaEBebidas.indexOf(remover), 1);
                alert("o item " + remover + "foi removido com sucesso!");
            }
            else if (higieneELimpeza.indexOf(remover) != -1) {
                higieneELimpeza.splice(higieneELimpeza.indexOf(remover),1);
                alert("o item " + remover + "foi removido com sucesso!");
            }
            else if (hortifrutiEMercearia.indexOf(remover) != -1) {
                hortifrutiEMercearia.splice(hortifrutiEMercearia.indexOf(remover),1);
                alert("o item " + remover + "foi removido com sucesso!");
            }
            else if (padaria.indexOf(remover) != -1) {
                padaria.splice(padaria.indexOf(remover),1);
                alert("o item " + remover + "foi removido com sucesso!");
            }
            else if (enlatados.indexOf(remover) != -1) {
                enlatados.splice(enlatados.indexOf(remover),1);
                alert("o item " + remover + "foi removido com sucesso!");
            }        
            else if (cereais.indexOf(remover) != -1) {
                cereais.splice(cereais.indexOf(remover),1);
                alert("o item " + remover + "foi removido com sucesso!");
            }
             else if (rotisseria.indexOf(remover) != -1) {
                rotisseria.splice(rotisseria.indexOf(remover),1);
                alert("o item " + remover + "foi removido com sucesso!");
            }
            else if (outraCategoria.indexOf(remover) != -1) {
                outraCategoria.splice(outraCategoria.indexOf(remover),1);
                alert("o item " + remover + "foi removido com sucesso!");
            }
            // imprime um aviso caso o item digitado não esteja presente em nenhuma das opções de categoria.
            else {
                alert ("não foi possivel encontrar o item dentro da lista.")
            }
        }
    }
    // imprime na tela a lista com todos os produtos presentes em cada categoria.
    alert("Lista de compras: \n açougue: " + açougue + "\nfrios e laticinios: " + friosELaticinios + "\nadega e bebidas: " + adegaEBebidas + "\nhigiene e limpeza: " + higieneELimpeza + "\nhortifruti e mercearia: " + hortifrutiEMercearia + "\npadaria: " + padaria + "\nenlatados: " + enlatados + "\ncereais: " + cereais + "\nrotisseria: " + rotisseria + "\noutra categoria: " + outraCategoria + "\n");
}






