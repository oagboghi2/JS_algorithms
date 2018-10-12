function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        // run one loop
        for(let j = i+1; j < arr.length; j++){
            // run a second loop nested
            if(arr[i] + arr[j] === 0){
                return console.log( [arr[i], arr[j]]);
            }
        }
    }
}

//sumZero([-4,-3,-2,-1,0,1,2,5]) //time complexity: O(n^2)

//multiple pointers pattern.  keep track of both ends of array
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while (left < right){
        let sum = arr[left] + arr[right];
        console.log(arr[left], arr[right])
        if(sum === 0){
            return console.log(arr[left], arr[right])
        } else if (sum > 0){
            right--;
        } else {
            left++;
        }
    }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])