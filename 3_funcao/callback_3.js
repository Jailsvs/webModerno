//e - evento se você nao utilizar ele não necessariamente deve ser declarado;

/**
 * Pega o objeto document(página atual) através da tag body[0] primeiro elemento da página -- através do click vai disparar o no console a string o evento ocorreu
 */
document.getElementsByTagName('body')[0].onclick = function (e){
    console.log('O evento ocorreu');
} 