/*The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items.*/

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  let arr = []
  let maxi = ages.reduce((a, b) => Math.max(a, b))
  ages.splice(ages.indexOf(maxi), 1)
  let maxi2 = ages.reduce((a, b) => Math.max(a, b))
  arr.push(maxi2, maxi)
  return arr
}
