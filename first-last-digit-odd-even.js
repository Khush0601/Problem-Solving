// function checkEnds(n){
// let firstdigit=Math.trunc(n/10)
// let firstDigitResult="";
// let lastDigit=n%10;
// let lastDigitResult=""
// if(firstdigit%2===0){
//  firstDigitResult="even"
// }
// else{
//     firstDigitResult="odd"
// }
// if(lastDigit%2===0){
//     lastDigitResult="even"
// }
// else{
//     lastDigitResult="odd"
// }
// return `${firstDigitResult} ${lastDigitResult}`

// }
// console.log(checkEnds(234))



function lastFirst(n){
  let num=String(n)
  let firstDigitResult="odd"
  let lastDigitResult="odd"
  let firstDigit=Number(num[0])
  let lastDigit=Number(num[num.length-1])
  if(firstDigit%2===0){
    firstDigitResult="even"
  }
  if(lastDigit%2===0){
    lastDigitResult='even'
  }
  return `${firstDigitResult} and ${lastDigitResult}`
}
 console.log(lastFirst(235))