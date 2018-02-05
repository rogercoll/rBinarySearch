# Binary Search

<br>

[![Status][status-image]][status-url]

<br>


> Basic binary search implementation that works with integers and string. Also known as dichotomic search problem. The first r, is because of the recursive implementation of this algorithm.  


In computer science, binary search, also known as half-interval search, logarithmic search, or binary chop, is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array; if they are unequal, the half in which the target cannot lie is eliminated and the search continues on the remaining half until it is successful. If the search ends with the remaining half being empty, the target is not in the array.

Binary search runs in at worst logarithmic time, making O(log n) comparisons, where n is the number of elements in the array, the O is Big O notation, and log is the logarithm.

### Requirements

- Npm and Nodejs

### Installation

Works with any Nodejs version:
```
npm install rbinarysearch
```
### Usage

Basic example:

```js
var rvector = require('rbinarysearch');

var test = new rvector();
var values = [1,-2,13,4,5,6,7,23,9,0]; //Can also be a strings vector ex: ["hi","abc,"roger"]

//Adding values
test.addElems(values);
test.addElems(6); //"hello" if its an array of strings

//Deleting elements
var aux = [9,-2,23,13,123,0];
test.deleteElems(aux);
test.deleteElems(6);

//Binary Search
var pos = test.binarysearch(13); //if array of strings "roger"
console.log(pos);

//Info
var actual_array = test.getvec();
test.printVec(); //it's a console log of the array

```

<!-- Markdown link & img dfn's -->
[status-image]: https://img.shields.io/badge/Status-200-brightgreen.svg?style=for-the-badge
[status-url]: https://en.wikipedia.org/wiki/Binary_search_algorithm
