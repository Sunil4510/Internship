import React, { useContext } from 'react';
import { FirstName , LastName } from './Context';

const CompC = () =>{
const fname = useContext(FirstName);
const lname = useContext(LastName);
 return(
     <>
       <h1>Hello {fname} {lname}</h1>
     </>
 );

};
export default CompC;