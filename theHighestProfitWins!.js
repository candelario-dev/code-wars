//Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr){
  let array = []
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  array.push(min, max)
  return array
}
