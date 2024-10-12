/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

function Counter() 
{

    const [count,setCount] = useState(0);

    const increment =() => {
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
    }

    const decrement =() => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    const getCount = () => {
        return count;
    }
    
    return(
        <div className='container'>
            <p className='count-display'>{getCount()}</p>
            <button className="bt" onClick={increment}>Increment</button>
            <button className="bt" onClick={decrement}>Decrement</button>
            <button className="bt" onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;