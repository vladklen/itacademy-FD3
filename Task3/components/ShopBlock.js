import React from 'react';
import PropTypes from 'prop-types';

import './ShopBlock.css';

import ShopItem from './ShopItem';

class ShopBlock extends React.Component {

  static propTypes = {
    startWorkMode: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    items:PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
		  brand: PropTypes.string.isRequired,
		  price: PropTypes.number.isRequired,
		  img: PropTypes.string.isRequired,
        freeanswer: PropTypes.bool,
      })
    ),
  };

  state = {
    selectedAnswerCode: null,
    workMode:this.props.startWorkMode,
  };

  answerSelected = (code) => {
    console.log('выбран ответ с кодом '+code);
    this.setState( {selectedAnswerCode:code} );
  };

  vote = () => {
    console.log('голосование завершено, выбран ответ с кодом '+this.state.selectedAnswerCode);

    this.props.answers.forEach( answer => {
      if ( answer.code==this.state.selectedAnswerCode )
        answer.count++;
    } );

    this.setState( {workMode:2} );
  };

  freeAnswerTextChanged = (fat) => { 
    console.log('VotesBlock: текст свободного ответа изменён - '+fat); 
    this.setState( {freeanswertext:fat} );
  };

  render() {

    const itemCode=this.props.items.map( v =>
      <ShopItem key={v.code}
        name={v.name} 
		  brand = {v.brand}
		  price={v.price} 
		  img={v.img} 
		  count={v.count} 
		  code={v.code} 
        freeanswer={v.freeanswer} freeanswertext={this.state.freeanswertext}
        cbSelected={this.answerSelected}
        cbFreeAnswerTextChanged={this.freeAnswerTextChanged}
        selectedAnswerCode={this.state.selectedAnswerCode}
        workMode={this.state.workMode}
      />
    );

    return (
      <div className='VotesBlock'>
			<div className='ShopTitle'>{this.props.question}</div>
			<table className='Answers'>
				<tbody>
					<tr>
						<th>{"Model"}</th>
						<th>{"Brand"}</th>
						<th>{"Picture"}</th>
						<th>{"Quantity"}</th>
						<th>{"Price"}</th>
						<th>{"Control"}</th>
					</tr>
					{itemCode}
				</tbody>
			</table>
        {
          ((this.state.workMode==1)&&this.state.selectedAnswerCode) &&
          <input type='button' value='проголосовать' onClick={this.vote} />
        }
      </div>
    )
    ;

  }

}

export default ShopBlock;
