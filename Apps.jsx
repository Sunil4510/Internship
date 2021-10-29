
import React from 'react';
import Card from './Card';
import data from'./data';

const Apps = () => (
    <>
    <nav>
	<h1 className="head_style">A TOP FIVE WEB SERIES</h1>
	</nav>

    { data.map((val) =>  {
    
	return(
		<Card
		key={val.id}
	imgsrc={val.imgsrc}
	title={val.title}
	sname={val.sname}
	link={val.link}
	/>
		);
    })}
</>
	// body...
);

export default Apps;
