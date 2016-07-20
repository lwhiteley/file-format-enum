module.exports = function(root) {
    var glob = require('glob'),
        _ = require('lodash'),
        PATH = require('path');
    //definitionsFiles = glob.sync('./src/definitions/**/*.js', {root: root});

    var definitionsFiles = [
        './definitions/3gp.def.js',
        './definitions/audio.def.js',
        './definitions/flash.def.js',
        './definitions/gif.def.js',
        './definitions/mp4.def.js',
        './definitions/mpeg1.def.js',
        './definitions/mpeg2.def.js',
        './definitions/video.def.js'
    ];

    var compiledDefs = [];

    _.forEach(definitionsFiles, function(defFile) {
        var def = require(defFile);
        if (_.isArray(def)) {
            compiledDefs = _.union(compiledDefs, def);
        }
    })

    return compiledDefs;

};
