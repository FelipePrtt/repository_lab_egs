var valorAtual = '0';
var valorAnterior = '';
var operacao = null;
var resetarTela = false;

var container = document.getElementById("container");

var tittle = document.createElement("title");
tittle.text = "Calculadora Simples";
container.appendChild(tittle);

const estilo = document.createElement("style");
estilo.type = 'text/css';
estilo.innerHTML = `
    #container {
        background-color: black;
        width: 20%;
        height: 75%;
        margin: auto;
        margin-top: 5%;
        padding: 20px; 
        border-radius: 20px;
        font-family: Arial, sans-serif;
    }

    #campo_res {
        width: 100%;
        height: 25%;
        background-color: black;
        color:rgb(255, 255, 255); 
        margin-bottom: 10px;
        text-align: right;
        font-size: 80px;
        padding: 10px;
        font-family: arial;
        box-sizing: border-box;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        overflow: hidden;
    }
    
    #campo_inputs{
        width: 100%;
        height: 75%;
        background-color:rgb(0, 0, 0);
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat (5, 1fr);
        gap: 10px;
    }

    .button {
        border: none;
        border-radius: 50%;
        font-size: 40px;
        cursor: pointer;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .button:hover {
        opacity: 0.8;
    }

    .gray-button {
        background-color: #a5a5a5;
        color: black;
    }

    .dark-button {
        background-color: #333;
        color: white;
    }

    .orange-button {
        background-color: #ff9f0a;
        color: white;
    }

    .zero-button {
        grid-column: span 2;
        border-radius: 50px;
        justify-content: flex-start;
        padding-left: 25px;
    }

`;

// Adicona o estilo
document.head.appendChild(estilo);

// Criação dos campos
const campo_resultado = document.createElement("div"); 
campo_resultado.id = "campo_res";
campo_resultado.innerText = valorAtual; 
container.appendChild(campo_resultado);

const campo_inputs = document.createElement("div");
campo_inputs.id = "campo_inputs";
container.appendChild(campo_inputs);

// Criação dos botões
const botoes = [
    { text: "AC", class: "button gray-button", id: "btn-ac" },
    { text: "+/-", class: "button gray-button", id: "btn-mais-menos" },
    { text: "%", class: "button gray-button", id: "btn-porcentagem" },
    { text: "/", class: "button orange-button", id: "btn-divisao" },
    { text: "7", class: "button dark-button", id: "btn-7" },
    { text: "8", class: "button dark-button", id: "btn-8" },
    { text: "9", class: "button dark-button", id: "btn-9" },
    { text: "X", class: "button orange-button", id: "btn-multiplicacao" },
    { text: "4", class: "button dark-button", id: "btn-4" },
    { text: "5", class: "button dark-button", id: "btn-5" },
    { text: "6", class: "button dark-button", id: "btn-6" },
    { text: "-", class: "button orange-button", id: "btn-menos" },
    { text: "1", class: "button dark-button", id: "btn-1" },
    { text: "2", class: "button dark-button", id: "btn-2" },
    { text: "3", class: "button dark-button", id: "btn-3" },
    { text: "+", class: "button orange-button", id: "btn-mais" },
    { text: "0", class: "button dark-button zero-button", id: "btn-0" },
    { text: ".", class: "button dark-button", id: "btn-ponto" },
    { text: "=", class: "button orange-button", id: "btn-igual" }
];

botoes.forEach(btn => {
    const button = document.createElement("button");
    button.className = btn.class;
    button.textContent = btn.text;
    button.id = btn.id;
    campo_inputs.appendChild(button);
});

// Funções de calculos e demais
function atualizarDisplay() {
    campo_resultado.innerText = valorAtual;
}

function limparTudo() {
    valorAtual = '0';
    valorAnterior = '';
    operacao = null;
    atualizarDisplay();
}

function inverterSinal() {
    valorAtual = (parseFloat(valorAtual) * -1);
    atualizarDisplay();
}

function porcentagem() {
    valorAtual = (parseFloat(valorAtual) / 100);
    atualizarDisplay();
}

function adicionarNumero(numero) {
    if (valorAtual === '0' || resetarTela) {
        valorAtual = numero;
        resetarTela = false;
    } else {
        valorAtual += numero;
    }
    atualizarDisplay();
}

function adicionarDecimal() {
    if (resetarTela) {
        valorAtual = '0.';
        resetarTela = false;
        atualizarDisplay();
        return;
    }
    
    if (!valorAtual.includes('.')) {
        valorAtual += '.';
        atualizarDisplay();
    }
}

function escolherOperacao(op) {
    if (operacao !== null && !resetarTela) {
        calcular();
    }
    valorAnterior = valorAtual;
    operacao = op;
    resetarTela = true;
}

function calcular() {
    let resultado;
    const anterior = parseFloat(valorAnterior);
    const atual = parseFloat(valorAtual);
    
    if (isNaN(anterior) || isNaN(atual)) return; //isNaN = Não é um Número, verifica tanto valor atual quanto valor anterior e sai da função caso algum deles seja falso
    
    switch (operacao) {
        case '+':
            resultado = anterior + atual;
            break;
        case '-':
            resultado = anterior - atual;
            break;
        case 'X':
            resultado = anterior * atual;
            break;
        case '/':
            resultado = anterior / atual;
            break;
        default:
            return;
    }
    
    valorAtual = resultado.toString();
    operacao = null;
    atualizarDisplay();
}

document.getElementById('btn-ac').addEventListener('click', limparTudo);
document.getElementById('btn-mais-menos').addEventListener('click', inverterSinal);
document.getElementById('btn-porcentagem').addEventListener('click', porcentagem);

document.getElementById('btn-divisao').addEventListener('click', () => escolherOperacao('/'));
document.getElementById('btn-multiplicacao').addEventListener('click', () => escolherOperacao('X'));
document.getElementById('btn-menos').addEventListener('click', () => escolherOperacao('-'));
document.getElementById('btn-mais').addEventListener('click', () => escolherOperacao('+'));

document.getElementById('btn-igual').addEventListener('click', calcular);

// Botões numéricos

// () => está sendo usado para não chamar as funções quando o script estiver sendo carregado
document.getElementById('btn-0').addEventListener('click', () => adicionarNumero('0'));
document.getElementById('btn-1').addEventListener('click', () => adicionarNumero('1'));
document.getElementById('btn-2').addEventListener('click', () => adicionarNumero('2'));
document.getElementById('btn-3').addEventListener('click', () => adicionarNumero('3'));
document.getElementById('btn-4').addEventListener('click', () => adicionarNumero('4'));
document.getElementById('btn-5').addEventListener('click', () => adicionarNumero('5'));
document.getElementById('btn-6').addEventListener('click', () => adicionarNumero('6'));
document.getElementById('btn-7').addEventListener('click', () => adicionarNumero('7'));
document.getElementById('btn-8').addEventListener('click', () => adicionarNumero('8'));
document.getElementById('btn-9').addEventListener('click', () => adicionarNumero('9'));

document.getElementById('btn-ponto').addEventListener('click', adicionarDecimal);