var Validation = {
	isRequired: function(value){
		if(typeof value === 'undefined' || value === null || value === '')
			return false;
		return true;
	}
}

module.exports = Validation;