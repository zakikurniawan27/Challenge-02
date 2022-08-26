const isValidPassword = givenPassword =>{
    const pattern = /([A-Z])\w{6,15}([0-9])/
    if(givenPassword.match(pattern)){
        return true
    }else{
        return false
    }
    
}
console.log(isValidPassword('Meong2021'))
console.log(isValidPassword('meong2021'))
console.log(isValidPassword('@eong'))
console.log(isValidPassword('Meong2'))
// console.log(isValidPassword(0))// error : karena parameter harus sesuai pattern yang berupa string
// console.log(isValidPassword())// error : karena tidak ada parameter