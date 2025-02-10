function numeros(crescente) {
    for (let de0A100 of crescente) {
        console.log(de0A100);
    }
}

const Array = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
numeros(Array);

const listaAnimais = ['gato', 'cachorro', 'galinha', 'vaca', 'boi'];

function imprimirLista(array) {
    for (let i = 0; i < listaAnimais.length; i++){
        console.log(`índice ${i}, elemento ${array[i]}`);
    }
}

imprimirLista(listaAnimais);

const numerosInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function somaDosNumerosInteiros(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total +=array[i];
    }
    return total;
}

console.log(somaDosNumerosInteiros(numerosInteiros));

const numeroMaiorEMenor = [99, 199, 299, 399, 499, 599, 699, 799, 899, 999];

function maiorEMenor(array) {
    let maior = array [0];
    let menor = array [0];
    for ( let i = 0; i < array.length; i++) {
        if (array [i] > maior) {
            maior = array [i];
        } else if (array [i] < menor) {
            menor = array [i];
        }
    }
    return `O maior número é ${maior} e o menor número é ${menor}`;
}

console.log(maiorEMenor(numeroMaiorEMenor));


const numerosOutros = [8, 6.5, 7,5, 9, 8, 9,5, 10, 5.5, 3, 4.5]
let soma = 0;

for (let i = 0; i < numerosOutros.length; i++) {
    soma += numerosOutros[i];
}

const media = soma / numerosOutros.length;
console.log('Array:', numerosOutros);
console.log('Média dos números:', media.toFixed(2));

const parOuImpar = [3, 6, 7, 14, 20, 25, 40, 55, 70, 15, 19, 33, 21 ,28, 56, 103, 110]
console.log('Números pares do array:');

for (let i = 0; i < parOuImpar.length; i++) {
    if (parOuImpar[i] % 2 ===0) {
    console.log(parOuImpar[i]);
    }
}    