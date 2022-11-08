import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {
	state = {
	};

	render() {
		console.log("тут были?")
		return (
			<div className={this.props.color}>Test</div>
		);
	}

}

export default RainbowFrame;
