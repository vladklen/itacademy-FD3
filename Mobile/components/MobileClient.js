import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';
import { mobileEvents } from './events';

class MobileClient extends React.PureComponent {

	static propTypes = {
		info: PropTypes.shape({
			id: PropTypes.number.isRequired,
			fio: PropTypes.shape({
				family: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				patronymic: PropTypes.string.isRequired,
			}),
			balance: PropTypes.number.isRequired,
		}),
	};

	state = {
		info: this.props.info,
		workingMode: this.props.workingMode,
	};

	componentDidUpdate = (oldProps, oldState) => {
		console.log("MobileClient id=" + this.props.info.id + " componentDidUpdate");
		if (this.props !== this.state)
			this.setState({ info: this.props.info });
	};

	deleteClient = (EO) => {
		mobileEvents.emit('EClientDelete', this.props.info.id);
	};

	editClient = () => {
		mobileEvents.emit('EEditClient', this.state.info);
	}

	render() {

		console.log("MobileClient id=" + this.state.info.fio.name + " render");

		return (
			<tr className='MobileClient'>
				<td className='MobileClientFamily'>{this.state.info.fio.family}</td>
				<td className='MobileClientName'>{this.state.info.fio.name}</td>
				<td className='MobileClientPatronymic'>{this.state.info.fio.patronymic}</td>
				<td className='MobileClientBalance'>{this.state.info.balance}</td>
				{
					(this.state.info.balance >= 0)
						? <td className='MobileClientBalance MobileClientBalanceActive'>Активен</td>
						: <td className='MobileClientBalance MobileClientBalanceBlocked'>Заблокирован</td>
				}
				<td><input type="button" value="Редактировать" onClick={this.editClient} /></td>
				<td><input type="button" value="Удалить" onClick={this.deleteClient} /></td>
			</tr>
		);

	}

}

export default MobileClient;
