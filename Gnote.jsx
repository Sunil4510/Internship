import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 
const Gnote = () => {

        const [note,setNote] = useState({
            title: "",
            content: "",
        });

            const iEvent = (event) =>{
                const {name,value} = event.target;
                setNote((preData) => {
                    return{
                        ...preData,
                        [name]: value,
                    };
                });
            }

    return(
            <>
                <div className="gnote">
                    <form className="for">
                    <div className="in_div"> 
                        <input type="text" className="in"  name="title" value={note.title} onChange={iEvent}  autoComplete="off" placeholder="Title"/><br/>
                        <textarea className="tex" row="" column="" name="content" value={note.content} onChange={iEvent} autoComplete="off" placeholder="write a note..."></textarea>
                     </div>  
                     <br/>
                        <Button className="bt2" style={{fontSize:40 , width:30}}>+</Button>
                        </form>
                        <br/>
                   
                </div>
            </>
    );
}

export default Gnote;