import React from 'react';
import ReactDOM from 'react-dom';

import VotesBlock from './components/VotesBlock';

let questionText='ТестТестТесты';
let catalogItems=require('./answers.json');
let defaultFreeAnswerText="123123";

ReactDOM.render(
  <VotesBlock 
    question={questionText}
    answers={catalogItems}
    deffreeanswertext={defaultFreeAnswerText}
    startWorkMode={1}
  />
  , document.getElementById('container') 
);

