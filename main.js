var request = require('request');
var cron = require('cron').CronJob;

var team = [
  "alexi",
  "maria",
  "haris",
  "hcraig",
  "joey",
  "matt",
  "rachel",
  "connor",
  "siva",
  "ruth",
  "sebastien_dery",
  "tom"
]

function runCron(){
  var person = selectPerson();
  notifySlack(person);
}

function getCohort(){
  var persons = new Set();
  while(persons.size < 3){
    persons.add(selectPerson())
  }
  return Array.from(persons);
}

function runServices(){
  let cohort = getCohort();
  notifyCoffee(workers[0]);
  notifyTrash(workers[1]);
  notifyDishwasher(workers[2]);
}

function selectPerson(){
  var i = Math.floor(Math.random() * (team.length));
  var person = team[i];
  return person;
}

function notifyCoffee(person){
  var message = {
    "username": "coffee_bot",
    "channel" : "#chores",
    "text" : `Congratulations @${person}, you have been randomly selected to clean the caffeine dispenser today.`,
  }
  request(
      {
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

function notifyTrash(person){
  var message = {
    "username": "trash_bot",
    "channel" : "#chores",
    "text" : `Congratulations @${person}, you have been randomly selected to take out the trash today.`,
  }
  request(
      {
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

function notifyDishwasher(person){
  var message = {
    "username": "dishwasher_bot",
    "channel" : "#chores",
    "text" : `Congratulations @${person}, you have been randomly selected to run the dishwasher today.`,
  }
  request(
      {
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
  runServices,
  team,
  getCohort
}
