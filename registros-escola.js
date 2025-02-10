// Declara um array com os nomes dos alunos
let alunos = ['Luis Afonso', 'Ariane Vasconcelos', 'Caio Almeida', 'Ana Beatriz Perino'];
// Declara um array com as médias correspondentes dos alunos
let medias = [10, 8, 7.5, 9];

// Cria um array de duas dimensões que contém os alunos e suas médias
let lista = [alunos, medias];

// Função para adicionar um estudante e sua média
function adicionarEstudante(nome, media) {
    // Verifica se o nome do estudante já está na lista
    if (lista[0].includes(nome)) {
        console.log(`${nome} já está na lista!`); // Mensagem se o estudante já existir
    } else {
        // Adiciona o nome do estudante ao array de alunos
        lista[0].push(nome);
        // Adiciona a média correspondente ao array de médias
        lista[1].push(media);
        console.log(`${nome} foi adicionado com a média ${media}`); // Mensagem de confirmação
    }
}

// Chama a função para adicionar um novo estudante
adicionarEstudante('Gabriel Dias', 5.5);

// Função para exibir o nome e a nota de um estudante
function exibeNomeENota(aluno) {
    // Verifica se o aluno está na lista
    if (lista[0].includes(aluno)) {
        // Obtém o índice do aluno na lista
        let indice = lista[0].indexOf(aluno);
        // Obtém a média correspondente ao índice do aluno
        let mediaAluno = lista[1][indice];
        console.log(`${aluno} tem a média ${mediaAluno}`); // Exibe a média do aluno
    } else {
        console.log(`Estudante ${aluno} não existe na lista!`); // Mensagem se o aluno não for encontrado
    }
}

// Chama a função para exibir a média de Ariane e Lucas
exibeNomeENota('Ariane Vasconcelos');
exibeNomeENota('Lucas');

// Função para remover um estudante e sua média
function removerEstudante(nome) {
    // Verifica se o nome do estudante está na lista
    if (lista[0].includes(nome)) {
        // Obtém o índice do estudante na lista
        let indice = lista[0].indexOf(nome);
        // Remove o nome do estudante do array de alunos
        lista[0].splice(indice, 1);
        // Remove a média correspondente do array de médias
        lista[1].splice(indice, 1);
        console.log(`${nome} foi removido da lista`); // Mensagem de confirmação
    } else {
        console.log(`${nome} não está na lista!`); // Mensagem se o estudante não for encontrado
    }
}

// Exemplo de uso da função
removerEstudante('Gabriel Dias');
removerEstudante('Lucas');

// Função para encontrar o estudante com a maior média
function estudanteComMaiorMedia() {
    let maiorMedia = 0; // Inicializa a maior média como 0
    let nomeEstudante = ''; // Inicializa o nome do estudante com uma string vazia

    // Laço para percorrer todas as médias
    for (let i = 0; i < lista[1].length; i++) {
        // Verifica se a média atual é maior que a maior média encontrada
        if (lista[1][i] > maiorMedia) {
            maiorMedia = lista[1][i]; // Atualiza a maior média
            nomeEstudante = lista[0][i]; // Atualiza o nome do estudante correspondente
        }
    }

    return nomeEstudante; // Retorna o nome do estudante com a maior média
}

// Chama a função para encontrar o estudante com a maior média
let estudanteComMaiorNota = estudanteComMaiorMedia();

// Função para filtrar estudantes com média acima de um valor específico
function filtrarEstudantePormedia(valor) {
    let estudantesFiltrados = []; // Array para armazenar os estudantes filtrados

    // Laço para percorrer todas as médias
    for (let i = 0; i < lista[1].length; i++) {
        // Verifica se a média do estudante é maior que o valor fornecido
        if (lista[1][i] > valor) {
            estudantesFiltrados.push(lista[0][i]); // Adiciona o nome do estudante ao array filtrado
        }
    }
    
    return estudantesFiltrados; // Retorna o array com os estudantes filtrados
}
// Exibe o estudante com a maior média
console.log(`O estudante com a maior média é ${estudanteComMaiorNota}`);

// Chama a função para filtrar estudantes com média acima de 7
let estudantesAcimaDaMedia = filtrarEstudantePormedia(7);

// Exibe os estudantes com média acima de 7
console.log(`Estudantes com a média acima de 7: ${estudantesAcimaDaMedia}`);

function verificarMediaMinima(valor) { // Percorre a lista de médias
    for (let i = 0; i < lista[1].length; i++) { //Verifica se a média do estudante é menor ou igual ao valor fornecido
        if (lista[1][i] <=valor) {
            return false; // Retorna false se encontrar uma média abaixo ou igual ao valor
        }
    }
    return true; // Retorna true se todas as médias forem acima do valor
}

let todosAcimaDaMedia = verificarMediaMinima(5);
console.log(`Todos os estudantes têm a média acima de 5 ? ${todosAcimaDaMedia}`);// Exibe true ou false se os estudantes estão ou não acima da média

function exibirEstudantesEmOrdemDeMedia() {
    // Cria um array de objetos com estudantes e suas médias
    const estudantesComMedias = [];

    for (let i = 0; i < lista[0].length; i++) {
        estudantesComMedias.push({
            nome: lista[0][i], // Nome do estudante
            media: lista[1][i] // Média do estudante
        });
    }

    // Ordena o array de objetos em ordem decrescente de média
    estudantesComMedias.sort((a, b) => b.media - a.media);

    // Exibe os estudantes e suas médias em ordem
    for (let i = 0; i < estudantesComMedias.length; i++) {
        console.log(`${estudantesComMedias[i].nome} tem a média ${estudantesComMedias[i].media}`);
    }
}

// Exemplo de uso da função
exibirEstudantesEmOrdemDeMedia();


