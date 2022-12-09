/**
 *Implement a function namedgetNumberwhich generatesa random number. 
 If randomNumberis divisible by 5 it will reject the promise else it will 
 resolve the promise. Let’s also keep thepromise resolution/rejection time 
 as a variable.1.JS promises should not be used.2.A custom promise function 
 should be created.3.This function should be able to handle all 3 states Resolve, 
 Reject and Fulfilled.4.Should be able to accept callbacks as props. 
 * 
 */


const randomeNumberPromiseCaller = (x) => {
    return new Promise((resolve, reject)=>{
        let ranodmNumber = Math.floor(Math.random()*1000);
        if(isDivisibleBy5(ranodmNumber)){
            reject(`${ranodmNumber} is divisible by 5, so promise rejected`);
        }
        resolve(`${ranodmNumber} is not divisible by 5, so promise resolved`);
    });
}




function isDivisibleBy5(x){
    if(x%5==0){
        return true;
    }

    return false;
}

for (let i=0;i<10;i++){
    randomeNumberPromiseCaller(i)
    .then(response => console.log(response))
    .catch(error=>console.log(error));
}



