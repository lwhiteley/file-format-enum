var FFE = {},
    _ = require('lodash'),
    services = require('./src/services')(__dirname);

FFE = _.merge(FFE, services);

module.exports = FFE;
