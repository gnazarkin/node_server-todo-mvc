/* jshint ignore:start */

define('todo-mvc/config/environment', ['ember'], function(Ember) {
  var prefix = 'todo-mvc';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("todo-mvc/tests/test-helper");
} else {
  require("todo-mvc/app")["default"].create({"name":"todo-mvc","version":"0.0.0.ca64c794"});
}

/* jshint ignore:end */
