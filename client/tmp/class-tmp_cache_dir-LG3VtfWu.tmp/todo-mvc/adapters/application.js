define('todo-mvc/adapters/application', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    exports['default'] = DS['default'].RESTAdapter.extend({
        host: 'http://localhost:8080',
        namespace: 'api/v1'
    });

});