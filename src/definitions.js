module.exports = function(root) {
    var glob = require('glob'),
        _ = require('lodash'),
        PATH = require('path');
    //definitionsFiles = glob.sync('./src/definitions/**/*.js', {root: root});

    var definitionsFiles = [
        './src/definitions/3gp.def.js',
        './src/definitions/audio.def.js',
        './src/definitions/flash.def.js',
        './src/definitions/gif.def.js',
        './src/definitions/mp4.def.js',
        './src/definitions/mpeg1.def.js',
        './src/definitions/mpeg2.def.js',
        './src/definitions/video.def.js'
    ];

    var compiledDefs = [];

    _.forEach(definitionsFiles, function(defFile) {
        var def = require(PATH.resolve(root, defFile));
        if (_.isArray(def)) {
            compiledDefs = _.union(compiledDefs, def);
        }
    })

    return compiledDefs;

};
