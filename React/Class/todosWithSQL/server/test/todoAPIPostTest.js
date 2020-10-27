//import the server
var app = require('../server');

//import an assertion library
//    assert => say or do something 
//      test => test is validity
var supertest = require('supertest');

//write the test
describe('2. POST request from Todo API', function() {
    //Invoke our 1st test
    it('2.1. should return HTTP status of 200 and JSON data', function(done) {  
        let newTodo ={description: 'complete unit tests abracadabra', isComplete: false}      
        supertest(app)            
            .post('/todos')
            .set('Accept', 'application/json')  
            //Sending a todo object and create a new todo          
            .send(newTodo)
            .expect(201)
            .expect(/abracadabra/, done)
        })  
})