/**
 * Importações de módulos node
 */
const schedule = require('node-schedule');

/** 
 * Criando a primeira tarefa temporizada
 * scheduleJob ('') -> refere a representacao de segundos, min, hora, mes, dia e etc..
 */
const job_1 = schedule.scheduleJob('*/5 * 16 * * 6', function() {
    console.log('Executando a primeira tarefa programada', new Date().getSeconds());
});

/**
 * Executando setTimeout depois de realizar o camando de um função
 */
setTimeout(function() {
    job_1.cancel();
    console.log('Cancelando Job I...');
}, 20000);

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 6)];
regra.hour = 16;
regra.second = 30;

const job_2 = schedule.scheduleJob(regra, function() {
    console.log('Executando tarefa II', new Date().getSeconds());
});