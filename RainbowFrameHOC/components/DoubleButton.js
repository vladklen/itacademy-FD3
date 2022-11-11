import React from 'react';
import PropTypes from 'prop-types';


import './DoubleButton.css';



class DoubleButton extends React.Component {


	render() {
		return (
			<div className="DoubleButton">
				<input type='button' value={this.props.caption1} className='item__button'
					onClick={() => this.props.cbPressed(1)}
				/>
				<p>{this.props.children}</p>
				<input type='button' value={this.props.caption2} className='item__button'
					onClick={() => this.props.cbPressed(2)}
				/>
			</div>
		);
	}
}

export default DoubleButton;
