var _ = require('lodash');
var commonProps = {
  category: 'video',
  videoCodingFormats: 'MPEG-4 Part 2, H.263, H.264',
  container: 'MPEG-4 Part 12',
  notes: 'Common video format for cell phones'
}

var definitions = [
  _.merge({
     ext: '.3gp',
    name: '3GPP',
    audioCodecs: 'AMR-NB, AMR-WB, AMR-WB+, AAC-LC, HE-AAC v1 or Enhanced aacPlus (HE-AAC v2)'
  },commonProps),

  _.merge({
     ext: '.3g2',
    name: '3GPP2',
    audioCodecs: 'AMR-NB, AMR-WB, AMR-WB+, AAC-LC, HE-AAC v1 or Enhanced aacPlus (HE-AAC v2), EVRC, SMV or VMR-WB'
  },commonProps)
];


module.exports = definitions;
