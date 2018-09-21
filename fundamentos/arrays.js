const nomes = ['Carlos Eduardo', 'Daniel', 'Davi', 'Manu', 'Luana', 'Aline'];

console.log(nomes);
console.log(nomes[0]);

/*console.log(nomes.shift());*/
console.log(nomes);

nomes[5] = 'Barbara';
console.log(nomes.length);

//Adicionando valores no array
nomes.push(26, null, undefined, false);
console.log(nomes);

//Retirando valores do Array
nomes.pop();
console.log(nomes);
console.log(nomes.length);
delete nomes[8];
console.log(nomes);
nomes.push('teste');
console.log(nomes);
nomes[8] = 'Bruce Wayne';
console.log(nomes);
