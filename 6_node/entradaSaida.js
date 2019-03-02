/**
 * Trabalhando com objetos e constantes globais no node
 * Vamos utilizar process para imprimir na entrada e saida padrao do computador
 */
const anonimo = process.argv.indexOf('-a') !== -1;

//console.log(anonimo);

if (anonimo) {
    process.stdout.write('Fala Anônimo!\n');
    process.exit(); //Finalizando um processo.
} else {
    process.stdout.write('Informe o seu nome:');
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\r\n', '');

        process.stdout.write(`Fala ${nome}!!\r\n`);

        process.exit();
    });
}