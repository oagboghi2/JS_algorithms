function countUniqueValues(arr) {
    let countArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            countArr.push(arr[i])
        }
    }
    return countArr.length;
}

countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])


countUniqueValues([1,1,1,1,1,2])
countUniqueValues([])
countUniqueValues([-2 -1, -1, 0, 1])
countUniqueValues([1,2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
