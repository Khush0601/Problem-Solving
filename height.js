


Array.prototype.doubleArray = function (callback){
    let temp =[]
    for(let i=0;i<this.length;i++){
      temp[i] = callback(this[i])
    }

    return temp


}

const a = [3,6,7]



let t1 = a.doubleArray((v) =>  v-1)


console.log(t1)



