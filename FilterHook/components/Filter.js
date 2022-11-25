import React, { useState, useMemo } from 'react';

import Controls from "./Controls";
import List from "./List";

import "./Filter.css";

export default props => {

	console.log("render Filter");

	const [list, setList] = useState(props.list)
	const [checkedSort, setCheckedSort] = useState(false)
	const [searchLine, setsearchLine] = useState('')

	const sortListHandler = () => {
		setCheckedSort((current) => !current)
	}

	const searchListHandler = (search) => {
		setsearchLine(search)
	}

	const sortList = useMemo(() => {
		if (checkedSort) {
			return [...list].sort((a, b) => (a < b ? -1 : 1))
		}
		return list
	}, [checkedSort, list])

	const sortedAndSearchList = useMemo(() => {
		return sortList.filter((el) => el.includes(searchLine.toLowerCase()))
	}, [searchLine, sortList])

	const resetListHandler = () => {
		setList(list)
		setCheckedSort(false)
		setsearchLine('')
	}


	return (
		<div className="Filter">
			<Controls
				valueSort={checkedSort}
				valueSearch={searchLine}
				resetList={resetListHandler}
				sortList={sortListHandler}
				searchList={searchListHandler}
			/>
			<List list={sortedAndSearchList} />
		</div>
	)
};
