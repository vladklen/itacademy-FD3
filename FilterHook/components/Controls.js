import React, { useMemo, useRef } from 'react';

import "./Controls.css";

export default ({ cbFindItem, cbSortItems, cbResetList, checkBox }) => {

	const inputText = useRef(null);

	const memoizeedRenderResult = useMemo(() => {
		console.log("render Controls ");

		const checkInput = () => {
			if (inputText.current) {
				cbFindItem(inputText.current.value)
			}
		};

		const resetForm = (e) => {
			e.preventDefault();
			console.log(inputText);
			inputText.current.value = "";
			cbResetList();
		}

		return (
			<div className='Controls'>
				<input type="checkbox" onChange={cbSortItems} checked={checkBox}></input>
				<input ref={inputText} onChange={(checkInput)} type="text" placeholder="Search"></input>
				<input type="button" onClick={resetForm} value="сброс"></input>
			</div>
		);

	}, [cbFindItem, cbSortItems, cbResetList]
	);

	return memoizeedRenderResult;
};
