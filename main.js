'use strict'
var request = require('request');

var team = [
  "alexi",
  "haris",
  "hcraig",
  "joey",
  "matt",
  "connor",
  "siva",
  "ruth",
  "ruggero",
  "sebastien_dery",
  "tom",
  "joe",
  "abdulhuq811",
  "jm",
];

function getCohort(){
  const persons = new Set();
  while(persons.size < 3){
    persons.add(selectPerson())
  }
  return Array.from(persons);
}

function runServices(){
  const cohort = getCohort();
  notifyCoffee(cohort[0]);
  notifyTrash(cohort[1]);
  notifyDishwasher(cohort[2]);
}

function selectPerson(){
  const i = Math.floor(Math.random() * (team.length));
  const person = team[i];
  return person;
}

function notifyCoffee(person){
  const message = {
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
  const message = {
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
  let message = {
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
  selectPerson,
  runServices,
  team,
  getCohort
}
