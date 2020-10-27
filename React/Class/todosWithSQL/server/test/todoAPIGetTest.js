//import the server
var app = require('../server');

//import an assertion library
//    assert => say or do something 
//      test => test is validity
var supertest = require('supertest');

//write the test
describe('1. GET request from Todo API', function() {
    //Invoke our 1st test
    it('1.1. should return HTTP status of 200 and JSON data', function(done) {        
        supertest(app)
            //Assertion Part
            .get ('/todos')
            //Validity Part             
            //Functon(done)
            .expect(200, done)
        })

    //Invoke our 2nd test
    it('1.2. should return HTTP status of 200 and JSON data', function(done) {        
        supertest(app)
            //Assertion Part
            .get ('/todos')
            //Validity Part 
            //Search for the string json with case insensitive (don't worry about case) (i)
            //expecting content type to be json
            .expect('Content-Type', /json/i, done )
        })    
})