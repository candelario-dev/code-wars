//Complete the solution so that the function will break up camel casing, using a space between words.

// complete the function
function solution(string) {
  let boo =[]
  let strArr = string.split('')
  let bigAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let bigArr = bigAlpha.split('')
  for (let i = 0; i<strArr.length; i++){
   if (bigAlpha.indexOf(strArr[i]) == -1){
     boo.push(strArr[i])
    } else if (bigAlpha.indexOf(strArr[i]) !== -1){
     boo.push(' ', strArr[i])
   }
  }
  return (boo.join(''))
}
