function alphapit1 (Input){

    var arrayInput = Input.replace(" ","").toLowerCase().split("");
    asci=65;
    result={}
    for( i =0; i<26 ; i++){
        result[String.fromCharCode( 97 + i )] = 0
    }
    arrayInput.forEach((e)=>{
        if(result.hasOwnProperty(e)){
            result[e] =result[e]+1;
        }
    })
    return result

}
function alphapit2 (Input){

    var arrayInput = Input.replace(" ","").toLowerCase().split("");
    console.log(arrayInput[0].charCodeAt(0))
    asci=65;
    result =new Array( 26 ).fill( 1 ).map( ( _, i ) => {
        return {[String.fromCharCode( 97 + i )] :0} 
        })
        
    arrayInput.forEach((e)=>{
        res= e.charCodeAt(0)-97
        if(result[res].hasOwnProperty(e)){
            result[res][e] =result[res][e]+1;
        }
    })
   return result

}

console.log(alphapit2("sssgdsagdgass"))
console.log(alphapit1("sssgdsagdgass"))