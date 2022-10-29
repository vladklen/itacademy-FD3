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
			isChecked: false,
			inputText: "",
		};
	},


	handleChangeChk: function (event) {
		if (event.target.checked) {
			this.state.isChecked = true;
			this.state.list.sort(function (a, b) {
				if (a.name > b.name) {
					return 1;
				}
				if (a.name < b.name) {
					return -1;
				}
				return 0;
			});
		} else if (!event.target.checked && event.target.type == "checkbox" || event.target.type === "button") {
			this.state.isChecked = false;
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

		if (event.target.type === "text") {
			this.state.inputText = event.target.value;
			this.state.list = this.props.list.filter((el) => (el.name.includes(event.target.value)));
		} else if (event.target.value = " " && event.target.type === "text") {
			this.state.inputText = event.target.value;
			this.state.list = this.props.list;
		}

		if (event.target.type === "button") {
			console.log(this.state.holdList);
			this.state.isChecked = false;
			this.state.inputText = "";
			this.state.list = this.props.list;
		}
		this.setState(() => { });
	},



	render: function () {
		var itemFromList = this.state.list.map(el => el !== null ?
			React.DOM.li({ className: 'ListItem', key: el.code }, el.name) : null
		);

		return React.DOM.div({ className: 'ListFilter' },
			React.DOM.div({ className: 'SearchLine' },
				React.DOM.input({
					className: 'checkbox',
					type: 'checkbox',
					name: 'voteanswer',
					checked: this.state.isChecked,
					onChange: this.handleChangeChk,
				}),
				React.DOM.input({
					className: 'input-line',
					type: 'text',
					name: 'voteanswer',
					value: this.state.inputText,
					onChange: this.handleChangeChk,
				}),
				React.DOM.input({
					className: 'ResetButton',
					type: 'button',
					value: 'Clear',
					onClick: this.handleChangeChk,
				}),
			),
			React.DOM.ul({ className: 'Answers' }, itemFromList),
		);

	},

});