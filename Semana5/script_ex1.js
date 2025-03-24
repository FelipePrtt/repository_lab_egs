const container = document.getElementById("container");

var num_homens = 0;
var num_mulheres = 0;


// Campo "Total"
const totalTexto = document.createElement("label");
totalTexto.innerText = "Total";
totalTexto.style.fontSize = "24px"; 
totalTexto.style.fontWeight = "bold"; 
container.appendChild(totalTexto);
totalTexto.style.marginLeft = 180;

//"Botão" reset
const reset = document.createElement("img");
reset.src = "imagens/reset.png";
reset.id = "btn_reset";
reset.width = 50;
reset.height = 50;
reset.style.marginLeft = 90;
reset
container.appendChild(reset);

container.appendChild(document.createElement("br"));

//Label que exibe o valor total de elementos somados
const totalLabel = document.createElement("label");
totalLabel.id = "totalLabel";
totalLabel.innerText = "0"; 
totalLabel.style.fontSize = "32px"; 
totalLabel.style.marginBottom = "20px"; 
totalLabel.style.marginLeft = "200px";
container.appendChild(totalLabel);

container.appendChild(document.createElement("br"));

// Avatar masculino
const avatar_homem = document.createElement("img");
avatar_homem.src = "imagens/homem.png";
avatar_homem.width = 200;
avatar_homem.height = 200;

container.appendChild(avatar_homem); 

//Avatar feminino
const avatar_mulher = document.createElement("img");
avatar_mulher.src = "imagens/mulher.png";
avatar_mulher.width = 200;
avatar_mulher.height = 200;
container.appendChild(avatar_mulher);


container.appendChild(document.createElement("br"));


//Contadores masculino/feminino
const contador_h = document.createElement("label");
contador_h.innerText = num_homens;
contador_h.style.fontSize = 32;
contador_h.style.marginLeft = "90px";
container.appendChild(contador_h);

const contador_m = document.createElement("label");
contador_m.innerText = num_mulheres;
contador_m.style.fontSize = 32;
contador_m.style.marginLeft = "180px";
container.appendChild(contador_m);


container.appendChild(document.createElement("br"));


//"Botões"
const add_h = document.createElement("img");
add_h.src = "imagens/add.png";
add_h.id = "btn_add_h";
add_h.width = 60;
add_h.height = 60;
add_h.style.marginLeft = "50px";
container.appendChild(add_h);

const rem_h = document.createElement("img");
rem_h.src = "imagens/minus.png";
rem_h.id = "btn_rem_h";
rem_h.width = 40;
rem_h.height = 40;
container.appendChild(rem_h);

const add_m = document.createElement("img");
add_m.src = "imagens/add.png";
add_m.id = "btn_add_m";
add_m.width = 60;
add_m.height = 60;
add_m.style.marginTop = "10px";
add_m.style.marginLeft = "100px";
container.appendChild(add_m);

const rem_m = document.createElement("img");
rem_m.src = "imagens/minus.png";
rem_m.id = "btn_rem_m";
rem_m.width = 40;
rem_m.height = 40;
container.appendChild(rem_m);

function adicionarHomem(){
        num_homens += 1;
        contador_h.innerText = num_homens;
        atualizarTotal();
}
function removerHomem(){
    if (num_homens > 0){
        num_homens -= 1;
        contador_h.innerText = num_homens;
        atualizarTotal();
    } else{
        alert("Não é possível retirar mais elementos desse tipo!");
    }
}
function adicionarMulher(){
    num_mulheres += 1;
    contador_m.innerText = num_mulheres;
    atualizarTotal();
}
function removerMulher(){
    if (num_mulheres > 0){
        num_mulheres -= 1;
        contador_m.innerText = num_mulheres;
        atualizarTotal();
    } else{
        alert("Não é possível retirar mais elementos desse tipo!");
    }

}
function atualizarTotal(){
    totalLabel.innerText = num_homens + num_mulheres;
}
function resetarValores(){
    num_homens = 0;
    num_mulheres = 0;
    contador_h.innerText = num_homens;
    contador_m.innerText = num_mulheres;
    atualizarTotal();
}


// !!! As funções de event listener devem vir depois das funções e declarações de tudo
document.getElementById("btn_add_h").addEventListener("click", adicionarHomem);
document.getElementById("btn_rem_h").addEventListener("click", removerHomem);
document.getElementById("btn_add_m").addEventListener("click", adicionarMulher);
document.getElementById("btn_rem_m").addEventListener("click", removerMulher);
document.getElementById("btn_reset").addEventListener("click", resetarValores);