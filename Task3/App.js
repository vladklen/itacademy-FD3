import React from 'react';
import ReactDOM from 'react-dom';

import ShopBlock from './components/ShopBlock';

let questionText = 'Магаз11ин';
let itemsList = require('./itemsList.json');

ReactDOM.render(
	<ShopBlock
		question={questionText}
		items={itemsList}
		startWorkMode={1}
	/>
	, document.getElementById('container')
);

