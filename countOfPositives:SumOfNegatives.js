/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.*/

function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0 ){
    return []
  } else{
  let pos = input.filter(x => x > 0)
  let neg = input.filter(y => y < 0)
  return [pos.length, neg.reduce((a,b) => a+b)]
    }
}
