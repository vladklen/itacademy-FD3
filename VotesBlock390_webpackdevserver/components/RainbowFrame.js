import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {


	render() {
		return (
			<div>
				{
					this.props.colors.length === 1 ?
						< div style={{ border: "solid 2px " + this.props.colors[0], padding: "20px" }}>
							{this.props.children}
						</div >
						:
						<div style={{ border: "solid 2px " + this.props.colors[0], padding: "20px" }}>
							<RainbowFrame colors={this.props.colors.slice(1)}>{this.props.children}</RainbowFrame>
						</div>
				}
			</div>
		);
	}

}

export default RainbowFrame;
