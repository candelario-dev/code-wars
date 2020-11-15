//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
  let m = n.toString().split('')
  let mapped = m.map(x=> Number(x))
  return mapped.reverse()
}
