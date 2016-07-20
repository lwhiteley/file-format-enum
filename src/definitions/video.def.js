// var _ = require('lodash');
// var commonProps = {
//   category: 'video'
// }

var definitions = [{
        ext: '.asf',
        name: 'ASF',
        longName: 'Advanced Systems Format',
        container: 'ASF',
        videoCodingFormats: 'any',
        audioCodecs: 'any',
        category: 'video',
        notes: 'Common video format for cell phones'
    }, {
        ext: '.amv',
        name: 'AMV',
        longName: '',
        container: 'Modified version of AVI',
        videoCodingFormats: 'Variant of Motion JPEG',
        audioCodecs: 'Variant of IMA, ADPCM',
        category: 'video',
        notes: 'Proprietary video file format produced for MP4 players and S1 MP3 players with video playback'
    },
    {
        ext: '.avi',
        name: 'AVI',
        longName: '',
        container: 'AVI',
        videoCodingFormats: 'any',
        audioCodecs: 'any',
        category: 'video',
        notes: 'Uses RIFF'
    }, {
        ext: '.drc',
        name: 'Dirac',
        longName: '',
        container: '?',
        videoCodingFormats: 'Dirac',
        audioCodecs: '?',
        category: 'video',
        notes: 'Uses RIFF'
    }, {
        ext: '.mxf',
        name: 'MXF',
        longName: 'Material Exchange Format',
        container: 'MXF',
        videoCodingFormats: '?',
        audioCodecs: '?',
        category: 'video',
        notes: ''
    }, {
        ext: '.mkv',
        name: 'Matroska',
        longName: '',
        container: 'Matroska',
        videoCodingFormats: 'any',
        audioCodecs: 'any',
        category: 'video',
        notes: ''
    }, {
        ext: '.mng',
        name: 'MNG',
        longName: 'Multiple-image Network Graphics',
        container: 'N/A',
        videoCodingFormats: 'N/A',
        audioCodecs: 'none',
        category: 'video',
        notes: 'Inefficient, not widely used.'
    }, {
        ext: '.nsv',
        name: 'NSV',
        longName: 'Nullsoft Streaming Video',
        container: 'NSV',
        videoCodingFormats: '?',
        audioCodecs: '?',
        category: 'video',
        notes: 'For streaming video content over the Internet'
    }, {
        ext: '.ogv',
        name: 'Ogg',
        longName: '',
        container: 'Ogg',
        videoCodingFormats: 'Theora, Dirac',
        audioCodecs: 'Vorbis, FLAC',
        category: 'video',
        notes: ''
    }, {
        ext: '.ogg',
        name: 'Ogg',
        longName: '',
        container: 'Ogg',
        videoCodingFormats: 'Theora, Dirac',
        audioCodecs: 'Vorbis, FLAC',
        category: 'video',
        notes: ''
    }, {
        ext: '.mov',
        name: 'QuickTime File Format',
        longName: '',
        container: 'Quicktime',
        videoCodingFormats: 'Many',
        audioCodecs: 'AAC, MP3, others',
        category: 'video',
        notes: ''
    }, {
        ext: '.qt',
        name: 'QuickTime File Format',
        longName: '',
        container: 'Quicktime',
        videoCodingFormats: 'Many',
        audioCodecs: 'AAC, MP3, others',
        category: 'video',
        notes: ''
    }, {
        ext: '.yuv',
        name: 'Raw video format',
        longName: '',
        container: '?',
        videoCodingFormats: 'Doesnt apply',
        audioCodecs: 'Doesnt apply',
        category: 'video',
        notes: 'Supports all resolutions, sampling structures, and frame rates'
    }, {
        ext: '.rm',
        name: 'RM',
        longName: 'RealMedia',
        container: 'RealMedia',
        videoCodingFormats: 'RealVideo',
        audioCodecs: 'RealAudio',
        category: 'video',
        notes: 'Made for RealPlayer'
    }, {
        ext: '.rmvb',
        name: 'RMVB',
        longName: 'RealMedia Variable Bitrate',
        container: 'RealMedia Variable Bitrate',
        videoCodingFormats: 'RealVideo',
        audioCodecs: 'RealAudio',
        category: 'video',
        notes: 'Made for RealPlayer'
    }, {
        ext: '.roq',
        name: 'ROQ',
        longName: '',
        container: '?',
        videoCodingFormats: '?',
        audioCodecs: '?',
        category: 'video',
        notes: 'used by Quake 3'
    },
    {
        ext: '.vob',
        name: 'Vob',
        longName: '',
        container: 'VOB',
        videoCodingFormats: 'H.262/MPEG-2 Part 2 or MPEG-1 Part 2',
        audioCodecs: 'PCM, DTS, MPEG-1, Audio Layer II (MP2), or Dolby Digital (AC-3)',
        category: 'video',
        notes: 'Files in VOB format have .vob filename extension and are typically stored in the VIDEO_TS folder at the root of a DVD. The VOB format is based on the MPEG program stream format.'
    }, {
        ext: '.webm',
        name: 'WebM',
        longName: '',
        container: 'Matroska',
        videoCodingFormats: 'VP8, VP9',
        audioCodecs: 'Vorbis, Opus',
        category: 'video',
        notes: 'Royalty-free format created for HTML5 video.'
    }, {
        ext: '.wmv',
        name: 'WMV',
        longName: 'Windows Media Video',
        container: 'ASF',
        videoCodingFormats: 'Windows Media Video, Windows Media Video Screen, Windows Media Video Image',
        audioCodecs: 'Windows Media Audio, Sipro ACELP.net',
        category: 'video',
        notes: ''
    },

];


module.exports = definitions;
