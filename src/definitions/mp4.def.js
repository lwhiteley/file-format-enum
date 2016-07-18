var _ = require('lodash');
var commonProps = {
  category: 'video', longName: 'MPEG-4 Part 14', name: 'MP4',
  container:'MPEG-4 Part 12',
  audioCodecs: 'Advanced Audio Coding (AAC), MP3, others',
  videoCodingFormats: 'H.264, MPEG-4 Part 2, MPEG-2, MPEG-1'
}

var definitions = [
  _.merge({}, commonProps, {
     ext: '.mp4',
    notes: ''
  }),

  _.merge({}, commonProps, {
     ext: '.m4p',
    notes: 'Utilizes DRM'
  }),

  _.merge({}, commonProps, {
     ext: '.m4v',
     audioCodecs: 'Advanced Audio Coding (AAC), Dolby Digital',
     videoCodingFormats: 'H.264',
    notes: 'Developed by Apple, used in iTunes. Very similar to MP4 format, but may optionally have DRM. File format for videos for iPods and PlayStation Portables developed by Apple'
  })
];


module.exports = definitions;
