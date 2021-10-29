import React, { useState } from 'react';
import  './hoo.css';

const Hook = () =>{
    let time = new Date().toLocaleTimeString();
    const [cTime,setTime] = useState(time);
     const Utime = () =>{
         time = new Date().toLocaleTimeString();
         setTime(time);
         
     };
     return(
         <>
            
             <div>
             <h1 className="h">{cTime}</h1>
             <button className="but"  onClick={Utime}>Get time</button>
             </div>
         </>
     );
};

export default Hook;