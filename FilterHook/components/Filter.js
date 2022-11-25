import React, { useState, useCallback } from 'react';

import Controls from "./Controls";
import List from "./List";

import "./Filter.css";

export default props => {

	console.log("render MobileCompany");

	const [list, setList] = useState(props.list);
	const [checked, setChecked] = useState(false);
	const [oldList, setOldList] = useState(null)

	const findItem = (input) => {
		const newList = list.filter(el => el.includes(input));
		setList(newList);
	}

	const sortItem = () => {
		if (!checked) {
			setOldList(list);
			const newList = list.slice();
			newList.sort((a, b) => (a < b ? -1 : 1));
			setList(newList);
		} else {
			setList(oldList);
		}
		setChecked((current) => !current)
	}

	const resetList = () => {
		setList(props.list);
		setChecked(false)
	}


	const memoizedFindItems = useCallback(findItem, []);
	const memoizedSortItems = useCallback(sortItem, [list]);//Зависит от list
	const memoizedResetItems = useCallback(resetList, []);


	return (
		<div className="Filter">
			<Controls
				cbFindItem={memoizedFindItems}
				cbSortItems={memoizedSortItems}
				cbResetList={memoizedResetItems}
				checkBox={checked} />
			<List list={list} />
		</div>
	);
};
