import React from 'react';
import PropTypes from 'prop-types';

import RainbowFrame from './RainbowFrame';
import './RainbowBlock.css';


class RainbowBlock extends React.Component {

	state = {
	};


	render() {

		const rainbowElement = this.props.colors.map((el) => {
			console.log(el);
			<RainbowFrame color={el} />
		}
		);

		return (
			<div className='ColorsBlock'>
				<div className='result'>{rainbowElement}</div>
			</div>
		);
	}
}

export default RainbowBlock;
