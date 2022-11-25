import React, { useMemo } from 'react';

import "./List.css";

export default ({ list }) => {


	const memoizeedRenderResult = useMemo(() => {
		console.log("render list")
		const wordList = list.join('\n');
		return (
			<div className='List'>
				<textarea value={wordList} rows={list.length} readOnly>
				</textarea>
			</div >
		)
	}, [list]
	);

	return memoizeedRenderResult;
};

