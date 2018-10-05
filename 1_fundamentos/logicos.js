function fazerCompras(trabalhoA, trabalhoB)
{
    if(trabalhoA && trabalhoB)
    {
        console.log("Comprar TV de 50 polegadas");
        console.log("Tomar Sorveter");
    }else{
        if(trabalhoA || trabalhoB)
        {
            console.log("Comprar TV de 32 polegadas");
            console.log("Tomar Sorvete");
        }else
        {
            console.log("Ficar em Casa");
        }
    }
}

fazerCompras(false, false);


function compras(trabalho_1, trabalho_2)
{
    const comprarSorvete = trabalho_1 || trabalho_2;
    const comprarTv50 = trabalho_1 && trabalho_2;
    /*const comprarTv32 = !!(trabalho_1 ^ trabalho_2)*/ //Operador bitwise xor
    const comprarTv32 = trabalho_1 != trabalho_2;
    const manterSaudavel = !comprarSorvete;

    return {comprarSorvete: comprarSorvete, comprarTv50: comprarTv50, comprarTv32: comprarTv32, manterSaudavel: manterSaudavel}
    //P ode-se omitior a chave quando a chave e o valor serão o mesmo
    /*return {comprarSorvete, compraTv50, comprarTv32, manterSaudavel}*/
    
}

console.log(compras(false, false));