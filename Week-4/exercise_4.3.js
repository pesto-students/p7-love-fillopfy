/**
 * Implement Fibonacci Series with Iterators
 */


const fibIter = {
    [Symbol.iterator](){
        let prev = 0,  curr = 1, i=0;
        let next = 0
        const iter =  {
            next(){
                if(i==0 || i==1){
                    const itt =  {
                        value: i,
                        done: false
                    }
                    i++;
                    return itt;
                }
                i++;
                next = prev + curr;
                prev = curr;
                curr = next;
                
                // console.log("i", i);
                // console.log("prev", prev);
                // console.log("curr", curr);
                // console.log("next", next);
                if(i<= 10){
                    
                    return {
                        value: next,
                        done: false
                    }
                }
                return {
                    value:next,
                    done: true
                }
            }
        }

        return iter;
    }
}



for(const o of fibIter){
    console.log(o);
}