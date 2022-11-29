# Async Iterate
Advanced Async Iterate is a JavaScript library that simplifies the handling of arrays. You can now execute asynchronous functions in interactions like forEach or map!

## Example Usage
**Please note that this example doesn't use async functions!**
```js
const each = require('advanced_async-iterate')

const result = await each.each([ 1, 2, 3, 4 ], map = async (value) => {
  return value += 1
}, map = async (value) => {
  return value += 1
})

console.log(result) // [ 4, 6, 8, 10 ]
```


## Implemented Array Functions
- forEach
- every
- map
- filter
