const getAngkaTerbesarKedua = dataNumber => {
    dataNumber.sort(function(a,b){return b-a})
    return dataNumber[1]
}
const dataNumber = [9,4,7,7,4,3,2,2,8]
console.log(getAngkaTerbesarKedua(dataNumber))
// console.log(getAngkaTerbesarKedua(0))
// console.log(getAngkaTerbesarKedua())