﻿import React from 'react';
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
		workMode: PropTypes.number.isRequired,
		cbSelected: PropTypes.func.isRequired,
		cbDelete: PropTypes.func.isRequired,
		selectedAnswerCode: PropTypes.number, // может быть null, пока ни один ответ не выбран
	};

	answerClicked = (EO) => {
		this.props.cbSelected && this.props.cbSelected(this.props.code);
	};

	deleteItem = (eo) => {
		eo.stopPropagation();
		this.props.cbDelete(this.props.code);
	}


	selectRow = (EO) => {
		this.props.cbSelected(this.props.code);
	}

	freeAnswerTextChanged = (EO) => {
		console.log('VotesAnswer: текст свободного ответа изменён - ' + EO.target.value);
		this.props.cbFreeAnswerTextChanged(EO.target.value);
	};



	render() {

		if (this.props.workMode == 1) {

			return (
				<tr onClick={this.selectRow} className={this.props.selectedAnswerCode == this.props.code ? "ItemList__row selected" : "ItemList__row"}>
					<td>{this.props.name}</td>
					<td>{this.props.brand}</td>
					<td>
						<img src={this.props.img}>
						</img></td>
					<td>{this.props.count}</td>
					<td>{this.props.price}</td>
					<td>
						<input type='button' value='Clear' className='item__button'
							onChange={this.freeAnswerTextChanged}
						/>
						<input type='button' value='Delete' className='item__button'
							onClick={this.deleteItem}
						/>

					</td>
				</tr>
			)
		}
		else {
			return (
				<div className='VotesBlockAnswer'>
					<span className='Count'>{this.props.count}</span>
					<span className='Text'>{this.props.name}</span>
				</div>
			);
		}

	}

}

export default ShopItem;


