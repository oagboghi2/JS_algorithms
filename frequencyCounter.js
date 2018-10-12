// function same(arr1, arr2){
//     // acepts 2 arrays
//     // function should return true if 2nd array is squared copy of first array
//     let temp = [];
//     if( arr1.length !== arr2.length){
//         return false;
//     } else if (arr1.length == arr2.length) {
//         for (let i = 0; i < arr1.length; i++) {
//             temp.push(arr1[i] * arr1[i])
//             console.log(temp)
//             for(let j = 0; j < arr2.length; j++){
//                 if
//             }
//         }
         
// same([1,2,3], [1,4,9]);

///Colt's answer

function same(arr1, arr2){
    if( arr1.length !== arr2.length){
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex =arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1){
            return false;
        }
        arr2.splice(correctIndex,1)
        }
        return true
    }

same([1,2,3], [1,4,9]);

//////frequency Couner pattern//////

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
        console.log(frequencyCounter1);
        console.log(frequencyCounter2);
        return true
}