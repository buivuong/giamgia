var AuthMixin = {
	auth: 1,
	willTransitionTo: function(transition){
		if(this.auth){
			transition.transitionTo('home');
		}
	}
};

module.exports = AuthMixin;