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
				if(split.length > 0 && is.not.empty(input)){
					if(parseInt(input.length) < parseInt(split[1]) && is.not.empty(input)){
						error = split[0];
						break;
					}
				}
			}else if(key === 'max'){
				var split = message.split(":");
				if(split.length > 0 && is.not.empty(input)){
					if(parseInt(input.length) > parseInt(split[1]) && is.not.empty(input)){
						error = split[0];
						break;
					}
				}
			}else if(key === 'email'){
				if(is.not.email(input) && is.not.empty(input)){
					error = message;
					break;
				}
			}else if(key === 'date'){
				var split = input.split('/');
				var full_split = split[1]+'/'+split[0]+'/'+split[2];

				if(is.not.dateString(full_split) && is.not.empty(input)){
					error = message;
					break;
				}
			}else if(key === 'number'){
				if(is.not.number(Number(input)) && is.not.empty(input)){
					error = message;
					break;	
				}
			}
		}

		return error;
	}
}

module.exports = Valid;