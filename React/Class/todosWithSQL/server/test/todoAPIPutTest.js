//import the server
var app = require('../server');

//import an assertion library
//    assert => say or do something 
//      test => test is validity
var supertest = require('supertest');

//write the test
describe('3. PUT request from Todo API', function() {
    //Invoke our 1st test
    it('3.1. should return HTTP status of 200 and JSON data', function() { 
        //we cannot put done in the parameter of the function 
        let newTodo ={description: 'complete unit tests avracadabra', isComplete: false}      
        supertest(app)            
            .post('/todos')
            .set('Accept', 'application/json')  
            //Sending a todo object and create a new todo          
            .send(newTodo)
            .expect(201)
            .expect(/avracadabra/)
            .end(function(err, results){
                console.log('results are: ', results.body)
                supertest(app)
                .put('/todos/' + results.body._id)
                .expect(200)
                .expect({
                    description: newTodo.description,
                    id: results.body._id,
                    //Did the isComplete go from true to false
                    isComplete: !newTodo.isComplete,
                    user_id: 2
                })
                .end(function(){
                    console.log('test complete successfully !!')
                })
            })
        })  
})