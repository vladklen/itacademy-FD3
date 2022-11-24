import React, { useMemo, useRef } from 'react';

import "./Controls.css";

export default ({ cbFindItem, cbSortItems }) => {
	// console.log("render Controls ");

	const inputText = useRef(null);

	const checkInput = () => {
		if (inputText.current) {
			cbFindItem(inputText.current.value)
		}
	};


	return (
		<div className='Controls'>
			<input type="checkbox" onChange={cbSortItems}></input>
			<input ref={inputText} onChange={checkInput} type="text"></input>
			<input type="button" value="сброс"></input>
		</div>
	)

};
