// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



//EXAMPLES - 

//Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.





s = "race car n"

var isPalindrome = function(s) {
  s = s.toLowerCase();
  console.log(s)
  let arr = []
  for(let i=0;i<s.length;i++){
    if(s[i]==' ' || s[i] == ',' || s[i]== ':' || s[i] == "'" || s[i]=="$"){
			continue;
    }
    else{
      arr.push(s[i])
    }
  }  
   let ans =  check(arr)
   console.log(ans)
  
	 
  function check(arr){
   
    let ar = arr.join('')
    console.log(ar)
    let reverse = arr.reverse();
    reverse = reverse.join('')
    console.log(reverse)
    if(ar == reverse){
      return true
    }
    else {
      return false
    }
  }
  
    
};

isPalindrome(s)


//optimize method for above question

let str = s.replace(/[^a-zA-Z]/g,'');
console.log(str)

function solve_Palindrome(str) {

    let st = str.toLowerCase(str);
    str = str.split('');
    let reverse = str.reverse();
    reverse = reverse.join('');
    console.log(reverse,st)
    if(st == reverse){
        return true
    }
    else {
        return false
    }
   
}

console.log(solve_Palindrome(str))


function solve_bruteforce(str){
    let flag = true;
    let x = str.split('')
    x = x.reverse();
    x = x.join('');
    console.log(x,str)

    for(let i=0;i<x.length;i++){
        if(x[i]!=str[i]){
            flag = false;
            break;
        }
    }
    return flag
}

console.log(solve_bruteforce(str))


//fib 
let n1 = 0 , n2 = 1
function finb(val){
    if(val<1) return 1
    for(let i=0;i<val;i++){

        let  next = n1 + n2
        n1 = n2
        n2 = next
        console.log(next)
       
    }
}

finb(10)


function fibo(x){
    if(x==0 || x== 1) return 1
   else{
   return  console.log( fibo(x-1) + fibo(x-2))
    
   }
}

fibo(10)