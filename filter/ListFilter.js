var ListFilter = React.createClass({

	displayName: 'ListFilter',

	propTypes: {
		list: React.PropTypes.arrayOf(
			React.PropTypes.string.isRequired
		),
	},


	// getInitialState: function () {
	// 	return {
	// 		selectedAnswerCode: null,
	// 		freeanswertext: this.props.deffreeanswertext,
	// 		workMode: this.props.startWorkMode,
	// 	};
	// },

	// answerSelected: function (code) {
	// 	console.log('выбран ответ с кодом ' + code);
	// 	this.setState({ selectedAnswerCode: code });
	// },

	// vote: function () {
	// 	console.log('голосование завершено, выбран ответ с кодом ' + this.state.selectedAnswerCode);

	// 	// изменяем пропсы - вообще-то так нельзя, потому что:
	// 	// 1. сам массив, переданный нам по ссылке как пропс answers, может где-то как-то использоваться (но мы точно знаем что не используется)
	// 	// 2. при таком изменении компонент сам не перерендерится (но мы всё равно чуть ниже вызываем setState, так что перерендерится)
	// 	// так что это антипаттерн, но "сойдёт", чтобы не раздувать код
	// 	// по-хорошему, надо бы переложить все варианты ответов в стейт и здесь менять именно стейт вызовом setState
	// 	this.props.answers.forEach(answer => {
	// 		if (answer.code == this.state.selectedAnswerCode)
	// 			answer.count++;
	// 	});

	// 	this.setState({ workMode: 2 });
	// },

	// freeAnswerTextChanged: function (fat) {
	// 	console.log('VotesBlock: текст свободного ответа изменён - ' + fat);
	// 	this.setState({ freeanswertext: fat });
	// },

	render: function () {

		// var answersCode = this.props.answers.map(v =>
		// 	React.createElement(VotesAnswer, {
		// 		key: v.code,
		// 		text: v.text, count: v.count, code: v.code,
		// 		freeanswer: v.freeanswer, freeanswertext: this.state.freeanswertext,
		// 		cbSelected: this.answerSelected,
		// 		cbFreeAnswerTextChanged: this.freeAnswerTextChanged,
		// 		selectedAnswerCode: this.state.selectedAnswerCode,
		// 		workMode: this.state.workMode,
		// 	})
		// );

		return React.DOM.div({ className: 'ListFilter' },
			React.DOM.div({ className: 'SearchLine' },
				React.DOM.checkBox({ className: 'SearchLine' }, "123"),
				React.DOM.div({ className: 'SearchLine' }, "234"),
				React.DOM.div({ className: 'SearchLine' }, "556"),
			),
			// React.createElement(VotesQuestion, { question: this.props.question }),
			React.DOM.div({ className: 'Answers' }, this.props.list),
			// ((this.state.workMode == 1) && this.state.selectedAnswerCode)
			// 	? React.DOM.input({ type: 'button', value: 'проголосовать', onClick: this.vote })
			// 	: null
		);

	},

});