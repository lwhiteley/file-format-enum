var _ = require('lodash');
var commonProps = {
  category: 'video', longName: 'Flash Video', name: 'FLV',
  container:'Audio, video, text, data',
  audioCodecs: 'SWF, F4V, ISO base media file format',
  videoCodingFormats: 'Adobe Flash Platform', notes: 'Developed by the Adobe Flash Platform'
}

var definitions = [
  _.merge({}, commonProps, {
     ext: '.flv',
    notes: 'Use of the H.264 and AAC compression formats in the FLV file format has some limitations and authors of Flash Player strongly encourage everyone to embrace the new standard F4V file format.[2] De facto standard for web-based streaming video (over RTMP).',
    name: 'FLV',
    container:'Audio, video, text, data',
    audioCodecs: 'MP3, ADPCM, Nellymoser, Speex, AAC',
    videoCodingFormats: 'VP6, Sorenson Spark, Screen video, Screen video 2, H.264'
  }),

  _.merge({}, commonProps, {
     ext: '.fv4',
    notes: 'Replacement for FLV',
    name: 'FV4',
    container:'MPEG-4 Part 12',
    audioCodecs: 'MP3, AAC',
    videoCodingFormats: 'H.264'
  }),

  _.merge({}, commonProps, {
     ext: '.f4p'
  }),

  _.merge({}, commonProps, {
     ext: '.f4a'
  }),

  _.merge({}, commonProps, {
     ext: '.f4b'
  })
];


module.exports = definitions;
