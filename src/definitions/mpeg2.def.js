var _ = require('lodash');
var commonProps = {
    category: 'video',
    longName: '',
    name: 'MPEG-2',
    container: '?',
    audioCodecs: 'AAC, MP3, MPEG-2 Part 3, others',
    videoCodingFormats: 'H.262',
    notes: 'Old, but very widely used due to installed base.'
}

var definitions = [
    _.merge({}, commonProps, {
        ext: '.mpg'
    }),

    _.merge({}, commonProps, {
        ext: '.m2v'
    }),

    _.merge({}, commonProps, {
        ext: '.mpeg'
    })
];


module.exports = definitions;