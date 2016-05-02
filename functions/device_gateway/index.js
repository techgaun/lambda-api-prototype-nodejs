'use strict';

/*
 * Author: Samar Acharya
 * Date created: 04/31/2016
 */

var _ = require('lodash');
var async = require('async');
var utils = require('../../utils/utils');
var response_texts = require('../../config/consts').response_texts;
var config = require('../../config');
var log = require('../../utils/logger');
var ddb = require('../../utils/ddb');

exports.gatewayHandler = function (e, ctx) {
    // return ctx.succeed(JSON.stringify(e));
    try {
        var data = JSON.parse(JSON.stringify(e));
        var insert_total = {
            total: data.length
        }
        data = _.filter(data, function(el) {
            var result = utils.validateInput(el);
            if (result.errors.length > 0) {
                log.info('Error on data: ' + JSON.stringify(result));
            }
            return (result.errors.length <= 0);
        });
        // ctx.succeed(JSON.stringify(data));
        insert_total.valid = data.length;
        async.eachLimit(data, config.aws.dynamodb.maxParallelCreates, function(thermostatItem, next) {
            ddb.createItem(thermostatItem)
                .then(function() {
                    next(null);
                })
                .catch(next);
        }, function(err) {
            if (err) {
                console.log(JSON.stringify(err));
                throw new Error('Error on inserting items: ' + err.message);
            } else {
                ctx.succeed(_.merge(response_texts.success, insert_total));
            }
        });
    } catch(e) {
        // ctx.fail(JSON.stringify(e.message));
        console.log('Error: ' + JSON.stringify(e));
        ctx.fail(response_texts.fail);
    }
}
