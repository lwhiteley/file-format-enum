var definitions = [{
        ext: '.gif',
        name: 'GIF',
        longName: '',
        container: 'N/A',
        videoCodingFormats: 'N/A',
        audioCodecs: 'none',
        category: 'video,image',
        notes: 'Simple animation, inefficient compression, no sound, widely supported'
    }, {
        ext: '.gifv',
        name: 'GIFV',
        longName: 'Video alternative to GIF',
        container: 'HTML',
        videoCodingFormats: 'Any',
        audioCodecs: 'none',
        category: 'video,image',
        notes: 'Not standardized, and not a real video file in the classical meaning since it merely references the real video file (e.g. a .webm file), which has to exist separately elsewhere. A .gifv "file" is simply a HTML webpage which includes a HTML5 video tag, where the video has no sound. As there were large communities online which create art using the medium of short soundless videos in GIF format, GIFV was created as a functionally similar replacement with vastly smaller filesizes than the inefficient GIF format.'
    },

];


module.exports = definitions;