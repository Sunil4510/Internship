import React, { useState } from 'react';
import Result from './Result';
const Search = () =>{
const [img,setImg] = useState();

const inpu = (event) =>{
   const data = event.target.value;
   setImg(data); 
} 

return(
        <>
            <div className="search">
                    <input className="sub" type="text" placeholder="Enter A Name"
                     value={img} onChange={inpu} 
                     autoComplete="off" />
            </div>
            { img === "" ? null : <Result name={img}/>}



        </>
);
}

export default Search;