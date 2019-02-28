//Importando o módulo filesystem do node
const fs = require('fs');

//Caminho onde está localizado o arquivo a ser lido
const caminho = __dirname + '/arquivo.json';
/**
 * Lendo um arquivo de forma sincrona
 */

//variavel conteudo receberá o que será retornado do fsReadFileSynce
const conteudo = fs.readFileSync(caminho, 'utf-8');

console.log(conteudo);

//lendo arquivo de forma asincrona
fs.readFile(caminho, 'utf-8', (error, conteudo) => {
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}:${config.db.port}`);
});

//Lendo um diretorio
fs.readdir(__dirname, (erro, arquivos) => {
    console.log("Conteúdo de uma pasta");
    console.log(arquivos);
});