var CommonModel = require('admin/models/common.js');

var Auth = {
	componentWillMount: function(){
		$('body').removeClass('loaded');

		CommonModel.checkAuth()
		.then(function(response){
			$('body').addClass('loaded');
			this.context.router.transitionTo('admin_dashboard');
		}.bind(this), function(error){
			$('body').addClass('loaded');
		})
	}
}

module.exports = Auth;