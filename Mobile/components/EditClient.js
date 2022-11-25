import React from 'react';
import PropTypes from 'prop-types';

import './EditClient.css';
import { mobileEvents } from './events';

class EditClient extends React.Component {
	static propTypes = {
		item: PropTypes.shape({
			id: PropTypes.number,
			fio: PropTypes.shape({
				family: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				patronymic: PropTypes.string.isRequired,
			}),
			balance: PropTypes.number.isRequired,
		}),
	};

	state = {
		client: this.props.item,
	}

	newFamilyRef = React.createRef();
	newNameRef = React.createRef();
	newPatronymicRef = React.createRef();
	newBalanceRef = React.createRef();

	addClientInformation = () => {
		let newClient = {
			...this.state.client,
			fio: {
				family: this.newFamilyRef.current.value,
				name: this.newNameRef.current.value,
				patronymic: this.newPatronymicRef.current.value,
			},
			balance: Number(this.newBalanceRef.current.value),
		}
		mobileEvents.emit('EEditAddClient', newClient);
	}

	render() {
		return <div className='EditItem'>
			<span>Фамилия</span>
			<div>
				<input type="text" defaultValue={this.state.client.fio.family} ref={this.newFamilyRef} />
			</div>
			<span>Имя</span>
			<div>
				<input type="text" defaultValue={this.state.client.fio.name} ref={this.newNameRef} />
			</div>
			<span>Отчество</span>
			<div>
				<input type="text" defaultValue={this.state.client.fio.patronymic} ref={this.newPatronymicRef} />
			</div>
			<span>Баланс</span>
			<div>
				<input type="number" defaultValue={this.state.client.balance} ref={this.newBalanceRef} />
			</div>
			<div>
				<input type="button" value="Сохранить" onClick={this.addClientInformation} />
			</div>
		</div>;
	}
}
export default EditClient;