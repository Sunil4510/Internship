import React, { useEffect, useState } from 'react';

const Effect = () => {
    const [num,setNum] = useState(0);
    useEffect(()=>{
        document.title = `you Clicked ${num} times`;
       //alert("you clicked ");
    });

    return(
        <>
            <button onClick={()=>{
                setNum(num + 1);
            }}>Click me {num}</button>
        </>
    );
}

export default Effect;