var React = require('react');
var SecurityService = require('services/security');
var Validation = require('validation');
var Config = require('config');

var Controller = {
	getInputsValue: function(dom){
		var name = $('#'+dom.id_pre+'name').val();
		var email = $('#'+dom.id_pre+'email').val();
		var password = $('#'+dom.id_pre+'password').val();
		var repeat_password = $('#'+dom.id_pre+'repeat_password').val();
		var now = moment().tz(Config.serverTimezone).format('YYYY-MM-DD HH:mm:ss');
		var active = 0;
		var created_at = updated_at = now;

		return {
			name: name, email: email, password: password, repeat_password: repeat_password, 
			active: active, created_at: created_at, updated_at: updated_at
		}
	},
	beforeSubmit: function(dom){
		$(React.findDOMNode(dom)).removeClass('error');
		$(React.findDOMNode(dom)).addClass('loading');
		Validation.beforeErrorsDiv(dom);
	},
	onClickSubmit: function(dom){
		this.beforeSubmit(dom);
		var postData = this.getInputsValue(dom);

		SecurityService.registration(postData)
		.then(function(response){
			$(React.findDOMNode(dom)).removeClass('loading');
		}, function(error){
			$(React.findDOMNode(dom)).removeClass('loading');
			$(React.findDOMNode(dom)).addClass('error');

			if(error.status === 400)
				Validation.afterErrorsDiv(dom, error.messages);
		})
	}
}

module.exports = Controller;