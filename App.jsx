import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Gnote from './Gnote';
import Notes from './Notes'
import './note.css';

const App = () =>{
    return(
        <>
        <div className="main_div">
        <Header/>
        <Gnote/>
        </div>
        </>
    );
}

export default App;