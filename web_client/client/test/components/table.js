var Pagination = require('components/pagination/Common');
var Dialog = require('components/dialog/Common');
var Thdate = require('components/table/Thdate');
var TestStore = require('client/test/TestStore');
var TestActions = require('client/test/TestActions');
var IntlMixin = ReactIntl.IntlMixin;

var Table = React.createClass({
	getInitialState: function(){
		return {list: [], count: 0};
	},
	componentDidMount: function(){
		TestActions.list.triggerPromise()
		.then(function(response){
			this.setState({list: response.data, count: response.count});
		}.bind(this))
		.catch(function(error){
		}.bind(this))
	},
	openDialog: function(event){
		this.refs.dialog.open();
	},
	onClickPage: function(page){
		if(page === 2){
			this.setState({list: [
				{id: 8, name: "tham", email: "anh@gmail.com", date: "22-11-2011 33:33:32"},
				{id: 9, name: "anh", email: "tham@gmail.com", date: "11-11-2012 33:33:34"},
				{id: 10, name: "hao", email: "hao@gmail.com", date: "11-08-2011 33:33:34"}
			]});
		}
	},
	onSort: function(sort){
		console.log(sort);
	},
	render: function(){
		return (
			<div className="panel panel-default">
				<Dialog ref="dialog">
					<div className="modal-body">
						Test Dialog
					</div>
				</Dialog>
				<div className="panel-body padding-round-large">
					<div className="pull-right">
						<div className="btn-group mr10">
							<button className="btn btn-sm btn-white tooltips" data-toogle="tooltip" onClick={this.openDialog}>
								<i className="glyphicon glyphicon-hdd"/>
							</button>
						</div>
						<Pagination ref="pagination" listCount={this.state.count} listDisplay={this.state.list.length} onClickPage={this.onClickPage}/>
					</div>
					<h5 className="subtitle mb5">Test table</h5>
					<p className="text-muted">List Test Table</p>
					<div className="table-responsive">
						<table className="table">
							<thead>
								<tr>
									<th>Name</th>
									<th>Email</th>
									<Thdate text="Date sort" onSort={this.onSort}/>
								</tr>
							</thead>
							<tbody>
								{
									this.state.list.map(function(item, index){
										return (
											<tr key={index}>
												<td>{item.name}</td>
												<td>{item.email}</td>
												<td>{item.date}</td>
											</tr>
										)
									})
								}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Table;