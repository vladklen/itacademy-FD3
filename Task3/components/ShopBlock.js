import React from 'react';
import PropTypes from 'prop-types';

import './ShopBlock.css';

import ShopItem from './ShopItem';

class ShopBlock extends React.Component {

	static propTypes = {
		startWorkMode: PropTypes.number.isRequired,
		question: PropTypes.string.isRequired,
		items: PropTypes.arrayOf(
			PropTypes.shape({
				code: PropTypes.number.isRequired,
				count: PropTypes.number.isRequired,
				name: PropTypes.string.isRequired,
				brand: PropTypes.string.isRequired,
				price: PropTypes.number.isRequired,
				img: PropTypes.string.isRequired,
				freeanswer: PropTypes.bool,
			})
		),
	};

	state = {
		itemList: this.props.items,
		selectedAnswerCode: null,
		deleteElementCode: null,
		workMode: this.props.startWorkMode,
	};

	answerSelected = (code) => {
		this.setState({ selectedAnswerCode: code });
	};

	deleteElement = (code) => {
		this.setState({ itemList: this.state.itemList.filter((el) => (el.code !== code)) })
	}


	render() {
		console.log(this.state.itemList);
		const itemCode = this.state.itemList.map(v =>
			<ShopItem key={v.code}
				name={v.name}
				brand={v.brand}
				price={v.price}
				img={v.img}
				count={v.count}
				code={v.code}
				freeanswer={v.freeanswer} freeanswertext={this.state.freeanswertext}
				cbSelected={this.answerSelected}
				cbDelete={this.deleteElement}
				cbFreeAnswerTextChanged={this.freeAnswerTextChanged}
				selectedAnswerCode={this.state.selectedAnswerCode}
				workMode={this.state.workMode}
			/>
		);

		return (
			<div className='VotesBlock'>
				<div className='ShopTitle'>{this.props.question}</div>
				<table className='ShopItem'>
					<tbody>
						<tr>
							<th>{"Model"}</th>
							<th>{"Brand"}</th>
							<th>{"Picture"}</th>
							<th>{"Quantity"}</th>
							<th>{"Price"}</th>
							<th>{"Control"}</th>
						</tr>
						{itemCode}
					</tbody>
				</table>
				{
					((this.state.workMode == 1) && this.state.selectedAnswerCode) &&
					<input type='button' value='проголосовать' onClick={this.vote} />
				}
			</div>
		)
			;

	}

}

export default ShopBlock;
