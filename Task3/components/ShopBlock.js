import React from 'react';
import PropTypes from 'prop-types';

import './ShopBlock.css';

import ShopItem from './ShopItem';
import ShowItem from './ShowItem';
import EditItem from './EditItem';

class ShopBlock extends React.Component {

	static propTypes = {
		question: PropTypes.string.isRequired,
		items: PropTypes.arrayOf(
			PropTypes.shape({
				code: PropTypes.number.isRequired,
				count: PropTypes.number.isRequired,
				name: PropTypes.string.isRequired,
				brand: PropTypes.string.isRequired,
				price: PropTypes.number.isRequired,
				img: PropTypes.string.isRequired,
			})
		),
	};

	state = {
		newItem: {
			code: 0,
			count: 0,
			name: "",
			brand: "",
			price: 0,
			img: "",
		},
		newItemCode: this.props.items.length + 1,
		currentItem: undefined,
		itemList: this.props.items,
		selectedItemCode: null,
		deleteElementCode: null,
		workMode: 1, //0-список, 1- просмотр, 2-редактирование, 3-создание.
	};

	answerSelected = (code) => {
		this.setState({
			selectedItemCode: code,
			workMode: 1,
			currentItem: this.state.itemList.find((el) => el.code === code),
		});
	};

	deleteElement = (code) => {
		this.setState({ itemList: this.state.itemList.filter((el) => (el.code !== code)) })
	}

	editItem = (code) => {
		this.setState({
			selectedItemCode: code,
			workMode: 2,
			currentItem: this.state.itemList.find((el) => el.code === code),
		});
	}

	saveItem = (item) => {
		if (item) {
			if (this.state.workMode === 3) {
				this.state.itemList.push(item);
				this.setState({
					itemList: this.state.itemList,
					workMode: 0,
				})
			} else (
				this.setState({
					itemList: this.state.itemList.map((el) => el.code === this.state.currentItem.code ? el = item : el),
					workMode: 0,
				})
			)
		} else {
			this.setState({
				workMode: 0,
			})
		}

	}

	createNewProduct = () => {
		this.setState({
			workMode: 3,
			newItemCode: this.state.newItemCode + 1,
			currentItem: { ...this.state.newItem, code: this.state.newItemCode },
		})
	}


	render() {
		const itemCode = this.state.itemList.map((v) =>
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
				cbEditItem={this.editItem}
				selectedItemCode={this.state.selectedItemCode}
			/>
		);

		return (
			<div className='ShopBlock'>
				<div className='title'>{this.props.question}</div>
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
				<input type='button' value='New Product' onClick={this.createNewProduct} />
				{
					(this.state.workMode == 3) &&
					<EditItem key={this.state.newItemCode} item={this.state.currentItem} cbSave={this.saveItem} />
				}
				{
					(this.state.currentItem && this.state.workMode == 1) &&
					<ShowItem {...this.state.currentItem} />
				}
				{
					(this.state.currentItem && this.state.workMode == 2) &&
					<EditItem key={this.state.selectedItemCode} item={this.state.currentItem} cbSave={this.saveItem} />
				}
			</div>
		);
	}

}

export default ShopBlock;
