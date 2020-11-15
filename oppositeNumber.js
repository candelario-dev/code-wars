//Very simple, given a number, find its opposite.

function opposite(number) {
  let boo = ''+number
  let arr = boo.split('')
  let bye
  let hi
  if(arr[0] == '-'){
    arr.splice(0, 1)
    bye = arr.join('')
  } else{
    bye = '-' + boo
  }
  return +bye

}
