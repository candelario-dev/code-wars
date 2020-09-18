/*Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.*/


//return the total number of smiling faces in the array
function countSmileys(arr) {
let count = 0
  if (arr.length == 0 )  {
  return 0;
}
let faces = [":)",";)",":D",";D",":-D",":~D",":-)",":~)",";~D",";~)",";-D",";-)"]
for (let item of arr) {
  if (faces.includes(item)) {
    count++
  }
}
return count;
}
