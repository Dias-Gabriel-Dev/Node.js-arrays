const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// Use forEach para iterar sobre o array e registrar cada elemento com seu índice
array.forEach((element, index) => {
  console.log(`Elemento ${element} na posição ${index}`);
});

// Função para executar uma função de callback em cada elemento do array
function executaOperacaoEmArray(array, funcaoCallback) {
    return array.map(funcaoCallback); // Use map para aplicar a função de callback a cada elemento
}

// Função de callback para dobrar um número
function dobraNumero(num) {
    return num * 2; // Multiplica o número por 2
}

const listaNumeros = [1, 2, 3];
const listaNumerosDobrados = executaOperacaoEmArray(listaNumeros, dobraNumero);
console.log(listaNumerosDobrados); // Registra o novo array com números dobrados


const nomesTurmaA = [
    'João',
    'Maria Santos',
    'Pedro Almeida',
];

const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes',
];

const todosAlunos = nomesTurmaA.concat(nomesTurmaB); // Concatena os arrays
const alunoProcurado = todosAlunos.find(nome => nome === 'Ana Souza'); // Procura o aluno 'Ana Souza'

if (alunoProcurado) {
    console.log('Aluno encontrado:', alunoProcurado);
} else {
    console.log('Aluno não encontrado');
}

const numeros = [10, 20, 30, 40, 50]; // Array de números
const numeroProcurado = 30; // Número a ser procurado
let posicao = -1; // Inicializa a posição com -1

for (let i = 0; i < numeros.length; i++) { // Itera sobre o array
  if (numeros[i] === numeroProcurado) { // Verifica se o número atual é igual ao número procurado
    posicao = i; // Atribui a posição do número procurado
    break; // Interrompe o loop
  }
}
console.log(`Posição do número ${numeroProcurado}: ${posicao}`); // Registra a posição do número procurado

const numerosParaMultiplicar = [6, 9, 12, 15, 18, 21]; // Array de números

console.log('Elmentos do array multiplicados por 3'); // Registra a mensagem

numerosParaMultiplicar.forEach(numero => {  // Itera sobre o array
  const resultado = numero * 3; // Multiplica o número por 3
  console.log(resultado); // imprime o resultado
});

const indiceDoNumero18 = numerosParaMultiplicar.findIndex(numero => numero === 18); // Procura o índice do número 18

if (indiceDoNumero18 !== -1) { // Verifica se o número 18 foi encontrado
  console.log(`O número 18 está na posição ${indiceDoNumero18}`); // Registra a posição do número 18
} else {
  console.log('O numero 18 não está presente no array'); // Registra que o número 18 não está presente
}
