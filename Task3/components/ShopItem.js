import React from 'react';
import PropTypes from 'prop-types';

import './ShopItem.css';

class ShopItem extends React.Component {

	static propTypes = {
		code: PropTypes.number.isRequired,
		count: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		brand: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		img: PropTypes.string.isRequired,
		cbSelected: PropTypes.func.isRequired,
		cbDelete: PropTypes.func.isRequired,
		cbEditItem: PropTypes.func.isRequired,
		selectedItemCode: PropTypes.number, // может быть null, пока ни один товар не выбран
	};

	answerClicked = (EO) => {
		this.props.cbSelected && this.props.cbSelected(this.props.code);
	};

	deleteItem = (eo) => {
		eo.stopPropagation();
		this.props.cbDelete(this.props.code);
	}


	selectRow = (eo) => {
		eo.stopPropagation();
		this.props.cbSelected(this.props.code);
	}

	editItem = (eo) => {
		eo.stopPropagation();
		this.props.cbEditItem(this.props.code);
	}

	freeAnswerTextChanged = (EO) => {
		console.log('VotesAnswer: текст свободного ответа изменён - ' + EO.target.value);
		this.props.cbFreeAnswerTextChanged(EO.target.value);
	};



	render() {
		return (
			<tr onClick={this.selectRow} className={this.props.selectedItemCode == this.props.code ? "ItemList__row selected" : "ItemList__row"}>
				<td>{this.props.name}</td>
				<td>{this.props.brand}</td>
				<td>
					<img src={this.props.img}>
					</img></td>
				<td>{this.props.count}</td>
				<td>{this.props.price}</td>
				<td>
					<input type='button' value='Edit' className='item__button'
						onClick={this.editItem}
					/>
					<input type='button' value='Delete' className='item__button'
						onClick={this.deleteItem}
					/>

				</td>
			</tr>
		)

	}

}

export default ShopItem;
