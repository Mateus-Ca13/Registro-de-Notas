
var alunos = document.querySelectorAll('.aluno');

//Aqui são listados cada dado do aluno, assim como selecionados os respectivos textContents.

for(var i = 0; i < alunos.length ; i++){
    var aluno = alunos[i];

    var nomeTd = document.querySelector('.nome');
    var nome = nomeTd.textContent;

    var trimestre1Td = aluno.querySelector('.trimestre1')
    var trimestre1 = trimestre1Td.textContent;

    var trimestre2Td = aluno.querySelector('.trimestre2')
    var trimestre2 = trimestre2Td.textContent;

    var trimestre3Td = aluno.querySelector('.trimestre3')
    var trimestre3 = trimestre3Td.textContent;

    var provaFinalTd = aluno.querySelector('.prova-final')
    var provaFinal = provaFinalTd.textContent;

    var notaFinalTd = aluno.querySelector('.nota-final')

    var situacaoTd = aluno.querySelector('.situacao')

    //Aqui são criadas variáveis de validação que são linkadas as funções de validação.
    var nomeValido = validaNome(aluno);
    var trimestre1Valido = valida1trimestre(trimestre1);
    var trimestre2Valido = valida2trimestre(trimestre2);
    var trimestre3Valido = valida3trimestre(trimestre3);
    var provaFinalValida = validaProvaFinal(provaFinal);

    //sequencia de verificações feitas em cada valor por funções (analisando se valores ultrapassam.)

function validaNome(aluno) {
    if (aluno.nome == "") {
        return false;
    }
    else {
        return true;
    }
}

    function valida1trimestre (trimestre1) {
        if (trimestre1 < 0 || trimestre1 > 10 || trimestre1 == "") {
            return false;
        }
        else{
            return true;
        }
    }

    function valida2trimestre (trimestre2) {
        if (trimestre2 < 0 || trimestre2 > 10 || trimestre2 == "") {
            return false;
        } else{
            return true;
        }
    }

    function valida3trimestre (trimestre3) {
        if (trimestre3 < 0 || trimestre3 > 10 || trimestre3 == "") {
            return false;
        } else{
            return true;
        }
    }

    function validaProvaFinal (provaFinal) {
        if (provaFinal < 0 || provaFinal > 10 ) {
            return false;
        } else{
            return true;
        }
    }


    if (!trimestre1Valido) {
        trimestre1Td.textContent = "Nota Inválida";
        trimestre1Valido = true;
        trimestre1Td.classList.add('td_invalido');
    }
    if (!trimestre2Valido) {
        trimestre2Td.textContent = "Nota Inválida";
        trimestre2Valido = true;
        trimestre2Td.classList.add('td_invalido');
    }
    if (!trimestre3Valido) {
        trimestre3Td.textContent = "Nota Inválida";
        trimestre3Valido = true;
        trimestre3Td.classList.add('td_invalido');
    }
    if (!provaFinalValida) {
        provaFinalTd.textContent = "Nota Inválida";
        provaFinalValida = true;
        provaFinalTd.classList.add('td_invalido'); 
    }
    if (trimestre1Valido && trimestre2Valido && trimestre3Valido && provaFinalValida) {
        var notaFinal = calculaNotaFinal(trimestre1, trimestre2, trimestre3, provaFinal);
        
        if (notaFinal > 10) {
            notaFinalTd.textContent = "10.0" 
        } else {
            notaFinalTd.textContent = notaFinal;  
        }

        var situacao = situacaoAluno(notaFinal); 
        
    }
}

    function calculaNotaFinal(trimestre1, trimestre2, trimestre3, provaFinal) {
    if (provaFinal > 0) {
            var notaFinal = 0;
            notaFinal = ((parseFloat(trimestre1) + parseFloat(trimestre2) + parseFloat(trimestre3)) / 3 * 0.7) + (parseFloat(provaFinal)*0.3);
    } else {
            notaFinal = ((parseFloat(trimestre1) + parseFloat(trimestre2) + parseFloat(trimestre3)) / 3)
            provaFinalTd.textContent = "NaN"
        }
        return notaFinal.toFixed(1);
    }
    
    function situacaoAluno (notaFinal) {
        var situacao;
        if (notaFinal >= 7.0) {
            situacao = "APROVADO";
        } else {
           situacao = "REPROVADO";
        } 
        return situacao;
    }

    function provaFinalFoiFeita (provaFinal) {
        if (provaFinal > 0) {
            return provaFinal;
        }else{
            provaFinal = "NaN";
            return provaFinal;
        }
    }