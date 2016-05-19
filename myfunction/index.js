'use strict';

var moment = require('../lib/node_modules/moment');
var lib = require('../lib');

module.exports = function (context, req) {
	context.log('Node.js HTTP trigger function processed a request. RequestUri=%s', req.originalUrl);
	context.log('I am running running on ' + process.env.env);
	context.log(moment().format());
    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: lib.hello(req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done();
}
