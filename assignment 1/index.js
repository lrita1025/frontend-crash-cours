 // -----------P1.1
let a = 5 + 2;
console.log(a);
// output 7

 // -----------P1.2

let b = 5 ;
let c = 2;
let d = b % c;
console.log(d);
// output 1

 // -----------P1.3

let e = 5 > 2;
console.log(e);
// output true

let f = 5 == 2;
console.log(f);
// output false

 // -----------P1.4
let gg = 5;
let hh = 2;
let ii = 1;

console.log( gg>hh && hh==ii);
// output false

// -----------P2.1
let age = 16;

if (age>=18){
  console.log("can vote");
} else {
  console.log("can't vote");
}
// output "can't vote"

// -----------P2.2 
let number = 8;
 if (number % 2 === 0) {
    console.log("是偶数");
  } else {
    console.log(" 是奇数");
  }

// output "是偶数"

// -----------P2.3
let j =10;
let k = 2;

 console.log(j>k);
 console.log(j==k);

// output "true"
// output "false"

// -----------P2.4
let l =25;
let m = 12;
let o = 12;

// -----------P2.5

let p =25;
let q = 12;

let r = 10;

if(r<=p && r>=q){
  console.log("true");
} else {
  console.log("false");
}

// output "false"

// -----------P2.6
let year = 2023;
  if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    console.log(year + " 是閏年");
  } else {
    console.log(year + " 不是閏年");
  }

// output "2023 不是閏年"

// -----------PP3.1
const day = 5;
switch (day) {
  case 0:
    console.log('週日');
    break;
 
  case 1:
    console.log('週一');
    break;
    
    case 2:
    console.log('週二');
    break;
    
     case 3:
    console.log('週三');
    break;
    
     case 4:
    console.log('週四');
    break;
    
    case 5:
    console.log('週五');
    break;
    
     default:
    console.log('數值有誤');
    
    
}

// output "週五"

// -----------PP3.2
const season = 2;
switch (season) {
  case 0:
    console.log('春天');
    break;
 
  case 1:
    console.log('夏天');
    break;
    
    case 2:
    console.log('秋天');
    break;
    
     case 3:
    console.log('冬天');
    break;
    
     default:
    console.log('數值有誤');
    
}

// output "秋天"

// -----------P4.1

// for(let i =1; i<=10000; i++){
//   console.log(i);
// }

// output 1~10000

// -----------P4.1

for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}

// output 1~100偶數

// -----------P4.2

for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}

// output 1~100奇數

// -----------P4.3(不會)

// -----------P4.4

const size = 5;

for (let i = 1; i <= size; i++) {
  let row = '';
  for (let k = 1; k <= 2 * i - 1; k++) {
    row += '*';
  }
  console.log(row);
}