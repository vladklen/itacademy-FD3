import React from 'react';
import ReactDOM from 'react-dom';

import ShopBlock from './components/ShopBlock';

let questionText='Магаз11ин';
let itemsList=require('./itemsList.json');
let isSelected = true;

ReactDOM.render(
  <ShopBlock 
    question={questionText}
    items={itemsList}
    startWorkMode={1}
	 select = {isSelected}
  />
  , document.getElementById('container') 
);

