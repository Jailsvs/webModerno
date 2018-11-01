Array.prototype.forEach_2 = function(callback)
{
    for(let i = 0; i < this.length; i++)
    {
        callback(this[i], i, this)
    }
}

const NbaPlayers = ['Stephen Curry','Andre Iguodala','Lebron James','Draymond Green','Pau Gasol', 'Kevin Duran'];

//Callback para cada lemento do array é executado a function que recebe o nome + o indice 
NbaPlayers.forEach_2(function(nome, indice)
{
    console.log(`${ indice + 1 } )` + ` ${ nome }`);
});