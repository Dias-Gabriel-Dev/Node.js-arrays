const notas = [7, 7, 8, 9];
const novaListaNotas = [...notas, 10];

// spread operator
// novaListaNotas.push(10);

// let nota = 7.83;
// let novanota = nota;

// nota = 10;

console.log(notas);
console.log(novaListaNotas);

let num1 = 10;
let num2 = num1;

num2 += 5;
num1 += 1;

console.log(`Num1 é ${num1}. Num2 é ${num2}`);

let numeroOriginal = 10;

function alteraNumero(numero) {
  numero = 50;

  console.log(`numero do parâmetro é ${numero}. numeroOriginal é ${numeroOriginal}`);
}

alteraNumero(numeroOriginal);

notas;
const novasNotas = notas;

novasNotas.push(10);


console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${novasNotas}`);

const arrayOriginal = [7, 7, 8, 9];

function alteraArray(array) {
  array.push(10);

  console.log(`array do parâmetro é ${array}`);
  console.log(`arrayOriginal é ${arrayOriginal}`);
}

alteraArray([...arrayOriginal]);