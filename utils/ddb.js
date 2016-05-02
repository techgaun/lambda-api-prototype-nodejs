'use strict';

/*
 * Author: Samar Acharya
 * Date created: 04/31/2016
 */

 var async = require('async');
 var Promise = require('bluebird');
 var Thermostat = require('../models/thermostat-model');
 var config = require('../config');
 var log = require('./logger');

 Promise.promisifyAll(Thermostat);

 function createItem(thermostatItem) {
     return Thermostat
        .createAsync(thermostatItem)
        .then(function() {
            return thermostatItem;
        })
        .catch(function(e) {
            log.info('Error: '+ JSON.stringify(e));
        });
 }

exports.createItem = createItem;
