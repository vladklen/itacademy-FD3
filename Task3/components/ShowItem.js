import React from 'react';
import PropTypes from 'prop-types';

import './ShowItem.css';

class ShowItem extends React.Component {
	static propTypes = {
		item: PropTypes.arrayOf(
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

	render() {
		console.log(this.props.item);
		return <div className='ShowItem'>
			<span>{this.props.item.name}</span>
		</div>;
	}

}
export default ShowItem;