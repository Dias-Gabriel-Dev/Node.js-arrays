const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const nomesAtualizados = new Set(nomes); // Atribui valores únicos ao array eliminando valores repetidos.

const listaNomesAtualizados = [... new Set(nomes)]; // Está pegando o resultado com a função 'Set' e formando um novo array através do '...'

// console.log(nomesAtualizados);
console.log(listaNomesAtualizados);

