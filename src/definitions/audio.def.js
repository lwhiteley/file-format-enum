var _ = require('lodash');
var commonProps = {
    category: 'audio'
}

var definitions = [
    _.merge({
        ext: '.mp3',
        name: 'MP3',
        notes: 'MPEG Layer III Audio. Is the most common sound file format used today.'
    }, commonProps),

    _.merge({
        ext: '.3gp',
        name: '3GP',
        notes: 'Multimedia container format can contain proprietary formats as AMR, AMR-WB or AMR-WB+, but also some open formats'
    }, commonProps)
];


module.exports = definitions;