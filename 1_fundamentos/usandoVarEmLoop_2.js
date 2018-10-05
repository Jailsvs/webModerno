const array = [];
for(var i = 0; i < 10; i++)
{
    array.push(function(){
        console.log(i);
    });

    /*console.log(array[i] = i);*/
}

array[0]();

