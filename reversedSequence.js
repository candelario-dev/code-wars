//Get the number n (n>0) to return the reversed sequence from n to 1.

const reverseSeq = n => {
  let arr = []
  for (let i = 1; i<=n;i++){
    arr.push(i)
  }
  return arr.reverse()
};
