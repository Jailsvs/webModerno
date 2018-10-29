console.log(typeof String);//Function
console.log(typeof Array);//Function
console.log(typeof Object)//Function


String.prototype.reverse = function()
{
    return this.split('').reverse().join('');
}

console.log('Escola Senai Informática'.reverse());


Array.prototype.first = function()
{
    return this[0];
}

console.log([10, 3, 5, 6].first());
console.log(['Z', 'W', 'Y'].first());