import React from 'react';

const Todolist = (props) => {
   
    return(
        <>
            <div>
            <li className="lie">{props.text} <span className="spa">{<button className="minus" onClick={ () => {
                    props.onSelect(props.id) 
                    } 
                    }>-</button>}</span></li> 
               
                
            </div>
        </>
    );
};

export default Todolist;