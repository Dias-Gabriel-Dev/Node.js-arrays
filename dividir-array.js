const listadeEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara',
'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos',
'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata',
'Daisy', 'Camilo'];

const sala1 = listadeEstudantes.slice(0, listadeEstudantes.length / 2);
const sala2 = listadeEstudantes.slice(listadeEstudantes.length / 2);

console.log(sala1);
console.log(sala2);