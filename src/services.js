var service = {};
var definitions = require('./definitions'),
    _ = require('lodash');

    var propMap= {
      formats: 'name',
      extensions: 'ext'
    };

service.list = function(category, options){
  var list = [],
      _options = {
        list: 'formats'
      };
  var doptions = _.merge(_options, options);

  list = _.map(definitions, function(definition){
    if(_.isPlainObject(definition) ){
        if(_.isString(category) &&
            _.isString(definition.category) &&
            definition.category.toLowerCase() === category.toLowerCase()
          ){
          return definition[propMap[doptions.list]].toLowerCase();
        }

        if( !_.isString(category) ){
          return definition[propMap[doptions.list]].toLowerCase();
        }
    }

  })

  return _.uniq(_.compact(list));
}

service.definition = function(name){
  if(_.isString(name)){
    return _.find(definitions, {name:name.toUpperCase()})
  }
  return null;
}

module.exports = service;
