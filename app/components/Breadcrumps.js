var React = require('react');

var Breadcrumps = React.createClass({
	propTypes: {
		title: React.PropTypes.string,
		links: React.PropTypes.array
	},
	contextTypes: {
		router: React.PropTypes.func
	},
	goToDashboard: function(){
		this.context.router.transitionTo('admin_dashboard');
	},
	goToUrl: function(name){
		this.context.router.transitionTo(name);
	},
	render: function(){
		return (
			<div id="breadcrumbs-wrapper" className="grey lighten-3">
				<div className="container">
					<div className="row">
						<div className="col s12 m12 l12">
							<h5 className="breadcrumbs-title">{this.props.title}</h5>
							<ol className="breadcrumb">
								<li>
									<a onClick={this.goToDashboard}>Trang chủ</a>
								</li>
								{
									this.props.links.map(function(link, i){
										if(!_.isUndefined(link.name)){
											var content = (<a onClick={this.goToUrl.bind(this, link.name)}>
															{link.text}
															</a>);
										}else
											var content = (<a className='active'>{link.text}</a>);
										
										return (
											<li key={i}>
												{content}
											</li>
										);
									}, this)
								}
							</ol>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Breadcrumps;