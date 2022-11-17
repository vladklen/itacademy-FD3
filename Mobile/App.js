import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let mode = 1;
let clientsArr = [
	{
		id: 101,
		fio: {
			family: "Иванов",
			name: "Иван",
			patronymic: "Иванович"
		},
		balance: 200,
		workingMode: 1
	},
	{
		id: 105,
		fio: {
			family: "Сидоров",
			name: "Сидор",
			patronymic: "Сидорович"
		},
		balance: 250,
		workingMode: 1
	},
	{
		id: 110,
		fio: {
			family: "Петров",
			name: "Петр",
			patronymic: "Петрович"
		},
		balance: 180,
		workingMode: 1
	},
	{
		id: 120,
		fio: {
			family: "Григорьев",
			name: "Григорий",
			patronymic: "Григорьевич"
		},
		balance: -220,
		workingMode: 1
	},
];

ReactDOM.render(
	<MobileCompany
		clients={clientsArr}
	/>
	, document.getElementById('container')
);

