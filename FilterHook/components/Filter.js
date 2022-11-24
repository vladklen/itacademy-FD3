import React, { useState, useCallback } from 'react';

import Controls from "./Controls";
import List from "./List";

import "./Filter.css";

export default props => {

	console.log("render MobileCompany");

	const [list, sortList] = useState(props.list);
	console.log(list);


	function findItem(input) {
		const newList = list.filter(el => el.includes(input));
		sortList(newList);
	}

	function sortItem() {
		console.log(list)
		const newList = list.slice();
		newList.sort((a, b) => (a < b ? -1 : 1));
		sortList(newList);
	}

	const memoizedFindItems = useCallback(findItem, []);
	const memoizedSortItems = useCallback(sortItem, []);
	// useCallback - обёртка над useMemo
	// т.к. массив зависимостей пуст, useCallback при каждом рендере будет возвращать 
	// одну и ту же ссылку на функцию changeBalance, 
	// хоть сама changeBalance каждый раз новая

	return (
		<div className="Filter">
			<Controls cbFindItem={memoizedFindItems} cbSortItems={memoizedSortItems} />
			<List list={list} />
		</div>
	);
};
