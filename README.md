# to-snake-case
Convert a string to a snake case.

## Installation

```
$ npm install to-snake-case-g
```


## Example

```js
var toSnakeCase = require('to-snake-case')

toSnakeCase('camelCase')   // "camel_case"
toSnakeCase('space case')  // "snake_case"
toSnakeCase('dot.case')    // "dot_case"
toSnakeCase('weird[case')  // "weird_case"
```


## API

### toSnakeCase(string)
  
Returns the `string` converted to snake case.