//Criando um objeto

const goku = {
    nome: 'Goku',
    raca: 'Sayajin'

}

//Com a Função Object.create() é possível definir como parametro qual será o prototipo que será utilizado
//neste caso gohan herda as caracteristicas de goku
const gohan = Object.create(goku);
gohan.nome = 'Gohan',

console.log(gohan.raca);
console.log(goku);

/**
 * Definindo o objeto pai mais algumas caracteristicas do objeto filho
 */

 const pan = Object.create(gohan, {
     nome: {value: 'Pan', writable: false, enumerable: true, }
 });

 console.log(pan.nome);

 pan.nome = 'Pan Sayajin';

 console.log(pan.nome);

 //Verificando qual propriedade é do objeto ou da classe

 for(let key in pan)
 {
     pan.hasOwnProperty(key) ?
    console.log(key) : console.log(`por Herança ${key}`);
 }