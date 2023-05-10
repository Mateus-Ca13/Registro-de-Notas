var alunos = document.querySelectorAll('.aluno');
var tabela = document.querySelector('.corpo-tabela');
var overlay = document.querySelector('.overlay');
var abaAluno = document.querySelector('.aba-aluno');
var botaoExcluir =  document.querySelector('.concluir-exclusao');
var botaoCancelar = document.querySelector('.cancelar-exclusao');
var nomeAluno = document.querySelector('.aluno-nome');
let alunoSelecionado;
   
// Detector de clique em uma aluno

tabela.addEventListener('dblclick', function(event){
    abaAluno.classList.remove('invisivel');
    nomeAluno.innerHTML = event.target.parentNode.querySelector("td:first-child").textContent;

    alunoSelecionado = event.target.parentNode;
    alunoSelecionado.classList.add('selecionado');
    overlay.classList.add('area-esmaecida');
});

// Botão de CANCELAR exclusão de cadastro

botaoCancelar.addEventListener('click', function(){
    abaAluno.classList.add('invisivel');
    alunoSelecionado.classList.remove('selecionado');
    overlay.classList.remove('area-esmaecida');
    alunos.classList.remove('selecionado');
   
    
});


// Botão de CONFIRMAR exclusão de cadastro

botaoExcluir.addEventListener('click', function(){

    alunoSelecionado.classList.add('exclusao-tabela');
    abaAluno.classList.add('invisivel');
    overlay.classList.remove('area-esmaecida');

    setTimeout(function () {
        alunoSelecionado.remove();
        
    }, 300);
    
});



