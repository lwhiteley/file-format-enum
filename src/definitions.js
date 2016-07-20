module.exports = function(root) {
    var glob = require('glob'),
        _ = require('lodash'),
        PATH = require('path');
    _definitionFiles = glob.sync(root+'/src/definitions/**/*.js');

    var compiledDefs = [];

    _.forEach(_definitionFiles, function(defFile, i) {
        var def = require((defFile));
        if (_.isArray(def)) {
            compiledDefs = _.union(compiledDefs, def);
        }
    })

    return compiledDefs;

};
