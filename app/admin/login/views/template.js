var React = require('react');
var Login = require('admin/login/views/form.js');
var Loader = require('Loader');
//var Auth_Non_Mixin = require('../../../mixins/admin_non_auth.jsx');

var Template = React.createClass({
	/*mixins: [Auth_Non_Mixin],*/
	setLoader: function(isLoad){
		if(isLoad) this.refs.loader.play();
		else
			this.refs.loader.stop();
	},
	render: function(){
		return (
			<div className="row" style={{marginTop: '20px'}}>
				<div className="col offset-s4 s4 z-depth-3 card-panel" style={{position: 'relative'}}>
					<Loader ref="loader" size="80px"/>
					<Login setLoader={this.setLoader}/>
				</div>
			</div>
		);
	}
});

module.exports = Template;