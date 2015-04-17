define('todo-mvc/controllers/todo', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            editTodo: function editTodo() {
                this.set('isEditing', true);
            },
            acceptChanges: function acceptChanges() {
                // Remove isEditing property
                this.set('isEditing', false);

                // If the todo is empty, delete it
                // otherwise save it with the new title
                if (Ember['default'].isEmpty(this.get('model.title'))) {
                    this.send('removeTodo');
                } else {
                    this.get('model').save();
                }
            },
            removeTodo: function removeTodo() {
                var todo = this.get('model');
                todo.deleteRecord();
                todo.save();
            }
        },

        isEditing: false
    });

});