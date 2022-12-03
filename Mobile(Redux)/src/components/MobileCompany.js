import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { showActive, showAll, showBlocked, removeClient, editOldClient } from '../redux/clientsSlice';

import { MobileClient } from './MobileClient';
import { EditClient } from './EditClient';

import "./MobileCompany.css"

export const MobileCompany = () => {
	const clients = useSelector(state => state.clients.clients);
	const dispatch = useDispatch();

	const [workMode, setWorkMode] = useState(0);
	const [editClientId, setEditClientId] = useState(null);

	const client = clients.map(person => {
		if (person.workingMode == 1) {
			return < MobileClient key={person.id} client={person} cbDelete={deleteClient} cbEdit={editClient} />;
		}
	})

	function addClient() {
		setWorkMode(1);
		setEditClientId(Math.max(...clients.map(el => el.id)) + 1);
	}

	function editClient(id) {
		setWorkMode(2);
		setEditClientId(id);
	}

	function deleteClient(id) {
		dispatch(removeClient(id))
	}

	function showPositive() {
		dispatch(showActive())
	}
	function showNegative() {
		dispatch(showBlocked())
	}
	function allClients() {
		dispatch(showAll())
	}
	function saveClient(family, name, patronymic, balance) {
		const person = {
			id: editClientId,
			fio: {
				family: family,
				name: name,
				patronymic: patronymic,
			},
			balance: balance,
			workingMode: 1
		}
		setWorkMode(0);
		return dispatch(editOldClient(person));
	}

	return (
		<>
			<div className='MobileCompany'>
				<div className='MobileCompany__buttons'>
					<input type="button" value="Все" onClick={allClients} />
					<input type="button" value="Активные" onClick={showPositive} />
					<input type="button" value="Заблокированные" onClick={showNegative} />
				</div>
				<table>
					<tbody>
						<tr>
							<th>Фамилия</th>
							<th>Имя</th>
							<th>Отчество</th>
							<th>Баланс</th>
							<th>Статус</th>
							<th>Редактировать</th>
							<th>Удалить</th>
						</tr>
						{client}
					</tbody>
				</table>
				<input type="button" value="Добавить клиента" onClick={addClient} />
				{
					(workMode == 1) &&
					<EditClient key={editClientId} client={[{
						id: editClientId,
						fio: {
							family: "",
							name: "",
							patronymic: ""
						},
						balance: "",
						workingMode: 1
					}]} cbSave={saveClient} />
				}
				{
					(workMode == 2) &&
					<EditClient key={editClientId} client={clients.filter((el) => el.id == editClientId)} cbSave={saveClient} />
				}
			</div>
		</>
	);

};
