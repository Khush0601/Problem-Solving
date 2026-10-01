function primeNumber(n){
    let result='prime'
if (n<=1){
    result="not prime"
}

else{
    for(let i=2;i<n/2;i++){
        if(n%i===0){
         result="not prime"
         break
        }
    }
}
return result
}
console.log(primeNumber(15))