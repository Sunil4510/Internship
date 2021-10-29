
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let currdate = new Date(2020,2,19,12);
currdate = currdate.getHours();

let greeting = "";
const csstyle={};

if (currdate>=1 && currdate<12) 
{
	greeting="Good Morning";
	csstyle.color ="green";
}
else if(currdate>=12 && currdate<19)
{
	greeting="Good Afternoon";
	csstyle.color ="orange";
}
else{
	greeting="Good Night";
	csstyle.color ="black";
}

ReactDOM.render(
	<>
	<div>
	<h1>
	Hello Sir,<span style={csstyle}> {greeting}</span>
	</h1>
	</div>
	</>,
	document.getElementById("root")
	);