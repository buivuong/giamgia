var Valid = {
	getClientError: function(validate, input){
		var error = '';
		for(var key in validate){
			var message = validate[key];
			switch(key){
				case 'required':
					if(Validate.isEmpty(input))
						error = message;
				break;
			}
		}

		return error;
	}
}

module.exports = Valid;