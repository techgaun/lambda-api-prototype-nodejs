'use strict';

/*
 * Author: Samar Acharya
 * Date created: 04/31/2016
 */

var Validator = require('jsonschema').Validator;
var v = new Validator();

var inputSchema = {
    "id": "/GatewayData",
    "type": "object",
    "properties": {
        "ts": {"type": "string"},
        "device_address": {"type": "string"},
        "local_temperature": {"type": ["number"]},
        "system_mode": {"type": "string"},
        "heat_setpoint": {"type": ["number"]},
        "cool_setpoint": {"type": ["number"]}
    }
};

function validateInput(input) {
    v.addSchema(inputSchema, '/GatewayData');
    return v.validate(input, inputSchema, {throwError: false});
}

exports.validateInput = validateInput;
