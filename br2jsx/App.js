import React from 'react';
import ReactDOM from 'react-dom';

import MainBlock from './components/MainBlock';

let text = "первый<br>второй<br/>третий<br />последний";

ReactDOM.render(
	<MainBlock
		text={text}
	/>
	, document.getElementById('container')
);

