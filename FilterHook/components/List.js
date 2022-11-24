import React, { useMemo } from 'react';

import "./List.css";

export default ({ list }) => {

	const wordList = list.join('\n');

	return (
		<div className='List'>
			<textarea value={wordList} rows={list.length}>
			</textarea>
		</div>
	)
};
