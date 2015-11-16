/* 
* @Author: Mike Reich
* @Date:   2015-11-06 08:10:06
* @Last Modified 2015-11-06
*/

'use strict';

var program = require('commander');

var CLI = function(app) {
  this.app = app;

  app.on('app.load', function() {
    app.emit('cli.register', _register);
  });

  app.on('app.launch', function() {
    program.parse(process.argv);
  });

  app.on('cli.info', (msg) => console.log(msg))
  app.on('cli.error', (msg) => console.error(msg))

  program.version(app.config.version)

  var _register = function(command, description, cb) {
    program
      .command(command)
      .description(description)
      .action(cb);
  }
}

module.exports = function(app) {
  return new CLI(app)
};
