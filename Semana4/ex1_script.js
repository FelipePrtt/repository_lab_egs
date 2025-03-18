function Pessoa(){
    var nome;
    var email;
    var data_nascimento;
    var tel_fixo;
    var tel_celular;
    var matricula;
}
function Professor(){
    Pessoa.call(this);
    var area = document.getElementById('area');
    var latters = document.getElementById('latters');
}
function Aluno(){
    Pessoa.call(this);
    var curso = document.getElementById('curso');
}

function ativadorCampos(){
    var checkBoxProfessor = document.getElementById('tipo_professor');
    var checkBoxAluno = document.getElementById('tipo_aluno');
    var campo_professor = document.getElementById('campo_professor');
    var campo_aluno = document.getElementById('campo_aluno');

    campo_professor.style.display = 'none';
    campo_aluno.style.display = 'none';

    if (checkBoxAluno.checked){
        campo_aluno.style.display = 'block';
        checkBoxProfessor.checked = false;
    }
    if (checkBoxProfessor.checked){
        campo_professor.style.display = 'block';
        checkBoxAluno.checked = false;
    }
}

window.onload = function(){
    var form = document.getElementById('formulario');
    form.addEventListener('submit', criarCadastro())
}

function criarCadastro(){
    var checkBoxProfessor = document.getElementById('tipo_professor');
    var checkBoxAluno = document.getElementById('tipo_aluno');

    if (checkBoxProfessod.checked){
        var p = new Professor();
        p.nome = document.getElementById('nome');
        p.email = document.getElementById('email');
        p.data_nascimento = document.getElementById('data_nascimento');
        p.tel_fixo = document.getElementById('tel_fixo');
        p.tel_celular = document.getElementById('tel_celular');
        p.matricula = document.getElementById('matricula');
        p.area = document.getElementById('area');
        p.latters = document.getElementById('latters');
        document.write(p.nome);
    } else if (checkBoxAluno.checked){
        var a = new Aluno();
        a.nome = document.getElementById('nome');
        a.email = document.getElementById('email');
        a.data_nascimento = document.getElementById('data_nascimento');
        a.tel_fixo = document.getElementById('tel_fixo');
        a.tel_celular = document.getElementById('tel_celular');
        a.matricula = document.getElementById('matricula');
        a.curso = document.getElementById('curso');
        document.write(a.nome);
    }
}