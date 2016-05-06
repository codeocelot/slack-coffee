var app = require('./main');
var should = require('should');
var assert = require('assert');

describe('select',()=>{
  it('should pick randomly',()=>{
      var person1 = app.selectPerson();
      var person2 = app.selectPerson();
      assert(person1 != person2);
      console.log(person1,person2);
  })
  it('should pick fairly', () => {
    let runs = 1000;
    let counts = {};
    app.team.forEach(p => counts[p] = 0);
    while(runs--){
      let person = app.selectPerson();
      counts[person]++;
      // console.log('chose ', person)
    }
    for(let p in counts) p.should.not.equal(0)
  })
  it.only('should get a fair cohort ', () => {
    let runs = 100;
    var cohorts = [];
    let counts = {};
    app.team.forEach(p => counts[p]=0);
    while(runs--){
      var cohort = app.getCohort();
      assert(cohort.length == 3);
      cohort.forEach(p => counts[p]++);
    }
    console.log(counts);
    for(let p in counts) p.should.not.equal(0)

  })
})
