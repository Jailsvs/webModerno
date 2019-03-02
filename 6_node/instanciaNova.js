/**
 * Como é possível retornar uma nova instância já que o node por padrão guarda os modulos em cache ?
 */

//É possível usar uma Factory - Factory retorna uma nova instância 
module.exports = () => {
    return {
        valor: 1,
        incrementar() {
            this.valor++;
        }
    }
}