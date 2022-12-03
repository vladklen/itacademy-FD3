import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import "./EditClient.css"

export const EditClient = ({ client, cbSave }) => {

	const [family, setFamily] = useState(client[0].fio.family)
	const [name, setName] = useState(client[0].fio.name)
	const [patronymic, setPatronymic] = useState(client[0].fio.patronymic)
	const [balance, setBalanse] = useState(client[0].balance)

	return <div className='EditItem'>
		<span>Фамилия</span>
		<div>
			<input type="text" value={family} onChange={e => setFamily(e.target.value)} />
		</div>
		<span>Имя</span>
		<div>
			<input type="text" value={name} onChange={e => setName(e.target.value)} />
		</div>
		<span>Отчество</span>
		<div>
			<input type="text" value={patronymic} onChange={e => setPatronymic(e.target.value)} />
		</div>
		<span>Баланс</span>
		<div>
			<input type="number" value={balance} onChange={e => setBalanse(e.target.value)} />
		</div>
		<div>
			<input type="button" value="Сохранить" onClick={() => cbSave(family, name, patronymic, balance)} />
		</div>
	</div>;
}
