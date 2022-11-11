import React from 'react';



let withRainbowFrame = color => Comp => props => {
	let colorBorder = color.reduce((acc, el) => {
		return <div style={{ border: "solid 2px " + el, padding: "5px" }} >{acc}</div>
	}, <Comp {...props} />)


	return (
		<div>{colorBorder}</div>
	);
}


export { withRainbowFrame };