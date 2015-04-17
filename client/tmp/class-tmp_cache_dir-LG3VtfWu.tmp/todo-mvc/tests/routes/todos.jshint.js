define('todo-mvc/tests/routes/todos.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/todos.js should pass jshint', function() { 
    ok(false, 'routes/todos.js should pass jshint.\nroutes/todos.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/todos.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});