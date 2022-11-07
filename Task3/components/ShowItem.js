import React from 'react';
import PropTypes from 'prop-types';

import './ShowItem.css';

class ShowItem extends React.Component {
	static propTypes = {
		code: PropTypes.number.isRequired,
		count: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		brand: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		img: PropTypes.string.isRequired,
		freeanswer: PropTypes.bool,
	};

	render() {
		return <div className='ShowItem'>
			<h2>{this.props.name}</h2>
			<div>{this.props.name}</div>
			<div>{this.props.price}</div>
		</div>;
	}

}
export default ShowItem;