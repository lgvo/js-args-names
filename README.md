# Function Arguments Names

[![Build Status](https://travis-ci.org/lgvo/js-args-names.svg?branch=master)](https://travis-ci.org/lgvo/js-args-names)
[![Coverage Status](https://coveralls.io/repos/lgvo/js-args-names/badge.svg?branch=master&service=github)](https://coveralls.io/github/lgvo/js-args-names?branch=master)
[![npm version](https://badge.fury.io/js/js-args-names.svg)](http://badge.fury.io/js/js-args-names)
[![Code Climate](https://codeclimate.com/github/lgvo/js-args-names/badges/gpa.svg)](https://codeclimate.com/github/lgvo/js-args-names)
[![npm](https://img.shields.io/npm/dm/js-args-names.svg)](https://www.npmjs.com/package/js-args-names)


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
