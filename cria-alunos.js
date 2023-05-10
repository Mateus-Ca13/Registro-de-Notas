const criaAluno = document.querySelector('.cria-aluno');

var nomesLista = ["José Almeida", "Stefanny Alberg", "Luiz de Fátima", 
                  "Hiago Mendes", "Caroline Lins", "Vanessa Rosses", 
                  "Thiago Farias", "Victor Almeida", "Gustavo Filho",
                  "Ana Luiza Santos", "Marcelo Dantas", "Pedro Santiago", 
                  "André Silva", "Paola Pereira", "Jéssica Cabral", 
                  "Mateus Cancelo", "Matias dos Santos", "Leonardo Lumens"]
                  
var notasLista = ["4.0", "4.5", "5.0", "5.5", "6.0", "6.5", "7.0", "7.5", "8.0", "8.5", "9.0", "9.5", "10.0"]
function fezProvaFinal() {
    if (Math.random() < 0.5) {
        console.log('fez');
      return provaFinalFoiFeita(notasLista[Math.floor(Math.random() * notasLista.length)]);;
    } else {
        console.log('nao fez');
      return "NaN";
    }
  }

criaAluno.addEventListener('click', function (event) {
    event.preventDefault();
     
        var trimestre1 = notasLista[Math.floor(Math.random() * notasLista.length)];
        var trimestre2 = notasLista[Math.floor(Math.random() * notasLista.length)];
        var trimestre3 = notasLista[Math.floor(Math.random() * notasLista.length)];
        var provaFinal = fezProvaFinal();

        var notaFinal = calculaNotaFinal(trimestre1, trimestre2, trimestre3, provaFinal);
        var situacao = situacaoAluno(notaFinal);

        var aluno = {
                nome: nomesLista[Math.floor(Math.random() * nomesLista.length)],
                trimestre1: trimestre1,
                trimestre2: trimestre2,
                trimestre3: trimestre3,
                provaFinal: provaFinal,
                notaFinal: notaFinal,
                situacao: situacao
        }

        var alunoTr = montatr(aluno)
            var tabela = document.querySelector('.corpo-tabela');
            tabela.appendChild(alunoTr);


})
