const objeto = {
    a:1, b:2, c:3, soma: () =>  a + b + c 
}

//Transformando objeto em JSON
console.log(JSON.stringify(objeto));//Funcao foi excluida, pois nao faz parte do formato textual


//Convertendo JSON em objeto

//console.log(JSON.parse("{ a: 1 , b: 2 , c: 3 }"));
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"));
/**
 * Todos os atributos em formato JSON são delimitados pelo ""
 */
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'));//Formato correto JSON
//JSON pode conter objetos e arrays dentro dele
console.log(JSON.parse('{ "a": 1, "string": "Hello World!", "c": true, "d": {}, "e": [] }'));