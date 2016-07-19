var glob = require('glob'),
    _ = require('lodash'),
    PATH = require('path'),
    definitionsFiles = glob.sync('./src/definitions/**/*.js', {});

var compiledDefs = []

_.forEach(definitionsFiles, function(defFile){
  var def = require(PATH.resolve(defFile));
  if(_.isArray(def)){
    compiledDefs = _.union(compiledDefs, def);
  }
})

module.exports = compiledDefs;
