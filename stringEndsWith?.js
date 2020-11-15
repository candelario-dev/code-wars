//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

//initial
function solution(str, ending){
  let end = ending.length
  let boo = str.substring(str.length, str.length - end)
  return ending === boo ? true : false
}

//refactored

function solution(str, ending){
  return str.endsWith(ending)
}
