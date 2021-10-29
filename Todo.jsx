import React, { useState } from 'react';
import Todolist from './Todolist';
import './todoo.css';
const Todo = () =>{
    const [inputlist,setlist] = useState();
    const [list,setL] = useState([]);
    const itemEvent = (event) =>{
        setlist(event.target.value);

    }
    const onList = () =>{
        setL((olditems) =>{
            return [...olditems,inputlist]
        });
        setlist("");
    }

    const deleteitems = (id) => {
        setL((olditems) =>{
            return olditems.filter((arrele, index) => {
                    return index !== id ;
            });
        })
        
    }

    return(<>
            <div className="main_div">
                    <div className="center_div">
                        <h1>ToDo List</h1>
                        <input type="text" placeholder="Enter List" value={inputlist} onChange={itemEvent} />
                        <button className="plus" onClick={onList}>+</button>
                        <ol>
                            {list.map((itemval,index) =>{
                                return(
                               <Todolist 
                                    key={index}
                                    id={index}
                                    text={itemval}
                                    onSelect={deleteitems}
                               />
                                );
                            })}
                        </ol>
                    </div>
            </div>

    </>);
}

export default Todo;