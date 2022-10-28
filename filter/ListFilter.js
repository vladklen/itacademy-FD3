var ListFilter = React.createClass({

	displayName: 'ListFilter',

	propTypes: {
		list: React.PropTypes.arrayOf(
			React.PropTypes.shape({
				name: React.PropTypes.string.isRequired,
				code: React.PropTypes.number.isRequired,
			})
		)
	},


	getInitialState: function () {
		return {
			list: this.props.list,
			oldList: null,
			selectedAnswerCode: false,
			freeanswertext: null,
		};
	},

	handleChangeChk: function (event) {
		if (event.target.checked) {
			console.log(this.state.list);
			this.state.list.sort(function (a, b) {
				if (a.name > b.name) {
				  return 1;
				}
				if (a.name < b.name) {
				  return -1;
				}
				return 0;
			 });
		} else if (!event.target.checked){
			this.state.list.sort(function (a, b) {
				if (a.code > b.code) {
				  return 1;
				}
				if (a.code < b.code) {
				  return -1;
				}
				return 0;
			 });
		}

		if (event.target.value != "on"){
			this.state.list = this.props.list.filter((el) => (el.name.includes(event.target.value)));
		} else if (event.target.value = " "){
			this.state.list = this.props.list;
		}
			


		// let newArray = this.state.list.map((el, index) => (el !== null && el.name.includes(event.target.value)) ? el : null);
		// console.log('выбран ответ с кодом ' + event.target.value);
		this.setState((prevState, props) => {
			return {
			};
		});
	},
	// vote: function () {
	// 	console.log('голосование завершено, выбран ответ с кодом ' + this.state.selectedAnswerCode);

		// изменяем пропсы - вообще-то так нельзя, потому что:
		// 1. сам массив, переданный нам по ссылке как пропс answers, может где-то как-то использоваться (но мы точно знаем что не используется)
		// 2. при таком изменении компонент сам не перерендерится (но мы всё равно чуть ниже вызываем setState, так что перерендерится)
		// так что это антипаттерн, но "сойдёт", чтобы не раздувать код
		// по-хорошему, надо бы переложить все варианты ответов в стейт и здесь менять именно стейт вызовом setState
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

		var itemFromList = this.state.list.map(el => el!==null?
			React.DOM.li({ className: 'ListItem', key: el.code }, el.name):null
		);

		return React.DOM.div({ className: 'ListFilter' },
			React.DOM.div({ className: 'SearchLine' },
				React.DOM.input({
					className: 'checkbox', type: 'checkbox', name: 'voteanswer', defaultChecked: this.state.selectedAnswerCode, 
					onChange: this.handleChangeChk,
				}),
				React.DOM.input({
					className: 'input-line', type: 'text', name: 'voteanswer', defaultValue: this.state.freeanswertext, onChange: this.handleChangeChk,
				}),
				React.DOM.button({ className: 'ResetButton' }, "Clear	"),
			),
			React.DOM.ul({ className: 'Answers' }, itemFromList),
		);

	},

});