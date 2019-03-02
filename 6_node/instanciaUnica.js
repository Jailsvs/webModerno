/**
 *   Node faz cache do módulos
 */

//Exportando um módulo que retorna um objeto
module.exports = {
    valor: 1,
    incrementar() {
        this.valor++;
    }
}