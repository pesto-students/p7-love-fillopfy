/**
 *Implement a function namedgetNumberwhich generatesa random number. 
 If randomNumberis divisible by 5 it will reject the promise else it will 
 resolve the promise. Let’s also keep thepromise resolution/rejection time 
 as a variable.1.JS promises should not be used.2.A custom promise function 
 should be created.3.This function should be able to handle all 3 states Resolve, 
 Reject and Fulfilled.4.Should be able to accept callbacks as props. 
 * 
 */


const randomNumberPromise = new Promise((resolve, reject)=>{
    const ranodmNumber = Math.random();
    if(isDivisibleBy5(ranodmNumber)){
        reject();
    }
    resolve();
});


function isDivisibleBy5(x){
    if(x%5==0){
        return true;
    }

    return false;
}

console.log(randomNumberPromise())

