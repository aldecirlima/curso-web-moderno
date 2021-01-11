const schedule = require('node-schedule')

// string do schaduleJob = */5 = cada 5 segundos *9 as 9 horas
// * * a qualquer minuto e qualquer segundo de sábado = 6
// ordem segundos, minutos, hora, dia do mes, mes, dia semana (0 - 6)
const tarefa1 = schedule.scheduleJob('*/5 * 10 * * 6', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // só dias da semana
regra.hour = 10
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})