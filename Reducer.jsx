//rafce
//imr
//imrd
//import { CardActions } from '@material-ui/core';
import React,{useReducer} from 'react'

//const initialState = 0;
const reducer = (states,actions) =>{

        if(actions.type === "INCREMENT")
        {
            return states + 1;
        }
        else
        {
                return states - 1;
        }


}
const Reducer = () => {

    const reducer = (states,actions) =>{

        if(actions.type === "INCREMENT")
        {
            return states + 1;
        }
        else
        {
                return states - 1;
        }


}

    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <p>{state}</p>
            <div>
                <button onClick={()=> dispatch({type: "INCREMENT" })}> Inc </button>
                <button onClick={()=> dispatch({type: "DECREMENT" })}>Dec</button>
            </div>
            
        </div>
    )
}

export default Reducer;
