// document.write("<hr>");
// document.write("Hello World Wide Web");
// document.write("<hr>"); 

// alert("hellooo!");
// let x = 3 ;
// let y = 8 ;
// let z = x + 9 - y ;
// document.write(z);

// let a,b,c,i;
// a=3;
// b=39;
// c=3;
// i = b/a-c ;
// document.write(i);

// let age = prompt("What is your age?")
// switch (age) {
//   case '12':
//     console.log("Your age is 12")
//     break
//   case '13':
//     console.log("Your age is 13")
//     break
//   case '14':
//     console.log("Your age is 14")
//     break
//   case '15':
//     console.log("Your age is 15")
//     break
//   default:
//     console.log("Your age is not special")}


let num = prompt("What is your age?")
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your number is divisible by 2 and 3")
}
else {
  console.log("Your number is not divisible by 2 and 3")
}
