#Array Difference#
Find elements added and removed explicitly between two arrays or elements or objects.

```
npm install simple-array-diff --save
```

##Usage##
```javascript
//Require the module
var  arrayDiff = require('simple-array-diff');

//Use it
var result = arrayDiff(<Original Array>, <Updated Array>, [Optional 'key' of prop to consider as unique field in case of array of objects]);

result.added //Array of elements added in updated array
result.removed //Array of elements removed in updated array
result.common //Array of elements which are also present in updated array. Common elements in both arrays.

```

##Examples##
There are two use cases:

**CASE 1:** Difference based on element values.

**CASE 2:** Difference based on any key in the element of array. ***(Array of Objects)***.


###CASE 1: Difference based on element values###

```javascript
var  arrayDiff = require('simple-array-diff');
var result = arrayDiff(
    [1, 2, 3, 4, 5, 6],
    [1, 2, 4, 5, 6, 0, 9, 10]
);
console.log(result);
```
```
OUTPUT:
{ added: [ 0, 9, 10 ], removed: [ 3 ], common: [ 1, 2, 4, 5, 6 ] }
```

```javascript
var  arrayDiff = require('simple-array-diff');
var result = arrayDiff(
    ['a', 'b', 'c', 1, 3, 5, true],
    ['c', 'd', 'e', 7, 3, 4, 5, false, true]
);
console.log(result);
```
```
OUTPUT:
{ added: [ 4, 7, 'd', 'e', false ], removed: [ 1, 'a', 'b' ], common: [ 3, 5, 'c', true ] }
```

###CASE 2: Difference based on any key in the element of array. (Array of Objects)###

```javascript
var  arrayDiff = require('simple-array-diff');
var result = arrayDiff(
                [
                    {id:1, name: 'a'},
                    {id:2, name: 'b'},
                    {id:3, name: 'c'},
                    {id:4, name: 'd'},
                    {id:5, name: 'e'}
                ],
                [
                    {id:1, name: 'a'},
                    {id:2, name: 'b'},
                    {id:7, name: 'e'}
                ],
                'id' //The property in objects to find uniqueness with
            );
console.log(result);
```
```
OUTPUT:
{ added: [ { id: 7, name: 'e' } ],
  removed: [ { id: 3, name: 'c' }, { id: 4, name: 'd' }, { id: 5, name: 'e' } ],
  common: [ { id: 1, name: 'a' }, { id: 2, name: 'b' } ]
}
```
