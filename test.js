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
})
