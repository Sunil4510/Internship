import React, { useState } from 'react';
import './hoo.css';
const Form = () =>{
    const [fullname, setName] = useState({
        fname:"",
        lname:"",
        email:"",
        mobile:"",
    });
  
const input = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;
    const {name,value} = event.target;
    setName((prev) => {
 return{
    ...prev,
    [name]:value,
 };
        // if(name === "fname"){
        // return{
        //     fname:value,
        //     lname:prev.lname,
        //     email:prev.email,
        //     mobile:prev.mobile,
        // };
        // }
        // else if(name ==="lname")
        // {
        //     return{
        //     fname:prev.fname,
        //     lname:value,
        //     email:prev.email,
        //     mobile:prev.mobile,
        //     };
        // }
        // else if(name ==="email")
        // {
        //     return{
        //     fname:prev.fname,
        //     lname:prev.lname,
        //     email:value,
        //     mobile:prev.mobile,
        //     };
        // }  
        // else if(name ==="mobile")
        // {
        //     return{
        //     fname:prev.fname,
        //     lname:prev.lname,
        //     email:prev.email,
        //     mobile:value,
        // };
        // }
    });

}


const onsubmits = (event) =>{
    event.preventDefault();

}
    
    return(
        <>
        <form  onSubmit={onsubmits}>
            <div>
                <h1 className="h">Hello your fullname is {fullname.fname} {fullname.lname} <br/> {fullname.email} {fullname.mobile} </h1>
              
                <div>
                <input type="text" placeholder="Enter Your Name" name="fname" onChange={input} required />
                <input type="text" placeholder="Enter Your SirName" name="lname" onChange={input}  required />
                <input type="email" placeholder="Enter Your Email" name="email" onChange={input}  required />
                <input type="number" placeholder="Enter Your Number" name="mobile" onChange={input}  required />
                </div>
                <button className="but" >Submit 👍 </button>
            </div>
            </form> 
        </>
    )


}

export default Form;