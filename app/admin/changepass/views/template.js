var React = require('react');
var Loader = require('Loader');
var Auth_Mixin = require('admin_auth');
var Changepass = require('admin/changepass/views/form');
var Breadcrumps = require('Breadcrumps');

var Template = React.createClass({
	contextTypes: {
		router: React.PropTypes.func
	},
	mixins: [Auth_Mixin],
	setLoader: function(isLoad){
		if(isLoad) this.refs.loader.play();
		else
			this.refs.loader.stop();
	},
	render: function(){
		var links = [
			{text: 'Thay mật khẩu'}
		];

		return (
			<section id="content">
				<Breadcrumps title="Thay mật khẩu" links={links}/>
				<div className="section" style={{position: 'relative'}}>
					<Loader ref="loader" size="80px"/>
					<div className="row">
						<div className="col s12">
							<div className="card-panel">
								<div className="row">
									<Changepass setLoader={this.setLoader}/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
});

module.exports = Template;