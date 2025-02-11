
function concatArrays(...arrays) { // Função para concatenar com o operador spread
    return [].concat(...arrays);
}

const nome = ['Gabriel', 'Ariane', 'Benjamin'];
const idade = [33, 28, 5];
const anoDeNascimento = [1991, 1996, 2019];

const arraysConcatenados = concatArrays(nome, idade, anoDeNascimento);// Concatena as variáveis acima
console.log(arraysConcatenados);

// reutilizando as variáveis para o exercício 2
const soma = anoDeNascimento.reduce((acc, valorAtual) => acc + valorAtual, 0 ); // Soma dos valores(ano de nasciimento)
console.log('Soma dos Anos de Nascimento:', soma);

const listaDeCores1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const ListaDeCores2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

const novaListaDeCores = listaDeCores1.concat(ListaDeCores2); // Concatena as duas listas acima
const listafinal = [... new Set (novaListaDeCores)]; // Remove os valores/string duplicados

console.log(listafinal);

function filtaNumerosPares(arr) {
    return arr.filter(num => num % 2 === 0); // Função para retornar somente números pares
}
 const numArray = [2, 3, 7, 8, 10, 13, 15, 22, 42, 55, 80];
 const listaNumerosPares = filtaNumerosPares(numArray);
 console.log(listaNumerosPares);
 
 const listaNumeros = [3, 6, 9, 4, 12, 2, 7];
 function filtraNumeros(arr) {
    return arr.filter(num => num % 3 === 0 && num > 5);
 }
// Filtra os números da listaNumeros que são divisíveis por 3 e maiores que 5
const numerosFiltrados = filtraNumeros(listaNumeros);
 console.log(numerosFiltrados);
 
function somaTudo(array) {
    return array.reduce((acum, atual) => acum + atual, 0);
    }
const somaTotal = somaTudo(numArray);
console.log(somaTotal);
