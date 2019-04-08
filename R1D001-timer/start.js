var express = require('express');
var app = express();
var moment = require('moment');

var startDay = moment("2019-03-31", "YYYY-MM-DD");
// console.log(startDay);

var finishDay = moment(startDay).add(100, 'days');
// console.log(finishDay);

var halfTime = moment(startDay).add(50, 'days');

var string = `I started my #100DaysOfCode challenge on 
${startDay.format('MM/DD/YYYY')} and it will end on ${finishDay.format('MM/DD/YYYY')}.
Half time is on ${halfTime.format('MM/DD/YYYY')}!`

app.get('/', function (req, res) {
    res.send(string);
});

app.listen(3000, function () {
    console.log(string);
});


