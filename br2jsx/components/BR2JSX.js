import React from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css';


class BR2JSX extends React.Component {

	render() {

		const sortedText = this.props.text.replace(/(<(\/?[^>]+)>)/g, ' ')
			.split(' ')
			.map((el, i) => (i === 0 ? el : [<br key={i} />, el]));


		return (
			<div className='br2jx'> {sortedText}</div >
		);
	}
}

export default BR2JSX;
