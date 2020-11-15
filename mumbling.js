//This time no story, no theory. The examples below show you how to write function accum:

function accum(s) {
  let arr = s.toLowerCase().split('')
  let newArr = [arr[0].toUpperCase(), '-', ]
  for(let i =  1; i <arr.length; i++){
   let hi = arr[i].repeat(i +1)
    let bye = hi.substring(0,1).toUpperCase() + hi.substring(1)
   newArr.push(bye, '-')
  }
  newArr.pop()
  return newArr.join('')

}
