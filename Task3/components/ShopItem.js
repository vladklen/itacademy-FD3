import React from 'react';
import PropTypes from 'prop-types';

import './ShopItem.css';

class ShopItem extends React.Component {

  static propTypes = {
	code: PropTypes.number.isRequired,
	count: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	brand: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	img: PropTypes.string.isRequired,
	isSelected: PropTypes.bool,
	workMode: PropTypes.number.isRequired,
	freeanswer: PropTypes.bool,
	cbFreeAnswerTextChanged: PropTypes.func.isRequired,
	cbSelected: PropTypes.func.isRequired,
	selectedAnswerCode: PropTypes.number, // может быть null, пока ни один ответ не выбран
  };

  answerClicked = (EO) => {
    this.props.cbSelected(this.props.code);
  };

  freeAnswerTextChanged = (EO) => { 
    console.log('VotesAnswer: текст свободного ответа изменён - '+EO.target.value); 
    this.props.cbFreeAnswerTextChanged(EO.target.value);
  };

  render() {

    if ( this.props.workMode==1 ) {
		let selectedRow = "product__row";
		if(this.props.isSelected){
			selectedRow += " active";
		}
      return (
			<tr className={selectedRow}>
				<td>{this.props.name}</td>
				<td>{this.props.brand}</td>
				<td>
					<img src={this.props.img}>
					</img></td>
				<td>{this.props.count}</td>
				<td>{this.props.price}</td>
				<td>
				<input type='button' value='Clear' className='item__button'
                defaultValue={this.props.freeanswertext} onChange={this.freeAnswerTextChanged}
                disabled={this.props.selectedAnswerCode!=this.props.code}
              />
				  <input type='button' value='Delete' className='item__button'
                defaultValue={this.props.freeanswertext} onChange={this.freeAnswerTextChanged}
                disabled={this.props.selectedAnswerCode!=this.props.code}
              />

				</td>
			</tr>
      )
    }
    else {
      return (
        <div className='VotesBlockAnswer'>
          <span className='Count'>{this.props.count}</span>
          <span className='Text'>{this.props.name}</span>
        </div>
      );
    }

  }

}

export default ShopItem;


