import React, { useState } from 'react';
import useTitle from './useTitle';

const UseT = () => {
    const [count,setCount] = useState(0);
    useTitle(count);
    return(
        <>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count + 1)}>click me 😄</button>
            <button onClick={()=>setCount(0)}>Reset </button>
        </>
    );
}

export default UseT;