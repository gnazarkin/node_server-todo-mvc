define('todo-mvc/controllers/todos', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].ArrayController.extend({
		actions: {
			clearCompleted: function clearCompleted() {
				var completed = this.filterBy('isCompleted', true);
				completed.invoke('deleteRecord');
				completed.invoke('save');
			},
			createTodo: function createTodo(newTitle) {
				// Create the new Todo model
				var todo = this.store.createRecord('todo', {
					title: newTitle,
					isCompleted: false
				});
				// Clear the input text field
				this.set('newTitle', '');

				// Save the new model
				todo.save();
			}

		},

		hasCompleted: function hasCompleted() {
			return this.get('completed') > 0;
		},

		completed: (function () {
			return this.filterBy('isCompleted', true).get('length');
		}).property('@each.isCompleted'),

		remaining: (function () {
			return this.filterBy('isCompleted', false).get('length');
		}).property('@each.isCompleted'),

		inflection: (function () {
			var remaining = this.get('remaining');

			return remaining === 1 ? 'item' : 'items';
		}).property('remaining'),

		allAreDone: (function (key, value) {
			console.log(key + ': ' + value);
			if (value === undefined) {
				return this.get('length') > 0 && this.isEvery('isCompleted', true);
			} else {
				this.setEach('isCompleted', value);
				this.invoke('save');
				return value;
			}
		}).property('@each.isCompleted')

	});

});