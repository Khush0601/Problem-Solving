//compare two number without even using comparison operator 

function comparisonTwoNum(a,b){
let diff=a-b; //false hoga tbhi 
let result=''
if(diff){ // it will only run when this case will be true
    result='not equal'
}
else{
    result="equal"
}
return result

}
console.log(comparisonTwoNum(12,12))
