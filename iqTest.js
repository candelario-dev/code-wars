/*Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)*/

function iqTest(numbers){
 let arr = numbers.split(' ')
 let even = []
 let odd = []
 let index
 for (let i = 0; i<arr.length;i++){
   if (Number(arr[i]) % 2 === 0){
     even.push(arr[i])
   }
   else {
     odd.push(arr[i])
   }
 }
 if (even.length < odd.length){
  index = arr.indexOf(even[0]) + 1
 } else {
   index = arr.indexOf(odd[0]) + 1
 }
  return index
}
