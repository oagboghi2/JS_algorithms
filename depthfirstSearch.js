function depthFirstSearch(obj, searchTerm){
    for(const key in obj){
        console.log(key, obj[key])
        if(obj[key] === searchTerm){
            return true;
        }
        if(typeof obj[key] === 'object'){
            return depthFirstSearch(obj[key], searchTerm)
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

depthFirstSearch(tree, 2)