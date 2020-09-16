//There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
   for (i=0; i<arr.length; i++) {
    if (arr[i] === arr[i + 1] || arr[i] === arr[i - 1] || arr[i] === arr[i + 2]) {
      //empty in order to bypass function
    } else {
      return arr[i]
    }
  }
}
