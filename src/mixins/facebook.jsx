var Facebook = {
	statusChangeCallback: function(response){
		console.log(response);

		if(response.status === 'connected'){
			//Logged In to your app and Facebook
			FB.api('/me', function(response) {
			    console.log(response);
			});
		}else if(response.status === 'not_authorized'){
			//The person is logged into Facebook, but not your app
			console.log("not not_authorized");
		}else{
			//Not Logged in
			console.log("not log in facebook and app");
		}
	},
	checkLoginState: function(){
		FB.getLoginStatus(function(response){
			this.statusChangeCallback(response);
		}.bind(this));
	},
	clickLoginFacebook: function(){
		FB.login(function(response){
			if(response.status === 'connected'){

				console.log(response.authResponse.accessToken);

				/*FB.api('/me', function(response) {
				    console.log(response);
				});*/
			}else if(response.status === 'not_authorized'){
				console.log('not_authorized');
			}
		}, {scope: 'public_profile,email,user_friends'});
	}
}

module.exports = Facebook;