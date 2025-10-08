function removeNumbers(arr){
    let  result =[]
     for(let str of arr){
         let newStr =''
         for(let i=0; i<str.length; i++){
             if(isNaN(str[i])){
                 newStr+= str[i]
             }
         }
        result.push(newStr)
     }
     return result
 }
  
 console.log(removeNumbers(arr))
 