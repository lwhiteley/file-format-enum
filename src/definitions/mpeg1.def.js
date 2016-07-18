var _ = require('lodash');
var commonProps = {
  category: 'video', longName: '', name: 'MPEG-1',
  container:'MPEG-1 part 1',
  audioCodecs: 'MPEG-1 Audio Layer I, MPEG-1 Audio Layer I, MPEG-1 Audio Layer III (MP3)',
  videoCodingFormats: 'MPEG-1 part 2', notes: 'Old, but very widely used due to installed base.'
}

var definitions = [
  _.merge({}, commonProps, {
     ext: '.mpg'
  }),

  _.merge({}, commonProps, {
     ext: '.mp2'
  }),

  _.merge({}, commonProps, {
     ext: '.mpeg'
  }),
  _.merge({}, commonProps, {
     ext: '.mpe'
  }),
  _.merge({}, commonProps, {
     ext: '.mpv'
  })
];


module.exports = definitions;
