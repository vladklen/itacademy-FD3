import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import { voteEvents } from './events';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

	static propTypes = {
		clients: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number.isRequired,
				fio: PropTypes.shape({
					family: PropTypes.string.isRequired,
					name: PropTypes.string.isRequired,
					patronymic: PropTypes.string.isRequired,
				}),
				balance: PropTypes.number.isRequired,
				workingMode: PropTypes.number.isRequired,
			})
		),

	};

	state = {
		clients: this.props.clients,
	};

	componentDidMount = () => {
		voteEvents.addListener('EClientDelete', this.deleteClient);
	};

	deleteClient = (id) => {
		let newClients = [...this.state.clients]; // копия самого массива клиентов
		newClients.forEach((c, i) => {
			if (c.id == id) {
				newClients.splice(i, 1)
			}
		});
		this.setState({ clients: newClients });
	}


	showAll = () => {
		let newClients = [...this.state.clients]; // копия самого массива клиентов
		newClients.forEach((c, i) => {
			if (c.workingMode == 0) {
				//if ( c.id==clientId && c.balance!==newBalance ) {
				let newClient = { ...c }; // копия хэша изменившегося клиента
				newClient.workingMode = 1;
				newClients[i] = newClient;
			}
		});
		this.setState({ clients: newClients });
	};

	showActive = () => {
		let newClients = [...this.state.clients]; // копия самого массива клиентов
		newClients.forEach((c, i) => {
			if (c.balance <= 0) {
				let newClient = { ...c }; // копия хэша изменившегося клиента
				newClient.workingMode = 0;
				newClients[i] = newClient;
			}
		});
		this.setState({ clients: newClients });
	};

	showBlocked = () => {
		let newClients = [...this.state.clients]; // копия самого массива клиентов
		newClients.forEach((c, i) => {
			if (c.balance > 0) {
				let newClient = { ...c }; // копия хэша изменившегося клиента
				newClient.workingMode = 0;
				newClients[i] = newClient;
			}
		});
		this.setState({ clients: newClients });
	};

	/*
	setBalance = (clientId,newBalance) => {
	  let changed=false;
	  let newClients=[...this.state.clients]; // копия самого массива клиентов
	  newClients.forEach( (c,i) => {
		 if ( c.id==clientId && c.balance!=newBalance ) {
			let newClient={...c}; // копия хэша изменившегося клиента
			newClient.balance=newBalance;
			newClients[i]=newClient;
			changed=true;
		 }
	  } );
	  if ( changed )
		 this.setState({clients:newClients});
	};
	*/


	render() {

		console.log("MobileCompany render");

		const clientsCode = this.state.clients.map(client => {
			if (client.workingMode == 1) {
				return <MobileClient key={client.id} info={client} />
			}
		}

		);

		return (
			<div className='MobileCompany'>
				<input type="button" value="Все" onClick={this.showAll} />
				<input type="button" value="Активные" onClick={this.showActive} />
				<input type="button" value="Заблокированные" onClick={this.showBlocked} />
				<table>
					<tr>
						<th>Фамилия</th>
						<th>Имя</th>
						<th>Отчество</th>
						<th>Баланс</th>
						<th>Статус</th>
						<th>Редактировать</th>
						<th>Удалить</th>
					</tr>
					{clientsCode}
				</table>
				<input type="button" value="Добавить клиента" onClick={this.setBalance1} />
			</div>
		)
			;

	}

}

export default MobileCompany;
