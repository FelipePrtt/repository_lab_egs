var valor_1 = 0;
var operacao = "";
var valor_2 = 0;

var container = document.getElementById("container");

const estilo = document.createElement("style");
estilo.type = 'text/css';
estilo.innerHTML = `
    #container{
        background-color: black;
        width: 20%;
        height: 75%;
        margin: auto;
        margin-top: 5%;
    }

    #campo_res{
        text-color: white
    }

`;

container.appendChild(estilo);

const campo_resultado = document.createElement("label");
campo_resultado.id = "campo_res";
campo_resultado.innerText = "Resposta";
container.appendChild(campo_resultado);

const btn_v1 = document.createElement("button");
container.appendChild(btn_v1);