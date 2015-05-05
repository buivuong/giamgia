var Validation = {
	isEmpty: function(value){
		if(typeof value === 'undefined' || value === null || value === '')
			return true;
		return false;
	},
	isEmail: function(value){
		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

		if(!this.isEmpty(value) && !re.test(value))
			return false;
		return true;
	},
	min: function(value, compare){
		if(!this.isEmpty(value) && value.toString().length < compare)
			return false;
		return true;
	},
	divError: function(message, id){
		return '<div class="ui red pointing label" id="'+id+'">'+message+'</div>';
	}
}

module.exports = Validation;