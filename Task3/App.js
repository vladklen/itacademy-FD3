import React from 'react';
import ReactDOM from 'react-dom';

import ShopBlock from './components/ShopBlock';

let questionText = 'Мобильные телефоны';
let itemsList = require('./itemsList.json');

ReactDOM.render(
	<ShopBlock
		question={questionText}
		items={itemsList}
	/>
	, document.getElementById('container')
);

