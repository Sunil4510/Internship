import React from 'react';
import { useHistory } from 'react-router-dom';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import HomeIcon from '@material-ui/icons/Home';

const About = (props) => {
    const history = useHistory();
    return(
        <>
        <h1>Hello, i am{props.name} Page</h1>
         <button style={{color:'red',
             fontSize:30,borderRadius:4,
             background:'yellow',border:'3 solid blue',
             width:80,height:50,
             float:'right',marginTop:200,marginRight:500}} 
             onClick={()=> history.goBack()}> <KeyboardBackspaceIcon/> 
             </button>
             <button style={{color:'red', 
            borderRadius:4,
            width:80,height:50,
            float:'left',marginTop:200,marginLeft:400,
            background:'yellow',border:'3 solid blue'}}
             onClick={()=> history.push('/')}> <HomeIcon/></button>
        </>
    );
}

export default About;