const checkTypeNumber = givenNumber => {
    if (typeof(givenNumber) == 'number'){
        if(givenNumber % 2 == 0){
            return 'GENAP'
        }else{
            return 'GANJIL'
        }
    }else if(typeof(givenNumber) == 'string'){
        return 'Error : Invalid Data Type'
    }else if(typeof(givenNumber) == 'object'){
        return 'Error : Invalid Data Type'
    }else{
        return 'Error : bro where is the parameter?'
    }
}
console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber("3"))
console.log(checkTypeNumber({}))
console.log(checkTypeNumber([]))
console.log(checkTypeNumber())