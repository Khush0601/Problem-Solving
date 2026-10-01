function checkEnds(n){
let firstdigit=Math.trunc(n/10)
let firstDigitResult="";
let lastDigit=n%10;
let lastDigitResult=""
if(firstdigit%2===0){
 firstDigitResult="even"
}
else{
    firstDigitResult="odd"
}
if(lastDigit%2===0){
    lastDigitResult="even"
}
else{
    lastDigitResult="odd"
}
return {firstDigitResult,lastDigitResult}

}
console.log(checkEnds(23))