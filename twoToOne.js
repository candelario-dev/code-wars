//Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

function longest(s1, s2) {
 let arr1 = s1.split('')
 let arr2 = s2.split('')
 let amalgamation = arr1.concat(arr2)
 let onlyOnce = [...new Set(amalgamation)]
 let sorted = onlyOnce.sort()
 return sorted.join('')
}
