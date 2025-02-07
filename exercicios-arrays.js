let alunos = ['João', 'Juliana', 'Caio', 'Ana'];
let medias = [10, 8, 7.5, 9];

let lista= [alunos, medias];

function adicionarEstudante(nome, media) {
  console.log('Função adicionarestudante foi chamada.');
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
        console.log('Estudante não existe na lista!');
    }
}



exibeNomeENota('Juliana');
exibeNomeENota('Gabriel');

console.log(alunos);
console.log(medias);