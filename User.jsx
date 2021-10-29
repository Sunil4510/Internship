import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const User = () => {
    const location = useLocation();
    const {fname, lname} = useParams();
    const history = useHistory();
    return(
        <>
        <h1>Hello, i am {fname} {lname} Page</h1>
        <br/>
        <h1>Hello {fname} {lname} your location is : {location.pathname}</h1>
        <br/>
        {location.pathname === `/user/${fname}/${lname}` ? (
            <button style={{color:'red',
             fontSize:30,borderRadius:4,
             background:'yellow',border:'3 solid blue',
             width:80,height:50,
             float:'right',marginTop:200,marginRight:500}} 
             onClick={()=> history.goBack()}> <KeyboardBackspaceIcon/> </button>
        ):null
        }
        <br/>
        <br/>
        <br/>
        {location.pathname === `/user/${fname}/${lname}` ? (
            <button style={{color:'red', 
            fontSize:30,borderRadius:4,
            width:80,height:50,
            float:'left',marginTop:150,marginLeft:400,
            background:'yellow',border:'3 solid blue'}}
             onClick={()=> history.push('/')}> <HomeIcon/></button>
        ):null
        }
        </>
    );
}

export default User;