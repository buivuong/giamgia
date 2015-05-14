var CommonModel = require('../admin/models/common.jsx');

var Auth = {
	componentWillMount: function(){
		CommonModel.checkAuth()
		.then(function(response){
			this.context.router.transitionTo('admin_dashboard');
		}.bind(this), function(error){
		})
	}
}

module.exports = Auth;