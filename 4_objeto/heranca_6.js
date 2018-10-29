function Filme(ID, nome)
{
    this.nome = nome,
    this.ID = ID

}

const filme = new Filme(01, 'O Senhor dos Anéis');
const filme_2  = new Filme(02, 'O Exorcismo de Emily Rose');

console.log(filme, filme_2);

//Simulando o Operador New
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    //executa a funcao f passando como parametro a funcao f e os parametros
    f.apply(obj, params)
    return obj
}

const filme_3 = novo(Filme, 03, 'O Sexto Sentido');
const filme_4 = novo(Filme, 04, 'O Chamado');

console.log(filme_3);
console.log(filme_4);