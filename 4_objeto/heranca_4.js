function MeuObjeto() {};

console.log(MeuObjeto.prototype);

//Instanciando objetos através de um função
const objeto_2 = new MeuObjeto();
const objeto_3 = new MeuObjeto();


console.log(objeto_2.__proto__ == objeto_3.__proto__);//true


console.log(objeto_2.__proto__ == Object.prototype);//false

//Mostra que ao instanciar um objeto apartir de um função ela herdara caracteriscas dessa funcao
console.log(objeto_3.__proto__ == MeuObjeto.prototype);//true

//Resumindo

//Objeto tem um __proto__ que aponta para a sua funcao que possui um prototype
console.log((new MeuObjeto).__proto__ == MeuObjeto.prototype);

//A Funcao MeuObjeto.__proto__ aponta para uma Funcao que possui o prototype
console.log(MeuObjeto.__proto__ === Function.prototype);

console.log(Function.prototype.__proto__ === Object.prototype)

//A Funcao Object é o nível mais alto então não aponto para ninguem
console.log(Object.prototype.__proto__ === null);
