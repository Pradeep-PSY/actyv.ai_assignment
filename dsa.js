//remove duplicate number from array 
//object method
let number = [1,2,3,3,4,4,5];
let obj = {}, og_ar = []
 for(let i=0; i<number.length; i++){
    if(obj[number[i]] == undefined){
        obj[number[i]] = 1
        og_ar.push(number[i])
    }
   
 }

 console.log(og_ar)

//  bruteforce with sorting method

let numb = [2,4,5,6,1,1,3,4,5,8,8,2];

numb.sort((a,b)=>a-b)
let new_Array = []
for(let i=0; i<numb.length; i++){
    if(numb[i] !== numb[i+1]){
        new_Array.push(numb[i])
    }
}

console.log(new_Array)