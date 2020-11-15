/*Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.*/

function alphabetPosition(text) {
  let newArr = []
  let alpha = ' abcdefghijklmnopqrstuvwxyz'
  let alphaArr = alpha.split('')
  let textArr = text.toLowerCase().split('')
  for (let i = 0; i <textArr.length; i++){
    if (textArr[i] !== ' '){
      newArr.push(alphaArr.indexOf(textArr[i]) + ' ')
    }
  }
  let boo = newArr.filter(num => num !== '-1 ')
  return boo.join('').trim()
}
