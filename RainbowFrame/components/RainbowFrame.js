import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {


	render() {
		let colorBorder = this.props.colors.reduce((acc, el) => {
			return <div style={{ border: "solid 2px " + el, padding: "20px" }} >{acc}</div>
		}, this.props.children)

		return (
			<div>{colorBorder}</div>
		);
	}

}

export default RainbowFrame;
