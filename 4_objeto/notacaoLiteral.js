const a = 'A';
const e = 'E';
const i = 'I';
const o = 'O';
const u = 'U';

/**
 * Com ES6 a duplicidade do nome do atributo igual ao valor do atributo não é mais necessário é possível omitir essa duplicidade
 */
const vogais = {
    a:a,
    e:e,
    i:i,
    o:o,
    u:u
};

console.log(vogais);

//Duplicidade não mais necessária no ES6
const vogais_2 = {
    a,
    e,
    i,
    o,
    u
};
console.log("------------------------------------------");
console.log(vogais_2);

/**
 * Notação Clássica e notação ES6 para funçoes dentro de um objeto
 */

const consoantes = {
    //forma clássica
    criarConsoante: function(){
        console.log("-------");
        console.log('B');
        return 'FIM';

    },
    criarNovaConsoante(){
        console.log("-------");
        console.log('C');
        return 'FIM';
    }
};



console.log(consoantes.criarConsoante())
console.log(consoantes.criarNovaConsoante());


