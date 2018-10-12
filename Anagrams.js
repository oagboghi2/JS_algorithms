function anagrams(str1, str2){
    // make 2 empty objects each representing a string 
    let obj1 = {};
    let obj2 = {};
    // split strings into arrays
    let arr1 = str1.split('')
    let arr2 = str2.split('')
    // run concurrent loops through both of them
    for(let val of arr1){
        obj1[val] = (obj1[val] || 0) + 1
    }
    for(let val of arr2){
        obj2[val] = (obj2[val] || 0) + 1
    }
    // add these elements of the array into their respective object
    console.log(obj1)
    console.log(obj2)
    // run a third loop checking for cases to see if the strings match up
    for(let key in obj1){
        console.log(key)
        if(!(key in obj2)){
            console.log("line 22")
            return false
        }
        if(obj1[key] !== obj2[key]){
            console.log("line 26")
            return false
        }
    }
    console.log("line 30")
    return true;
}

anagrams('aaz', 'zba');