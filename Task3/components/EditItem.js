import React from 'react';
import PropTypes from 'prop-types';

import './EditItem.css';

class EditItem extends React.Component {
	static propTypes = {
		item: PropTypes.shape({
			code: PropTypes.number.isRequired,
			count: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			brand: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			img: PropTypes.string.isRequired,
		}),
		cbSave: PropTypes.func.isRequired,
	};

	state = {
		name: this.props.item.name,
		nameError: "",
		brand: this.props.item.brand,
		brandError: "",
		count: this.props.item.count,
		countError: "",
		img: this.props.item.img,
		imgError: "",
		price: this.props.item.price,
		priceError: "",
	}

	nameChange = (eo) => {
		this.setState({ name: eo.target.value }, this.validAll);
	}
	brandChange = (eo) => {
		this.setState({ brand: eo.target.value }, this.validAll);
	}
	countChange = (eo) => {
		this.setState({ count: eo.target.value }, this.validAll);
	}
	imgChange = (eo) => {
		this.setState({ img: eo.target.value }, this.validAll);
	}
	priceChange = (eo) => {
		this.setState({ price: eo.target.value }, this.validAll);
	}
	validAll = () => {
		const nameError = this.state.name.length ? "" : "Введите название товара";
		const brandError = this.state.brand.length ? "" : "Введите название производителя товара";
		const countError = !isNaN(this.state.count) && !this.state.count == " " ? "" : "количество";
		const imgError = this.state.img.length ? "" : "Введите URL картинки товара";
		const priceError = !isNaN(this.state.price) && !this.state.price == " " ? "" : "введите стоимость";
		this.setState({ nameError, brandError, countError, imgError, priceError });
	}

	render() {
		return <div className='EditItem'>
			<h2>ID:"{this.props.item.code}"</h2>
			<input type="text" value={this.state.name} onChange={this.nameChange} />
			<span>{this.state.nameError}</span>
			<input type="text" value={this.state.brand} onChange={this.brandChange} />
			<span>{this.state.brandError}</span>
			<input type="text" value={this.state.count} onChange={this.countChange} />
			<span>{this.state.countError}</span>
			<input type="text" value={this.state.img} onChange={this.imgChange} />
			<span>{this.state.imgError}</span>
			<input type="text" value={this.state.price} onChange={this.priceChange} />
			<span>{this.state.priceError}</span>
			<div className='form-buttons'>
				<input disabled={!!(this.state.nameError ||
					this.state.brandError ||
					this.state.imgError ||
					this.state.countError ||
					this.state.priceError)} type="button" value="Save" onClick={() => this.props.cbSave(
						{
							name: this.state.name,
							brand: this.state.brand,
							count: Number(this.state.count),
							img: this.state.img,
							price: Number(this.state.price),
							code: this.props.item.code,
						})} />
				<input type="button" value="Cancel" onClick={() => this.props.cbSave(this.props.item)} />
			</div>
		</div>;
	}

}
export default EditItem;