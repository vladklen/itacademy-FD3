import React, { useState } from 'react';

import "./List.css";

export default ({ list }) => {
	console.log("render Lists")
	const wordsList = list.join('\n')
	const [words, setWords] = useState(wordsList)

	return (
		<div className="List">
			<textarea value={wordsList} rows={list.length} readOnly onChange={() => setWords(words)} />
		</div>
	)
};

