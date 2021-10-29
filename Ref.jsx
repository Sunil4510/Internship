import React, { useState,useRef } from 'react'
import './ref.css';

const Ref = () => {
    const luckyname  = useRef(null)
    const [show,setShow] = useState(false);
    const submitform = (e) =>{
            e.preventDefault();
            const name = luckyname.current.value;
            name === "" ? alert("Please fill the data"):setShow(true);
    }
    return (
        <div className="main_div">
            <form onSubmit={submitform}>
            <div className="child_div">
                <label htmlFor="luckyName">enter your luckyName</label>
                <input type="text" id="luckyname" ref={luckyname} />
                <button>Submit</button>
             </div>
             <br/>
            </form>
            <p className="pk">{show ? `your luckyname is ${luckyname.current.value}`:""}</p>
        </div>
    )
}

export default Ref;
