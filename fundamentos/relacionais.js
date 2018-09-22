//Compara se 1 == 1 --> true;
console.log('1)', '1' == 1);

//Compara se 1 == 1 e String == Number --> false
console.log('2)', '1' === 1);

//Compara se 1 != 1 diferente um do outro
console.log('3)', '1' != 1);
console.log('4)', '1' != 3);//true
//Compara se sao diferentes e o tipo de variavel também
console.log('5', '1' !== 2);
console.log('6', '1' !== '1');


console.log('7', 3 < 2);
console.log('8', 3 > 2);
console.log('9', 3 <= 2);
console.log('10', 3 >= 2);


const d1 = new Date(0);
const d2 = new Date(0);

//Referencia de mémoria é a mesma ?? --> false
console.log('11', d1 == d2);
console.log('12', d1 === d2);

//Por se tratarem de numeros sao iguais --> true
console.log('13', d1.getTime() == d2.getTime());
console.log('14', d1.getTime() === d2.getTime());

//False == false;
console.log('15', undefined == null);
//Nao sao o mesmo tipo mas sao os mesmos valores false false
console.log('16', undefined === null);//False
