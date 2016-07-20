file-formats
==============

Library of file formats and extensions. Able to search by category.



```bash
npm install --save file-formats
```

interface
```
______________________________________________________
fileFormats.list(category)

PARAMS:
category (String): Category or type to search by
                   Possible values: video | image | audio |  ....
RETURNS
list (Array): List of extensions or values searched for
______________________________________________________

fileFormats.categories()

PARAMS:
none

RETURNS
categories (Array): List of categories available
______________________________________________________

```

```js
//EXAMPLE
var fileFormats = require('file-formats');

//eg. Get a list of all extensions available
console.log(fileFormats.list())

//eg. Get a list of video file extensions available
console.log(fileFormats.list('video'))

```

### Contribute

- Feel free to submit PRs with additional formats or updated information
- Please see [definitions](src/definitions) for examples of how to add extension definitions

### Notes
- Formats still being filled out (an ongoing process)
- If something is not there that you know of, submit a PR
- This library can expand beyond the basic categories of audio, video, and image
- The aim is to have an extensive list of formats and whatever categories they fall in

### Useful Links
- https://en.wikipedia.org/wiki/Audio_file_format
- https://en.wikipedia.org/wiki/Video_file_format
- https://en.wikipedia.org/wiki/Image_file_formats
