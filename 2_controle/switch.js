const imprimirResultado = function (nota) {
    switch (nota) {
        case 0:
            {
                console.log("Reprovado");
                break;
            }
        case 5:
            {
                console.log("Recuperacão");
                break;
            }

        case 10:
            {
                console.log("Aprovado");
                break;
            }
        default:
            {
                console.log("Nota inválida! ");
                break;
            }
    }
    console.log("FIM");
}

const nome = 'Carlos';
console.log(nome);

// nome = 'Gabriel';

// imprimirResultado(0);
// imprimirResultado(10);
// imprimirResultado(12);
// imprimirResultado(5);
let nota = 8;

if (nota > 7) {
    console.log('hushs');
}


{
    console.log(nota);
}