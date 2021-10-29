import React, { useState } from 'react';
import './Events.css';

const Event = () =>{
    const purple = "skyblue"
    const [bg,setBg] = useState(purple);
    const [name,setName] = useState("Click Me");
    const bgCh = () =>{
    let ch = "#8e44ad";
        setBg(ch);
        setName("Ayyo   🤯🤯 🤯 🤯  ");
    };
    const dbch = () =>{
        setBg(purple);
        setName("Click me");
    }
    return(<>
            <div style={ { backgroundColor:bg } }>

            <button onMouseEnter = {bgCh} onMouseLeave={dbch}>{name} </button>
            </div>
          

    </>

    );
};

export default Event;