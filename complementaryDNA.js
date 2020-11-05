// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
//
// If you want to know more http://en.wikipedia.org/wiki/DNA
//
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
//
// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

function DNAStrand(dna){
  let arr = dna.split('')
  let newDna = []
  for (let i = 0; i<arr.length;i++){
    if (arr[i] == 'A'){
      newDna.push('T')
    } else if (arr[i] == 'T'){
      newDna.push('A')
    } else if (arr[i] == 'C'){
      newDna.push('G')
    } else if (arr[i] == 'G'){
      newDna.push('C')
    }
  }
  return newDna.join('')
}
