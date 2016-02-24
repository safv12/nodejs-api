'use strict';

module.exports = function() {

  // Insert models bellow and sync
  var User = require('./User.js');
  User.sync();

};
