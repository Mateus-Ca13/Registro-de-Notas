const inputProva = document.querySelector('#form-nota-prova');
const botaoProva = document.querySelector('#form-prova-check');
const botaoCadastro = document.querySelector('.botao-cadastro');

//Checkbox que alterna entre a inclusão da prova final.
botaoProva.addEventListener('change', fezProva);

botaoCadastro.addEventListener('click', function (event){
    event.preventDefault();

    var form = document.querySelector('.form-cadastro')
    
    // Aqui é declarada a var aluno que contem a função que cria o objeto aluno.
    var aluno = ObtemAluno(form);

    // Aqui é declarada a var alunoTr que executa a função montaTr
    var alunoTr = montatr(aluno);

    //verificação de array erros provindos da função validaAluno.

    var erros = validaAluno(aluno);

    if (erros.length > 0) {
        exibeMensagemErro(erros); 
        
        return;
    } else {
        var ul = document.querySelector('.mensagens-erro');
        ul.innerHTML = "";
    }

    // Aqui é adicionado a tr dentro do tbody.
    var tabela = document.querySelector('.corpo-tabela');
    tabela.appendChild(alunoTr);
    
    form.reset();
})
// funções -----------------------------------------------------------------------------------------------------------

// Essa função libera o uso do input dependendo da condição do checkbox.
function fezProva () {
    if (botaoProva.checked) {
        inputProva.disabled = false;
    } 
    else {
        inputProva.value = "";
        inputProva.disabled = true;
    }

}

// Aqui é criado o objeto aluno com os valores dos inputs no form.
function ObtemAluno (form) {

    aluno = {
    nome: form.nomeForm.value,
    trimestre1: form.trimestre1Form.value,
    trimestre2: form.trimestre2Form.value,
    trimestre3: form.trimestre3Form.value,
    provaFinal: provaFinalFoiFeita(form.notaProvaForm.value),
    notaFinal: calculaNotaFinal(form.trimestre1Form.value, form.trimestre2Form.value, form.trimestre3Form.value, form.notaProvaForm.value),
    situacao: situacaoAluno(calculaNotaFinal(form.trimestre1Form.value, form.trimestre2Form.value, form.trimestre3Form.value, form.notaProvaForm.value)),

}

    return aluno
}


function montatr(aluno) {

    var alunoTr = document.createElement('tr');
    alunoTr.classList.add('aluno');

// São salvos os valores provindos da função pra cada uma das variáveis.
  var nomeTd = montaTd(aluno.nome, "nome");
  var trimestre1Td = montaTd(aluno.trimestre1, "trimestre1" ); 
  var trimestre2Td = montaTd(aluno.trimestre2, "trimestre2"); 
  var trimestre3Td = montaTd(aluno.trimestre3, "trimestre3"); 
  var provaFinalTd = montaTd(aluno.provaFinal, "prova-final"); 
  var notaFinalTd = montaTd(aluno.notaFinal, "nota-final");
  var situacaoTd = montaTd(aluno.situacao, "situacao");

  //Aqui são adicionados as td's dentro da Tr.
  alunoTr.appendChild(nomeTd);
  alunoTr.appendChild(trimestre1Td);
  alunoTr.appendChild(trimestre2Td);
  alunoTr.appendChild(trimestre3Td);
  alunoTr.appendChild(provaFinalTd);
  alunoTr.appendChild(notaFinalTd);
  alunoTr.appendChild(situacaoTd);

    return alunoTr;
}

  //Aqui são criadas as Td's e também são vinculados aos tds criados, os valores impostos nos inputs do cadastro e as classes respectivas.

function montaTd (dado, classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe)
    return td;
}

// Aqui as funções são válidadas e a função segue retornando true neste caso.

function validaAluno(aluno) {

    var erros = [];

    if (valida1trimestre(aluno.trimestre1) && valida2trimestre(aluno.trimestre2) && valida3trimestre(aluno.trimestre3) && validaProvaFinal(aluno.provaFinal) && validaNome(aluno)) {
        return true ;
    }

    if (!validaNome(aluno)) {
        erros.push("O nome do aluno é inválido");    
    }

    if (!valida1trimestre(aluno.trimestre1)) {
        erros.push("A nota do primeiro trimestre é inválida");
    }

    if(!valida2trimestre(aluno.trimestre2)){
        erros.push("A nota do segundo trimestre é inválida");
    }

    if(!valida3trimestre(aluno.trimestre3)){
        erros.push("A nota do terceiro trimestre é inválida");
    }

    if(!validaProvaFinal(aluno.provaFinal)){
        erros.push("A nota da prova final é inválida");
    }


    return erros;
}

//Esta função verifica a array de erros e cria uma li e seu textContent para cada erro presente.

function exibeMensagemErro(erros) {

    var ul = document.querySelector('.mensagens-erro');
    ul.innerHTML = "";
    
    erros.forEach(function(erro){
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
        li.classList.add('lista-erro');

    })

};