var service = {};
var definitions = require('./definitions'),
    _ = require('lodash');

    var propMap= {
      formats: 'name',
      extensions: 'ext'
    };

service.list = function(options){
  var list = [],
      doptions = {
        category: null,
        list: 'extensions'
      };
  if( !_.isPlainObject(options) ){
    doptions.category = options;
  }else{
      doptions = _.merge(doptions, options);
  }

  list = _.map(definitions, function(definition){
    if(_.isPlainObject(definition) ){
        if(_.isString(doptions.category) &&
            _.isString(definition.category) &&
            definition.category.toLowerCase() === doptions.category.toLowerCase()
          ){
          return definition[propMap[doptions.list]].toLowerCase();
        }

        if( !_.isString(doptions.category) ){
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
