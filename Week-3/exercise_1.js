/**
 * 
 * Exercise 3.1: Create a memoize function that remembers previous inputs and 
 * stores them in cache so that itwon’t have to compute the same inputs more 
 * than once. The function will take an unspecifiednumber of integer inputs and 
 * a reducer method
 * 
 */

const memoize = (fn) => {
    let cache = {};
    
    return (...args)=>{
        let key = args.toString();
        if(!cache[key]){
            cache[key]= fn(...args)
        }
        console.log(cache)
        console.log(cache[key]);
        return cache[key];
    }
}

const add = (...args)=>{
    return args.reduce((acc, curr)=>{
        return acc + curr;
    });
};


const memoizedAdd = memoize(add);


memoizedAdd(2, 3)
memoizedAdd(2, 6)
memoizedAdd(2, 3)
memoizedAdd(2, 3)
memoizedAdd(2, 3)
memoizedAdd(2, 3)
memoizedAdd(2, 3)
memoizedAdd(2, 3)
memoizedAdd(2, 3, 2)
