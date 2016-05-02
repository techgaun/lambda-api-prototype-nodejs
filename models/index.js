'use strict';

/*
 * Author: Samar Acharya
 * Date created: 04/31/2016
 */

var vogels = require('vogels');
var config = require('../config/');

var https  = require('https');

var dynamodb = new vogels.AWS.DynamoDB({
  httpOptions: {
    agent: new https.Agent({
      secureProtocol: 'TLSv1_method',
      ciphers: 'ALL'})
  },
  region: config.aws.dynamodb.region
  });
vogels.dynamoDriver(dynamodb);

console.log("Environment is: " + process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
    //do nothing. use envvars or shared credentials
    // vogels.AWS.config.loadFromPath('./models/credentials.json');
}/* else {
    vogels.AWS.config.update({
        // accessKeyId: config.aws.accessKeyId,
        // secretAccessKey: config.aws.secretKeyId,
        region: config.aws.dynamodb.region
    });
}*/
