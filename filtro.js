var filtroAluno = document.querySelector('.pesquisa-aluno');

filtroAluno.addEventListener('input', function (){
    var alunos = document.querySelectorAll('.aluno');

    if (filtroAluno.value.length > 0){
        for (var i = 0; i < alunos.length; i++) {
            var aluno = alunos[i];
            var nomeTd = aluno.querySelector('.nome');
             var nome = nomeTd.textContent;
            var expressao = new RegExp(this.value,"i")

          if (!expressao.test(nome)) {
                 aluno.classList.add("filtro-tabela");
             }else{
                 aluno.classList.remove("filtro-tabela");
             } }
    } else {
        for (var i = 0; i < alunos.length; i++) {
            var aluno = alunos[i];
            aluno.classList.remove("filtro-tabela");
        }
    }

    
})