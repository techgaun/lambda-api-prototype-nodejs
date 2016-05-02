'use strict';

var winston = require('winston');
var config  = require('../config/');

var logger = winston.loggers.add('default', config.winston.transports);
module.exports = logger;
