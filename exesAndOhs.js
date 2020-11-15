//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
  let arr = str.toLowerCase().split('')
  let xs = 0
  let os = 0
  for (let i = 0; i<arr.length; i++){
    if (arr[i] =='x'){
      xs++
    } else if (arr[i] == 'o'){
      os++
    }
  }
  return xs == os ? true : false
}
