# Function Arguments Names

Get the names of a function arguments (based on AngularJS annotate).


## Installation

```sh
$ npm install --save js-args-names
```

## Usage

```javascript
var argsNames = require('js-args-names');

argsNames(function(name, value, key) {}); // ['name', 'value', 'key']

```

## ToDO
* DefaultValues: support to get ES6 default values
* docs annotations: use of javascript comments to define arguments metadata like "function(/* @param */ name)".

## License
[MIT](LICENSE)
