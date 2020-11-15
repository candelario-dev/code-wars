//Given two arrays of strings, return the number of times each string of the second array appears in the first array.

function solve(a,b){
  let hi = []
  for (let i = 0; i < b.length; i++){
    hi.push(a.filter((x) => (x === b[i])).length)
  }
  return hi
}
