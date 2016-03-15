var request = require('request');
var cron = require('cron').CronJob;

var team = [
  "Alexi",
  "Maria",
  "Haris",
  "Joey",
  "Matt",
  "Helen",
  "Rachel",
  "Ruggero",
  "Ruihua",
  "Ruth",
  "Seb",
  "Tom"
]

var team2 = [
  "alexi",
  "maria",
  "haris",
  "hcraig",
  "joey",
  "matt",
  "rachel",
  "ruihua",
  "ruth",
  "sebastien_dery",
  "tom"
]

// s, m, h, day, month, dayOfWeek
//var c = new cron('* * 16 * * 1-5',
//    () => {},
//    () => runCron,
//    false,
//    "America/Los_Angeles"
//)

function runCron(){
  var person = selectPerson();
  notifySlack(person);
}

function selectPerson(){
  var i = Math.floor(Math.random() * (team.length-1));
  var person = team2[i];
  return person;
}

function notifySlack(person){
  var message = {
    "username": "coffee_bot",
    "channel" : "#caffeine",
    "text" : `Congratulations @${person}, you have been randomly selected to clean the caffeine dispenser today.`,
  }
  request(
      {
//        url: PROCESS.ENV.SLACK_SECRET,
          url: "https://hooks.slack.com/services/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",
        method: "POST",
        json: message
      },
      (err, response, body) => {
        if(err) console.error(err);
        else console.info(response.statusCode,body);
      }
  )
}

module.exports = {
  runCron,
  selectPerson,
  notifySlack
}

console.log('run main.js');
