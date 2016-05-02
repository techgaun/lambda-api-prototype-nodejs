'use strict';

var vogels  = require('vogels');
var Joi     = require('joi');
var config  = require('../config/');

var Thermostat = vogels.define('Thermostat', {
  hashKey: 'device_address',
  rangeKey: 'timestamp',

  schema: {
    device_address: Joi.string().regex(/([0-9a-fA-F]{2}:){7}[0-9a-fA-F]{2}/),
    ts: Joi.string().isoDate(),
    system_mode: Joi.string(),
    local_temperature: Joi.number().positive(),
    cool_setpoint: Joi.number().positive(),
    heat_setpoint: Joi.number().positive()
  },

  tableName: config.aws.dynamodb.table
});

module.exports = Thermostat;
