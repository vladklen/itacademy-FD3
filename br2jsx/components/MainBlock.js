import React from 'react';
import PropTypes from 'prop-types';

import './MainBlock.css';


class MainBlock extends React.Component {

	state = {
		// let text = "первый<br>второй<br/>третий<br />последний";
	};


	render() {
		let result = [];
		let index = this.props.text.split('br').length - 1

		function getListIdx(str, substr) {
			let listIdx = [];
			let lastIndex = -1
			while ((lastIndex = str.indexOf(substr, lastIndex + 1)) !== -1) {
				listIdx.push(lastIndex)
			}
			return listIdx
		}
		const firstIndex = getListIdx(this.props.text, '<');
		const secondIndex = getListIdx(this.props.text, '>');

		for (let i = 0; i <= index; i++) {
			i == 0 ? result.push(this.props.text.slice(i, firstIndex[i])) : result.push(this.props.text.slice(secondIndex[i - 1] + 1, firstIndex[i]));
		}

		const br = "br";

		result.map((el, i) => i == 0 ? null : result.splice(i * 2 - 1, 0, br));
		result = result.map((el, i) => el == "br" ? <br key={i} /> : el) //Добавляем ключ


		return (
			<div className='br2jx'> {result}</div >
		);
	}
}

export default MainBlock;
