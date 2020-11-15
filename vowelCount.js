/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/

function getCount(str) {
  var vowelsCount = 0;
  let lower = str.toLowerCase()
  for (let i = 0; i <lower.length; i++){
    if (lower[i] == 'a' || lower[i] == 'e' || lower[i] == 'i' || lower[i] == 'o' || lower[i] == 'u')
      vowelsCount++
  }
  return vowelsCount

}
