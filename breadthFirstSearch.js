function breadthFirstSearch(obj, searchTerm){
    const objArray = [obj]
    for(const obj of objArray){
        for(const key in obj){
            console.log(key, obj[key])
            if(obj[key] === searchTerm){
                return true;
            }
            if(typeof obj[key] === 'object'){
                objArray.push(obj[key])
            }
        }
    }
    return false
}

const tree = {
    x: {y: {z: { a: 2}}},
    y: {z: { a: 2}},
    z: { a: 3},
    a: 2
}

breadthFirstSearch(tree, 2)