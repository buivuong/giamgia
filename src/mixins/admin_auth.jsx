var CommonModel = require('../admin/models/common.jsx');

var Auth = {
	componentWillMount: function(){
		CommonModel.checkAuth()
		.then(function(response){

		}, function(error){
			this.context.router.transitionTo('admin_login');
		}.bind(this))
	}
}

module.exports = Auth;