// BASE SETUP
// call the packages we need
var express    = require('express'),        // call express
    app        = express(),                 // define our app using express
    bodyParser = require('body-parser');

app.use(function (request, response, next) {
response.header("Access-Control-Allow-Origin", "http://localhost:4200");
response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
response.header("Access-Control-Allow-Resource", "*");
response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
next();
});
 
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
var port = process.env.PORT || 8080;        // set our port
 
// ROUTES FOR OUR API
 
var router = express.Router();              // get an instance of the express Router
 
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(request, response) {
    response.json({ message: 'hooray! welcome to our api!' });   
});
 
// more routes for our API will happen here
 
// REGISTER OUR ROUTES
// all of our routes will be prefixed with /api/v1
app.use('/api/v1/', router);

var mongoose   = require('mongoose');
mongoose.connect('mongodb://gnazarkin:secretpassword@ds061691.mongolab.com:61691/todo-mvc'); // connect to our database

var Todo     = require('../models/todo');

router.route('/todos')
 
    // create a todo (accessed at POST http://localhost:8080/api/v1/todos)
    .post(function(request, response) {
        
        var todo = new Todo();      // create a new instance of the Todo model
        todo.title = request.body.todo.title;  // set the todo's title (comes from the request)
        todo.isCompleted = request.body.todo.isCompleted; // set the todo's isComplete property 
 
 
        // save the todo and check for errors
        todo.save(function(error) {
            if (error)
                response.send(error);
 
            response.json({ message: 'Todo created!' });
        });
    })

    .get(function(request, response) {

    	Todo.find(function(error, todos) {
    		if (error) response.send(error);
    		response.json({
    			todos: todos
    		});
    	});
    });

router.route('/todos/:todo_id')
 
    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function (request, response) {
        Todo.findById(request.params.todo_id, function (error, todo) {
            if (error) response.send(error);
            response.json({
                todo: todo
            });
        });
    })

    // update the todo with this id (accessed at PUT http://localhost:8080/api/todo/:todo_id)
    .put(function (request, response) {
 
        // use our todo model to find the todo we want
        Todo.findById(request.params.todo_id, function(error, todo) {
            if (error) response.send(error);
 
            // update the todo info
            todo.title = request.body.todo.title;
            todo.isCompleted = request.body.todo.isCompleted;
            
            // save the todo
            todo.save(function(error) {
                if (error) response.send(error);
                response.json({ message: 'Todo updated!' });
            });
        });
    })
    
    // delete the todo with this id (accessed at DELETE http://localhost:8080/api/todos/:todo_id)
    .delete(function (request, response) {
        Todo.remove({
            _id: request.params.todo_id
        }, function(error, todo) {
            if (error) res.send(err);
 
            response.json({ message: 'Successfully deleted' });
        });
    });

// Add CORS headers


// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);