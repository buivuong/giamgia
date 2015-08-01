var Thdate = React.createClass({
	sort: 'desc',
	propTypes: {
		text: React.PropTypes.string,
		onSort: React.PropTypes.func
	},
	getInitialState: function(){
		return {
			iclass: "glyphicon glyphicon-sort-by-attributes-alt"
		}
	},
	onClickHeader: function(event){
		this.sort = (this.sort === 'desc')?'asc':'desc';
		var iclass = (this.sort === 'desc')?"glyphicon glyphicon-sort-by-attributes-alt":"glyphicon glyphicon-sort-by-attributes";
		this.props.onSort(this.sort);
		this.setState({iclass: iclass});
	},
	render: function(){
		return (
			<th>
				{this.props.text}
				&nbsp;
				<a onClick={this.onClickHeader}>
					<i className={this.state.iclass}/>
				</a>
			</th>
		)
	}
});

module.exports = Thdate;