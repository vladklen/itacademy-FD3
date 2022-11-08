import React from 'react';
import PropTypes from 'prop-types';

import RainbowFrame from './RainbowFrame';
import './RainbowBlock.css';


class RainbowBlock extends React.Component {

	state = {
	};


	render() {

		const rainbowElement = this.props.colors.map(el =>
			<RainbowFrame color={el} />
		);
		console.log(rainbowElement);
		return (
			<div className='ColorsBlock'>
				<div className='result'>{rainbowElement}</div>
			</div>
		);
	}
}

export default RainbowBlock;
