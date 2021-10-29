import React, { useState } from 'react';
//import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
//import SweetAlert from 'react-bootstrap-sweetalert';
import Clock from 'react-digital-clock';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import './incdec.css';
const Inc = ()=>{
    const [num,setNum] = useState(0);
    const incc = () => {
        setNum(num+1);
    }
    const dec = () => {
        if(num > 0){
        setNum(num-1);
        }
        else{
            setNum(0);
           // <SweetAlert title="Here's a message!" onConfirm={this.onConfirm} onCancel={this.onCancel} />
            
          alert("Sorry We Can't Go Less Then Zero So Increment the Number ");
        }
    }
    return(
    <>
        <div className="main_div">
            <div className="center_div">
            <Clock/>
            <button className="btn btn-success">sunil</button>
                <h1><span className="spa">{num} </span></h1>
                <div className="button_div">
              
                <Tooltip title="Add">
                    <Button onClick={incc} style={{ color:"steelblue" , fontSize: 40 }} className="b1   ">+</Button>
                    </Tooltip>
                    <Tooltip title="Delete">
                    <Button onClick={dec} style={{ color:"steelblue" , fontSize: 70}}  className="b2 "> - </Button>
                    </Tooltip>
                </div>
            </div>
        </div>
    </>
    );
}

export default Inc;