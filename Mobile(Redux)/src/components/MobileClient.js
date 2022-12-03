import React from 'react';
import { useDispatch } from 'react-redux';

import "./MobileClient.css"


export const MobileClient = ({ client, cbDelete, cbEdit }) => {

	return (
		<tr className='MobileClient'>
			<td className='MobileClientFamily'>{client.fio.family}</td>
			<td className='MobileClientName'>{client.fio.name}</td>
			<td className='MobileClientPatronymic'>{client.fio.patronymic}</td>
			<td className='MobileClientBalance'>{client.balance}</td>
			{
				(client.balance >= 0)
					? <td className='MobileClientBalance MobileClientBalanceActive'>Активен</td>
					: <td className='MobileClientBalance MobileClientBalanceBlocked'>Заблокирован</td>
			}
			<td><input type="button" value="Редактировать" onClick={() => cbEdit(client.id)} /></td>
			<td><input type="button" value="Удалить" onClick={() => cbDelete(client.id)} /></td>
		</tr>
	);

}
