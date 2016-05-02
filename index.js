'use strict';

/*
 * Author: Samar Acharya
 * Date created: 04/31/2016
 */

var gatewayHandler = require('./functions/device_gateway/index').gatewayHandler;
require('./models');
exports.handler = function(e, ctx) {
    gatewayHandler(e, ctx);
}
