function countNegatives(a,b,c){
    let count=0
  if(a<0){
   count=count+1
  }
   if(b<0){
   count=count+1
  }
  if(c<0){
     count=count+1
  }
 
  return count
}
console.log(countNegatives(2,3,10))