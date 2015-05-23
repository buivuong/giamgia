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
	divErrorServer: function(field){
		var text_error = '<span class="red-text">'+field.message+'</span>';
		$('#'+field.id).parent().append(text_error);
		$('#'+field.id).parent().parent().removeClass('margin');
		$('#'+field.id).addClass('bv-invalid');
	},
	divError: function(field){
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

		var text_error = '<span class="red-text">'+message+'</span>';

		$('#'+field.id).parent().find('.red-text').remove();
		$('#'+field.id).removeClass('bv-invalid');

		if(!valid){
			$('#'+field.id).parent().append(text_error);
			$('#'+field.id).parent().parent().removeClass('margin');
			$('#'+field.id).addClass('bv-invalid');

			// CASE COMPARE OBJECT
			if(compare_check === 2){
				$('#'+compare_field.id).parent().find('.red-text').remove();
				$('#'+compare_field.id).parent().parent().addClass('margin');
				$('#'+compare_field.id).removeClass('bv-invalid');

				var text_error_compare = '<span class="red-text">'+compare_field.message+'</span>';

				$('#'+compare_field.id).parent().append(text_error_compare);
				$('#'+compare_field.id).parent().parent().removeClass('margin');
				$('#'+compare_field.id).addClass('bv-invalid');
			}else if(compare_check === 1){
				$('#'+compare_field.id).parent().find('.red-text').remove();
				$('#'+compare_field.id).parent().parent().addClass('margin');
				$('#'+compare_field.id).removeClass('bv-invalid');				
			}
			//END CASE COMPARE OBJECT	
		}else{
			// CASE COMPARE OBJECT
			$('#'+compare_field.id).parent().find('.red-text').remove();
			$('#'+compare_field.id).parent().parent().addClass('margin');
			$('#'+compare_field.id).removeClass('bv-invalid');
			// END CASE COMPARE OBJECT

			$('#'+field.id).parent().parent().addClass('margin');
		}

		return valid;
	}
};

module.exports = Validation;