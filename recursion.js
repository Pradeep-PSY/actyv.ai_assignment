n = 1234;

function sum(n) {
  if (n == 0) {
    return 0;
  } else {
    return (n % 10) + sum(Math.floor(n / 10))
  }
}
console.log(sum(1234))


function fib(x){
    if(x==0 || x== 1) return 1
    else return fib(x-1) + fib(x-2)
}

console.log(fib(5))