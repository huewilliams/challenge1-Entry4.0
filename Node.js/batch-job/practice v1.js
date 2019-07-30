/*
    practice v1 : node-schedule 을 이용한 batch job
 */

const schedule = require('node-schedule');

// 특정 시간에 한번 수행하기 , month 는 0부터 시작함
const date = new Date(2019, 6, 30, 14, 55, 0);

console.log(date);

const schedule1 = schedule.scheduleJob(date, () => {
    console.log('schedule1 response');
});

// 설정한 시간/분/초 가 되면 수행 ( rule.minute = 42 : 매 시각의 42 분이 될 때마다)
const rule = new schedule.RecurrenceRule();
rule.second = 5;

const schedule2 = schedule.scheduleJob(rule, () => {
    console.log('schedule2 response');
});
