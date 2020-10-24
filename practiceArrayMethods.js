// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
const array1 = [1, 2, 3, 4];
const reducer = (a, b) => a * b;
console.log(array1.reduce(reducer));




// You will be given an array of all the family members' ages, in any order.
// The ages will be given in whole numbers, so a baby of 5 months,
// will have an ascribed 'age' of 0. Return a new array with
// [youngest age, oldest age, difference between the youngest and oldest
// age].
var arr1 = [50,40,60,1,10,5];
let arr2 =[]
let mini = arr1.reduce((a, b) => Math.min(a, b))
let maxi = arr1.reduce((a, b) => Math.max(a, b))
let dif = maxi - mini
arr2.push(mini, maxi, dif)
console.log(arr2)

//function way:
var arr1 = [50,40,60,1,10,5];
let arr2 =[]
let min, maxi, dif

function arss(){
mini = arr1.reduce((a, b) => Math.min(a, b))
maxi = arr1.reduce((a, b) => Math.max(a, b))
dif = maxi - mini
arr2.push(mini, maxi, dif)
return arr2
}
console.log(arss())



// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// Example:
// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6 
//sort the array from lowest to higher
//method delete last pop()
//method delete first shift()
//reduce to add the rest reduce()
const arr1 = [ 6, 2, 1, 8, 10 ]
arr1.sort((a, b)=> {
  return a - b;
});
arr1.pop();
arr1.shift()
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr1);
console.log(arr1.reduce(reducer));
const arr2 = [ 1, 1, 11, 2, 3 ]
arr2.sort((a, b)=> {
  return a - b;
});
arr2.pop();
arr2.shift()
const reduc = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr2);
console.log(arr2.reduce(reduc));

function way:
const arr1 = [ 6, 2, 1, 8, 10 ]

function arrs(){
arr1.sort((a, b)=> {
  return a - b;
});
arr1.pop();
arr1.shift()
const reducer = (a, b) => a + b;
return arr1.reduce(reducer);
}
console.log(arrs())
