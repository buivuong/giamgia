var CommonModel = require('admin/models/common');

var Auth = {
	componentWillMount: function(){
		$('body').removeClass('loaded');

		CommonModel.checkAuth()
		.then(function(response){
			$('body').addClass('loaded');
		}, function(error){
			$('body').addClass('loaded');
			this.context.router.transitionTo('admin_login');
		}.bind(this))
	}
}

module.exports = Auth;