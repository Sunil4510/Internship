import React from 'react';
import * as s from './ap'

function Calc(argument) {
	// body...
return(
<>
	<ol>
	<li>addition of 2+3 = {s.add(2,3)}</li>
	<li>substraction of 3-2 = {s.sub(3,2)}</li>
	<li>multiplication of 2*3 = {s.mul(2,3)}</li>
	<li>division of 3/2 = {s.div(3,2)}</li>
	</ol>
	</>
	);
}

export default Calc;