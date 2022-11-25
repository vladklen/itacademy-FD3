import React, { useMemo, useRef } from 'react';

import "./Controls.css";

export default ({ sortList, resetList, valueSort, valueSearch, searchList }) => {

	console.log("render Controls")
	const resetForm = (e) => {
		e.preventDefault()
		resetList()
	}

	return (
		<form className="Controls">
			<input type="checkbox" checked={valueSort} onChange={(e) => sortList(e.target.checked)} />
			<input
				type="text"
				value={valueSearch}
				onChange={(e) => searchList(e.target.value)}
			/>
			<input type="button" value="Сброс" onClick={resetForm}></input>
		</form>
	)
};
