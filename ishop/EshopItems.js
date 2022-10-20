var EshopItems = React.createClass({

	displayName: 'Eshop-item',

	propTypes: {
		title: React.PropTypes.string.isRequired, // текст вопроса
		items: React.PropTypes.arrayOf(
			React.PropTypes.shape({
				name: React.PropTypes.string.isRequired,
				brand: React.PropTypes.string.isRequired,
				code: React.PropTypes.number.isRequired,
				price: React.PropTypes.number.isRequired,
				img: React.PropTypes.string.isRequired,
				countLeft: React.PropTypes.number.isRequired,
			})
		)
	},

	render: function () {

		var eshopItem = this.props.items.map(elem =>
			React.DOM.table({ key: elem.code, className: 'Item' },
				React.DOM.tbody({ className: 'Item__content' },
					React.DOM.tr({ className: 'Item__row' },
						React.DOM.td({ className: 'Item__image', rowSpan: "4" },
							React.DOM.img({ className: 'photo', src: elem.img })),
						React.DOM.td({ className: 'Item__brand' }, elem.brand),
					),
					React.DOM.tr({ className: 'Item__row' },
						React.DOM.td({ className: 'Item__name' }, elem.name),
					),
					React.DOM.tr({ className: 'Item__row' },
						React.DOM.td({ className: 'Item__left' }, `В наличии:${elem.countLeft} шт`),
					),
					React.DOM.tr({ className: 'Item__row' },
						React.DOM.td({ className: 'Item__price' }, `Стоимость:${elem.price.toFixed(2)} BYN`),
					),
				)
			),
		);
		return React.DOM.div({ className: 'Eshop-item' },
			React.DOM.h1({ className: 'Title' }, this.props.title),
			React.DOM.div({ className: 'Catalog' }, eshopItem),
		);
	},

});
