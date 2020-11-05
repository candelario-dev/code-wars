/*In this Kata, you will be given a string and two indexes (a and b). Your task is to reverse the portion of that string between those two indices inclusive.*?


function solve(st,a,b){
let newStart = st.substring(0, a).split('')
let newSt = st.substring(a,b+1).split("").reverse()
let newEnd= st.substring(b+1, st.length).split('')
let newArrSt = newStart.concat(newSt).concat(newEnd).join("")
return newArrSt
}
