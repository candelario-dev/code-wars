// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
//
// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.


function solve(s){
  let upper = 0;
  let lower = 0

  for (let i =0;i<s.length;i++){
    if (s[i].toUpperCase() == s[i]){
      upper++
    } else{
      lower++
    }
  }
  if (lower >= upper){
    return s.toLowerCase()
  } else{
    return s.toUpperCase()
  }
}
