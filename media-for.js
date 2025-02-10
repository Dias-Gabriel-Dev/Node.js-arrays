const notas1 = [10, 6.5, 8, 7.5];
const notas2 = [9, 6, 6];
const notas3 = [8.5, 9.5];

// primeiro agrupamento do array em um matriz
const notasGerais = [notas1, notas2, notas3];

// iniciando a variável que irá armazenar a soma das médias
let somaDasMedias = 0;

// primeiro 'for' para percorrer cada array dentro da matriz
for (let i = 0; i < notasGerais.length; i++) {
    let somaDasNotas= 0 // soma das notas para o array atual

    // segundo 'for' para percorrer cada nota dentro do array atual
    for (let j = 0; j < notasGerais[i].length; j++) {
        somaDasNotas += notasGerais[i][j]; // acúmulo das notas
    }

    //cálculo da média do array atual
    const mediaAtual = somaDasNotas / notasGerais[i].length;

    // acúmulo da média do array atual na soma das médias
    somaDasMedias += mediaAtual;
}

// cáuculo da média geral dividindo a soma das médias pelo número de arrays
const mediaGeral = somaDasMedias / notasGerais.length;

console.log(`A média geral das notas é ${mediaGeral}`);
