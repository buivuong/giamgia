var _ = require('lodash');
var $ = require('jquery-browserify');

var Validation = {
	isEmpty: function(value){
		if(typeof value === 'undefined' || value === null || value === '')
			return true;
		return false;
	},
	isEmail: function(value){
		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

		if(!re.test(value))
			return false;
		return true;
	},
	isMin: function(value, compare){
		if(value.toString().length < compare)
			return false;
		return true;
	},

	/*
	* 
	field (input, id, errors: 
		[
			{type: required, message},
			{type: email, message},
			{type: min, message, min},
			{type: compare, message, compare_field: (input, id, message) }
		]
	)
	*/
	divErrorWithInputGroup: function(field){
		var message = '';
		var valid = true;
		var compare_field = {};
		var compare_check = 0;

		_.forEach(field.errors, function(error){
			switch(error.type){
				case 'required':
					if(valid){
						if(this.isEmpty(field.input))
							valid = false;
						message = error.message;
					}
					break;
				case 'email':
					if(valid){
						if(!this.isEmail(field.input))
							valid = false;
						message = error.message;
					}
					break;
				case 'min':
					if(valid){
						if(!this.isMin(field.input, error.min))
							valid = false;
						message = error.message;
					}
					break;
				case 'compare':
					if(valid){
						if(error.compare_field.input.toString() !== field.input.toString()){
							valid = false;
							compare_check = 2;
						}else compare_check = 1;
						message = error.message
					}
					compare_field = $.extend({}, error.compare_field);
					break;
			}
		}.bind(this))

		var text_error = '<p class="input-help" style="color: #D93240;">'+message+'</p>';

		$('#'+field.id).parent().parent().find('.input-help').remove();
		$('#'+field.id).removeClass('error');

		if(!valid){
			$('#'+field.id).parent().parent().append(text_error);
			$('#'+field.id).addClass('error');

			// CASE COMPARE OBJECT
			if(compare_check === 2){
				$('#'+compare_field.id).parent().parent().find('.input-help').remove();
				$('#'+compare_field.id).removeClass('error');

				var text_error_compare = '<p class="input-help" style="color: #D93240;">'+compare_field.message+'</p>';

				$('#'+compare_field.id).parent().parent().append(text_error_compare);
				$('#'+compare_field.id).addClass('error');
			}else if(compare_check === 1){
				$('#'+compare_field.id).parent().parent().find('.input-help').remove();
				$('#'+compare_field.id).removeClass('error');				
			}
			//END CASE COMPARE OBJECT	
		}else{
			// CASE COMPARE OBJECT
			$('#'+compare_field.id).parent().parent().find('.input-help').remove();
			$('#'+compare_field.id).removeClass('error');
			// END CASE COMPARE OBJECT
		}
		
		return valid;
	}
	
}

module.exports = Validation;