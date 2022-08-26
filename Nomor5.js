const getSplitName = personName => {
    const split = personName.split(' ')
    const firstname = split[0]
    const middlename = split.slice(1, -1).join(' ')
    const lastname = split[split.length - 1]
    if(split.length > 3){
        return 'Error : This function is only for 3 characters name'
    }else if(split.length === 2){
        const sFirstLastName = { firstname : firstname, middlename : null, lastname : lastname}
        return sFirstLastName
    }else if(split.length === 1){
        const sFirstName = { firstname : firstname, middlename : null , lastname : null}
        return sFirstName 
    }else{
        const sFullName = { firstname : firstname, middlename : middlename, lastname : lastname}
        return sFullName
    }
}

console.log(getSplitName("Aldi Daniela Pranata"))
console.log(getSplitName("Dwi Kuncoro"))
console.log(getSplitName("Aurora"))
console.log(getSplitName("Aurora Aureliya Sukma Darma"))
// console.log(getSplitName(0))// error : karena parameter harus berupa string bukan number

