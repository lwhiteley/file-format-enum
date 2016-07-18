var FFE = {},
    _ = require('lodash'),
    definitions = require('./src/definitions'),
    services = require('./src/services');

// FFE.definitions = definitions;
FFE = _.merge(FFE, services);

module.exports = FFE;
