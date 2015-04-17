define('todo-mvc/router', ['exports', 'ember', 'todo-mvc/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  exports['default'] = Router.map(function () {
    this.resource('todos', { path: '/' }, function () {
      this.route('active');
      this.route('complete');
    });
  });

});