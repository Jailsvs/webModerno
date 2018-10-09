let comparaComThis = function(parametro)
{
    //This tem contexto global no Node e Window no Navegador
    console.log(this === parametro);
}

comparaComThis(global);

const objeto = {}

//Passando objeto para o bind agora o this terá o contexto do objeto
comparaComThis = comparaComThis.bind(objeto);


comparaComThis(global);//Retorna false
comparaComThis(objeto);//Retorna true

//Comparando this no contexto da Arrow
let comparaComThisArrow = parametro => console.log(this === parametro);

comparaComThisArrow(global);//Retorna False
comparaComThisArrow(module.exports);//Retorna true para o contexto do node module atual

comparaComThisArrow = comparaComThisArrow.bind(objeto);

comparaComThisArrow(objeto);