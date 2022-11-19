import React from 'react';
import PropTypes, { number } from 'prop-types';

import MobileClient from './MobileClient';
import EditClient from './EditClient'
import { mobileEvents } from './events';

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
		editMode: PropTypes.number.isRequired,
	};

	state = {
		clients: this.props.clients,
		editMode: this.props.editMode,
		editableClient: null,
		newId: this.props.clients.slice(-1)[0].id+1,
		newClient: {
			id: null,
			fio: {
				family: "",
				name: "",
				patronymic: "",
			},
			balance: 0,
			workingMode: 1,
		},
	};

	componentDidMount = () => {
		mobileEvents.addListener('EClientDelete', this.deleteClient);
		mobileEvents.addListener('EEditAddClient', this.addClient);
		mobileEvents.addListener('EEditClient', this.EditClient);
		
	};
	componentWillUnmount = () => {
		mobileEvents.addListener('EClientDelete', this.deleteClient);
		mobileEvents.addListener('EEditAddClient', this.addClient);
		mobileEvents.addListener('EEditClient', this.EditClient);
	};

	addClient = (client) => {
		let newClients = [...this.state.clients];
		if (client.id == null) {
			client.id = this.state.newId;
			newClients.push(client);
			this.setState({
				clients: newClients,
				editMode: 0,
				newId: this.state.newId + 1,
			});
		} else {
			newClients.forEach((c, i) => {
				if (c.id == client.id) {
					newClients[i] = client;
				}
			});
			this.setState({ clients: newClients, editMode: 0 });
		}
	};

	addNewClient = () => {
		this.setState({ editMode: 1 });
	}


	EditClient = (client) => {
		let newClients = [...this.state.clients];
		newClients.forEach((c, i) => {
			if (c.id == client.id) {
				let newClient = c;
				this.setState({ clients: newClients, editableClient: newClient, editMode: 2 });
			}
		})
	};


	deleteClient = (id) => {
		this.setState({
			clients: this.state.clients.filter((el) => (el.id !== id)),
		})
	}


	showAll = () => {
		let newClients = [...this.state.clients];
		newClients.forEach((c, i) => {
			if (c.workingMode == 0) {
				let newClient = { ...c };
				newClient.workingMode = 1;
				newClients[i] = newClient;
			}
		});
		this.setState({ clients: newClients });
	};

	showActive = () => {
		let newClients = [...this.state.clients];
		newClients.forEach((c, i) => {
			if (c.balance <= 0) {
				let newClient = { ...c };
				newClient.workingMode = 0;
				newClients[i] = newClient;
			}
		});
		this.setState({ clients: newClients });
	};

	showBlocked = () => {
		let newClients = [...this.state.clients];
		newClients.forEach((c, i) => {
			if (c.balance > 0) {
				let newClient = { ...c }; // копия хэша изменившегося клиента
				newClient.workingMode = 0;
				newClients[i] = newClient;
			}
		});
		this.setState({ clients: newClients });
	};





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
				<div className='MobileCompany__buttons'>
					<input type="button" value="Все" onClick={this.showAll} />
					<input type="button" value="Активные" onClick={this.showActive} />
					<input type="button" value="Заблокированные" onClick={this.showBlocked} />
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
						{clientsCode}
					</tbody>
				</table>
				<input type="button" value="Добавить клиента" onClick={this.addNewClient} />
				{
					(this.state.editMode == 1) &&
					<EditClient key={this.state.newId} item={this.state.newClient} />
				}
				{
					(this.state.editMode == 2) &&
					<EditClient key={this.state.editableClient.id} item={this.state.editableClient} />
				}
			</div>
		)
			;

	}

}

export default MobileCompany;
