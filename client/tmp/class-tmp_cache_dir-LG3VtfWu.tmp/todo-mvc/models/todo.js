define('todo-mvc/models/todo', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({
		title: DS['default'].attr('string'),
		isCompleted: DS['default'].attr('boolean')
	}).reopenClass({
		FIXTURES: [{
			id: 1,
			title: 'Completed Ember.js Tutorial',
			isCompleted: false
		}, {
			id: 2,
			title: 'Checkout some ember stuff',
			isCompleted: true
		}, {
			id: 3,
			title: 'Solve world hunger (with Ember)',
			isCompleted: false
		}]
	});

});