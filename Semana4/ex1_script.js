function Pessoa() {
    this.nome = "";
    this.email = "";
    this.data_nascimento = "";
    this.tel_fixo = "";
    this.tel_celular = "";
    this.matricula = "";
}
function Professor() {
    Pessoa.call(this); 
    this.area = "";
    this.latters = "";
}
function Aluno() {
    Pessoa.call(this); 
    this.curso = "";
}

function ativadorCampos() {
    console.log('ativadorCampos chamado');
    var checkBoxProfessor = document.getElementById('tipo_professor');
    var checkBoxAluno = document.getElementById('tipo_aluno');
    var campo_professor = document.getElementById('campo_professor');
    var campo_aluno = document.getElementById('campo_aluno');

    campo_professor.style.display = 'none';
    campo_aluno.style.display = 'none';

    if (checkBoxAluno.checked) {
        campo_aluno.style.display = 'block';
    } else if (checkBoxProfessor.checked) {
        campo_professor.style.display = 'block';
    }
}

window.onload = function () {
    var btnEnviar = document.getElementById('btnEnviar');
    btnEnviar.addEventListener('click', criarCadastro);
}

function criarCadastro(event) {

    var checkBoxProfessor = document.getElementById('tipo_professor');
    var checkBoxAluno = document.getElementById('tipo_aluno');
    var resultado = document.getElementById('resultado');

    resultado.innerHTML = ''; 

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var data_nascimento = document.getElementById('data_nascimento').value;
    var tel_fixo = document.getElementById('tel_fixo').value;
    var tel_celular = document.getElementById('tel_celular').value;
    var matricula = document.getElementById('matricula').value;

    resultado.innerHTML += `<p><strong>Nome:</strong> ${nome}</p>`;
    resultado.innerHTML += `<p><strong>Email:</strong> ${email}</p>`;
    resultado.innerHTML += `<p><strong>Data de Nascimento:</strong> ${data_nascimento}</p>`;
    resultado.innerHTML += `<p><strong>Telefone Fixo:</strong> ${tel_fixo}</p>`;
    resultado.innerHTML += `<p><strong>Telefone Celular:</strong> ${tel_celular}</p>`;
    resultado.innerHTML += `<p><strong>Matrícula:</strong> ${matricula}</p>`;

    if (checkBoxProfessor.checked) {
        var area = document.getElementById('area').value;
        var latters = document.getElementById('latters').value;

        resultado.innerHTML += `<p><strong>Área:</strong> ${area}</p>`;
        resultado.innerHTML += `<p><strong>Latters:</strong> ${latters}</p>`;
        resultado.innerHTML += `<p><strong>Tipo de Usuário:</strong> Professor</p>`;
    } else if (checkBoxAluno.checked) {
        var curso = document.getElementById('curso').value;

        resultado.innerHTML += `<p><strong>Curso:</strong> ${curso}</p>`;
        resultado.innerHTML += `<p><strong>Tipo de Usuário:</strong> Aluno</p>`;
    }
}
