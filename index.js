/* 
* @Author: Mike Reich
* @Date:   2015-11-05 11:46:57
* @Last Modified 2015-11-06
*/

'use strict';

var App = require('@nxus/core').Application

var app = new App({
  debug: false, 
  script: true,
  version: "1.0.0",
  appDir: __dirname
});

app.start()

module.exports = app