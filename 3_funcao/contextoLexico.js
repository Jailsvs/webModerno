const valor = 'Global';

//Contexto Lexico da Função será dentro de módulo do node
function minhaFuncao()
{
    console.log(valor);
}

minhaFuncao();//Imprimi 'Global'

function execucao()
{
    const valor = 'Local';
    minhaFuncao();
}

execucao()
