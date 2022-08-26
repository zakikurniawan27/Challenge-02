const checkEmail = email =>{
    const pattern = /\w+@\w+\.\w/
    const pattern2 = /\w+/
    const pattern1 = /\w+@/
    if(email.match(pattern)){
        return 'VALID'
    }else if(email.match(pattern1)){
        return 'INVALID'
    }else if(email.match(pattern2)){
        return 'Error'
    }

}
console.log(checkEmail('apranata@binar.co.id'))
console.log(checkEmail('apranata@binar.com'))
console.log(checkEmail('apranata@binar'))
console.log(checkEmail('apranata'))
// console.log((checkEmail(3322)))// error : karena parameter harus sesuai pattern yang berupa string
// console.log(checkEmail())//error : karena tidak ada parameter