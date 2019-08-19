/*
    practice v2 : 코드 시작 시간의 분이 될 때 마다 1시간 간격으로 batch job
 */

const schedule = require('node-schedule');

console.log(new Date().getMinutes());
const test = new Date().getMinutes();

const rule = new schedule.RecurrenceRule();
rule.minute = test - 1;

const batchjob = schedule.scheduleJob(rule, () => {
    console.log('batch job success');
});
