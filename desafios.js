const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

array.forEach((element, index) => {
  console.log(`Elemento ${element} na posição ${index}`);
})

function executaOperacaoEmArray(array, funcaoCallback) {
    return array.map(funcaoCallback);
}

function dobraNumero(num) {
    return num * 2;
}
 const listaNumeros = [1, 2, 3];
 const listaNumerosDobrados = executaOperacaoEmArray(listaNumeros, dobraNumero);
 console.log(listaNumerosDobrados);
 