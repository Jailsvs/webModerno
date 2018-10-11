/**
 * IIFE -> Immediately Invoked Function Expression
 * Uma função autoinvocada é muito usada para fugir do escopo global no browser já que ela será executada
 * dentro do escopo de função assim que for lida
 */


 //Para criar uma funcao autoinvocada basta criar um funcao anonima delimitada por () e ao final já invocala () = (myFunction())()
 (function (){
     console.log('Será executada na hora! ');
     console.log('Foge do escopo mais abrangente');
 })()