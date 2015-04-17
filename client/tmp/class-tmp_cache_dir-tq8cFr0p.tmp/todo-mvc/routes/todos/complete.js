define('todo-mvc/routes/todos/complete', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        model: function model() {
            return this.store.filter('todo', function (todo) {
                return todo.get('isCompleted');
            });
        },
        renderTemplate: function renderTemplate(controller) {
            this.render('todos.index', { controller: controller });
        }
    });

});