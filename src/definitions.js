module.exports = function(root){
  var glob = require('glob'),
      _ = require('lodash'),
      PATH = require('path'),
      definitionsFiles = glob.sync('./src/definitions/**/*.js', {root: root});

  var compiledDefs = [];
  
  _.forEach(definitionsFiles, function(defFile){
    var def = require(PATH.resolve(root, defFile));
    if(_.isArray(def)){
      compiledDefs = _.union(compiledDefs, def);
    }
  })

  return compiledDefs;

};
