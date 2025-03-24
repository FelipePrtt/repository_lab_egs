const container = document.getElementById("container");



// Campo "Total"
const totalTexto = document.createElement("p");
totalTexto.innerText = "Total";
totalTexto.style.fontSize = "24px"; 
totalTexto.style.fontWeight = "bold"; 
container.appendChild(totalTexto);
totalTexto.style.marginLeft = 150;
const totalLabel = document.createElement("label");
totalLabel.id = "totalLabel";
totalLabel.innerText = "0"; 
totalLabel.style.fontSize = "32px"; 
totalLabel.style.marginBottom = "20px"; 
totalLabel.style.marginLeft = "170px";
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


//"Botões"
const add_h = document.createElement("img");
add_h.src = "imagens/add.png";
add_h.width = 60;
add_h.height = 60;
add_h.style.marginLeft = "50px";
container.appendChild(add_h);

const rem_h = document.createElement("img");
rem_h.src = "imagens/minus.png";
rem_h.width = 40;
rem_h.height = 40;
container.appendChild(rem_h);

const add_m = document.createElement("img");
add_m.src = "imagens/add.png";
add_m.width = 60;
add_m.height = 60;
add_m.style.marginTop = "10px";
add_m.style.marginLeft = "100px";
container.appendChild(add_m);

const rem_m = document.createElement("img");
rem_m.src = "imagens/minus.png";
rem_m.width = 40;
rem_m.height = 40;
container.appendChild(rem_m);