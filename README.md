file-formats
==============

Library of file formats and extensions. Able to search by category.



```bash
npm install --save file-formats
```

interface
```
fileFormats.list(category)

METHODS:
______________________________________________________
category (String): Category or type to search by
                   Possible values: video | image | audio |  ....
RETURNS
list (Array): List of extensions or values searched for
______________________________________________________

```

```js
var fileFormats = require('file-formats');

//eg. Get a list of all extensions available
console.log(fileFormats.list())

//eg. Get a list of video file extensions available
console.log(fileFormats.list('video'))

```

### Contribute

- Feel free to submit PRs with additional formats or updated information
- Please see [definitions](src/definitions) for examples of how to add extension definitions
