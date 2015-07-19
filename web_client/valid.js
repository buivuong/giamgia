var Valid = {
	getClientError: function(validate, input){
		var error = '';
		for(var key in validate){
			var message = validate[key];
			if(key === 'required'){
				if(Validate.isEmpty(input)){
					error = message;
					break;
				}
			}else if(key === 'min'){
				var split = message.split(":");
				if(split.length > 0){
					if(parseInt(input.length) <= parseInt(split[1])){
						error = split[0];
						break;
					}
				}
			}else if(key === 'email'){
				if(is.not.email(input)){
					error = message;
					break;
				}
			}
		}

		return error;
	}
}

module.exports = Valid;