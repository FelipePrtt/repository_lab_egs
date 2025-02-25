let arrayDados = [];

function atualizarArray(event) {
    event.preventDefault();

    let dado = document.getElementById('dado').value;
    arrayDados.push(dado); //insere o dado
    arrayDados.sort(); //ordena o array

    let lista = document.getElementById('listaDados'); //a variavel lista recebe o conteudo da tag ul (que possui o id listaDados)

    lista.innerHTML = ''; //define o conteudo da lista como ""vazio""

    arrayDados.forEach(function(dado) {
        let li = document.createElement('li');
        li.textContent = dado;
        lista.appendChild(li);
    });

    document.getElementById('dado').value = '';
}