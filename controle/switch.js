const imprimirResultado = function(nota)
{
    switch(nota)
    {
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

imprimirResultado(0);
imprimirResultado(5);
imprimirResultado(10);
imprimirResultado(12);