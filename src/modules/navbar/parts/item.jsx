/* INCLUDE MODULE */
var React = require('react');
/* END INCLUDE MODULE */

/* MAIN MODULE */
var NavbarItem = React.createClass({
	render: function(){
		return (
			<a className="item" onClick={this.props.onClickItem}>
				{this.props.text}
			</a>
		);
	}
});
/* END MAIN MODULE */

module.exports = NavbarItem;