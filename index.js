// done 1 question

let arr = [1, 2, 3, -1];

let target = 2;
let sum = 0;
for (let i = 0; i < arr.length - 1; i++) {
  sum = arr[i] + arr[i + 1];

  if (sum == target) {
    console.log(arr[i], arr[i + 1]);
  }
}

console.log(sum);


//done 3 question
let sent = "This is a test sentence";
sent = sent.split(" ");
let rever = "";
for (let i = sent.length - 1; i >= 0; i--) {
  rever += sent[i] + " ";
}

console.log(rever);



// done 4 question
let sent_arr = ["This", "is", "a", "test", "array", "a", "test"];
let obj = {},
  sent_rev_arr = [];
for (let j = 0; j < sent_arr.length; j++) {
  if (obj[sent_arr[j]] == undefined) {
    obj[sent_arr[j]] = 1;
    sent_rev_arr.push(sent_arr[j]);
  }
}

console.log(sent_rev_arr);


// 2 question
let num = 234;
 num = 234 % 10;
console.log(num)
