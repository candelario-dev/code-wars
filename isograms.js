// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
 let newArr = str.toLowerCase().split('')
 let noDups = [...new Set(newArr)];
 let lowerStr = str.toLowerCase()
 let newStr = noDups.join('')
 return lowerStr === newStr ? true : false
}
