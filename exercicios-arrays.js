let alunos = ['João', 'Juliana', 'Caio', 'Ana'];
let medias = [10, 8, 7.5, 9];

let lista= [alunos, medias];

function adicionarEstudante(nome, media) {
  if (lista[0].includes(nome)) {
      console.log(`${nome} já está na lista!`);
  } else {
      lista[0].push(nome);
      lista[1].push(media);
      console.log(`${nome} foi adicionado com a média ${media}`);
  }
}

adicionarEstudante('Gabriel', 5.5);

function exibeNomeENota (aluno) {
    if(lista[0].includes(aluno)) {
        let indice = lista[0].indexOf(aluno);
        let mediaAluno = lista[1][indice];
        console.log(`${aluno} tem a média ${mediaAluno}`);
    } else {
        console.log(`Estudante ${aluno} não existe na lista!`);
    }
}



function estudanteComMaiorMedia() {
    let maiorMedia = 0; //Inicializa a maior média como 0
    let nomeEstudante = ''; //Inicializa o nome do estudante com uma string vazia

    for (let i =0; i< lista[1].length; i++) {
    // Verifica se a média atual é maior que a maior média encontrada
        if (lista[1][i] > maiorMedia) {
            maiorMedia = lista[1][i];
            nomeEstudante = lista[0][i];
        }

    }

    return nomeEstudante;
}

let estudanteComMaiorNota = estudanteComMaiorMedia();


function filtrarEstudantePormedia(valor) {
    let estudantesFiltrados = [];

    for (let i = 0; i < lista[1].length; i++) {
        if (lista[1][i] > valor) {
            estudantesFiltrados.push(lista[0][i]);
        }
    }
    
    return estudantesFiltrados;
}

let estudantesAcimaDaMedia = filtrarEstudantePormedia(7);


exibeNomeENota('Juliana');
exibeNomeENota('Lucas');



console.log(`O estudante com a maior média é ${estudanteComMaiorNota}`);
console.log(`Estudantes com a média acima de 7: ${estudantesAcimaDaMedia}`);