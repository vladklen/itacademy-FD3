import React from 'react';
import ReactDOM from 'react-dom';

import RainbowBlock from './components/RainbowBlock';

let colorsArr = require('./colors.json');

ReactDOM.render(
	<RainbowBlock
		colors={colorsArr}
	/>
	, document.getElementById('container')
);

