import React from 'react';
import PropTypes from 'prop-types';

import RainbowFrame from './RainbowFrame';
import './RainbowBlock.css';


class RainbowBlock extends React.Component {

	state = {
	};


	render() {
		return (
			<RainbowFrame colors={this.props.colors}>
				Hello!
			</RainbowFrame>
		);
	}
}

export default RainbowBlock;
