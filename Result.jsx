import React from 'react';

const Result = (props) =>{
    const img = `https://source.unsplash.com/500x400/?${props.name}`;

    return(
        <>
            <div className="img">
                <img src={img} alt="Search"/>
            </div>
        </>
    );
}

export default Result;
