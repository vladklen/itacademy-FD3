import React from 'react';
import ReactDOM from 'react-dom';

import Filter from './components/Filter';

let sortedList = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'];

ReactDOM.render(
	<Filter list={sortedList} />
	, document.getElementById('container')
);

