/**

function createIncrement(){
    let count = 0;
    function increment(){
        count++;
    }

    let message = `Count is ${count}`;
    function log(){
        console.log(message);
    }

    return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();






Explanation:

output: Count is 0

increment is called 3 times, so count become 3 but log variable message is declared outside the scope of 
increment function so when it is called, it is not changed. Only at the time of calling the first function, 
message was decalared and initilized. So when we call log method, count is still 0


*/
