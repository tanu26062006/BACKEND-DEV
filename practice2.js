// Non - Primitive datatype are those datatype which is made up by using basic or primitive datatype.
//Arrays are used to store multiple values in a single variable.
//Push = it pushesh the any data given to it in the end of an array
//Pop = it remove the last data entry in the array.
//Unshift = Inserts new elements at the start of an array, and returns the new length of the array</p >
//Shift=Removes the first element from an array and returns it.
//If the array is empty, undefined is returned and the array is not modified.
//Flat = Returns a new array with all sub - array elements concatenated into it recursively up to the specified depth.
// slice() = Use: To copy a portion of an array without changing the original array.
//splice() = Use: To add, remove, or replace elements in an array.It modifies the original array.


// check if variable is an array
let arr = [1, 2, 3];
console.log("Tell if the variable array or not:-",Array.isArray(arr)); // true

// push in the last()
arr.push(4);
console.log(arr); // [1,2,3,4]

// pop the element at last index()
arr.pop();
console.log(arr); // [1,2,3]

// unshift()
arr.unshift(0);
console.log(arr); // [0,1,2,3]

// shift()
arr.shift();
console.log(arr); // [1,2,3]

// flat()
let nestedArr = [1, [2, [3, 4]]];
console.log(nestedArr.flat(2)); // [1,2,3,4]

// slice()
console.log(arr.slice(0, 2)); // [1,2]

// splice()
arr.splice(1, 1, 'a', 'b');
console.log(arr); // [1,'a','b',3]

// merge arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let arr12 = [...arr1, ...arr2];
console.log(arr12); // [1,2,3,4,5]

// map()
let arr3 = [2, 4, 6];
console.log(arr3.map(v => v * 2)); // [4,8,12]

// filter()
let arr4 = [1, 2, 3, 4, 5];
console.log(arr4.filter(v => v % 2 === 0)); // [2,4]

// reduce()
let arr5 = [1, 2, 3, 4];
console.log(arr5.reduce((t, v) => t + v, 0)); // 10

// find()
let arr6 = [10, 20, 30, 40];
console.log(arr6.find(v => v > 25)); // 30

// includes()
let arr7 = [5, 10, 15];
console.log(arr7.includes(10)); // true
console.log(arr7.includes(20)); // false

// some()
let arr8 = [1, 3, 5];
console.log(arr8.some(v => v % 2 === 0)); // false

// every()
let arr9 = [2, 4, 6];
console.log(arr9.every(v => v % 2 === 0)); // true

// concat()
let arr10 = [1, 2];
let arr11 = [3, 4];
console.log(arr10.concat(arr11)); // [1,2,3,4]

// sort()
let arr13 = [30, 10, 50];
arr13.sort((a, b) => a - b);
console.log(arr13); // [10,30,50]

// reverse()
let arr14 = [1, 2, 3];
arr14.reverse();
console.log(arr14); // [3,2,1]

// destructuring
let arr15 = [10, 20, 30];
let [a, b] = arr15;
console.log(a, b); // 10 20

// remove duplicates
let ar1 = [1, 2, 2, 3];
console.log([...new Set(ar1)]); // [1,2,3]

// loop
let ar2 = [1, 2, 3];
for (let value of ar2) {
  console.log(value);
}

// map()     // transform
// filter()  // condition
// reduce()  // single value
// find()    // first match
// some()    // any true
// every()   // all true
// spread    // copy / merge
// concat()  // merge
// sort()    // order