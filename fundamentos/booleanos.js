let isAtivo = false;

console.log(isAtivo);

isAtivo = true;

console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log('Os verdadeiros ...');
console.log(!!33);
console.log(!! -1);
console.log(!!' ');//'' != ' '
console.log(!!" ");
console.log(!!{});
console.log(!![]);
console.log(!!` `);
console.log(!! Infinity);
console.log(!! (isAtivo = true));

console.log("Os falsos");
console.log(!!0);
console.log(!!'');
console.log(!!undefined);
console.log(!!NaN);
console.log(!!null);
console.log(!!(isAtivo = false));

//Se um valor for verdadeiro ele já retorna a expressao como verdadeira
console.log(!!(''|| null || NaN || [] || 'epa'));

//Retornando o primeiro valor verdadeiro encontrado na função   
console.log(('' || null || undefined || 123 ||'Cod3r'));

let nome = '';

//Verificando se a String for false imprimir o 'Desconhecido' caso verdadeiro imprimi o nome da variavel
console.log(nome || 'Desconhecido');

nome = 'Bruce Wayne'
console.log(nome || 'Desconhecido');