//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.  

function fakeBin(x){
  let newArr = []
let arr = x.split('')
let boo = arr.map(x => Number(x))
for(let i = 0; i<boo.length; i++){
  if (boo[i] < 5){
    newArr.push('0')
  } else{
    newArr.push('1')
  }
}
  return newArr.join('')
}
