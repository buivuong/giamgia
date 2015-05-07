var _ = require('lodash');

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
	min: function(value, compare){
		if(!this.isEmpty(value) && value.toString().length < compare)
			return false;
		return true;
	},
	
	/*s
	* field (input, id, message)
	*/
	divEmptyWithInputGroup: function(field){
		if(_.isUndefined(field.message))
			field.message = 'Bắt buộc nhập';

		var text_error = '<p class="input-help" id="'+field.id+'_empty_error" style="color: #D93240;">'+field.message+'</p>';

		if(this.isEmpty(field.input)){
			$('#'+field.id).addClass('error');
			if(!$('#'+field.id).parent().parent().find('#'+field.id+'_empty_error').length)
				$('#'+field.id).parent().parent().append(text_error);
			return true;
		}else{
			if(!this.isEmpty(field.input) && !$('#'+field.id).parent().parent().find('.input-help').length)
				$('#'+field.id).removeClass('error');
			$('#'+field.id).parent().parent().find('#'+field.id+'_empty_error').remove();
			return false;
		}
	},

	/*
	* field (input, id, message)
	*/
	divEmailWithInputGroup: function(field){
		if(_.isUndefined(field.message))
			field.message = 'Phải nhập email chính xác';

		var text_error = '<p class="input-help" id="'+field.id+'_email_error" style="color: #D93240;">'+field.message+'</p>';

		if(!this.isEmpty(field.input) && !this.isEmail(field.input)){
			$('#'+field.id).addClass('error');
			if(!$('#'+field.id).parent().parent().find('#'+field.id+'_email_error').length)
				$('#'+field.id).parent().parent().append(text_error);

			return false;
		}else{
			if(!this.isEmpty(field.input) && !$('#'+field.id).parent().parent().find('.input-help').length)
				$('#'+field.id).removeClass('error');
			$('#'+field.id).parent().parent().find('#'+field.id+'_email_error').remove();

			return true;
		}
	},

	/*
	* field (input, id, message)
	* number: min number
	*/
	divMinWithInputGroup: function(field, number){
		if(_.isUndefined(field.message))
			field.message = 'Phải nhập ít nhất '+number+' ký tự';
		var text_error = '<p class="input-help" id="'+field.id+'_min_error" style="color: #D93240;">'+field.message+'</p>';

		if(!this.min(field.input, number) && !this.isEmpty(field.input)){
			$('#'+field.id).addClass('error');
			if(!$('#'+field.id).parent().parent().find('#'+field.id+'_min_error').length)
				$('#'+field.id).parent().parent().append(text_error);

			return false;
		}else{
			if(!this.isEmpty(field.input) && !$('#'+field.id).parent().parent().find('.input-help').length)
				$('#'+field.id).removeClass('error');
			$('#'+field.id).parent().parent().find('#'+field.id+'_min_error').remove();

			return true;
		}
	},

	/*
	* firstField (input, id, message)
	* lastField (input, id, message)
	*/
	divCompareWithInputGroup: function(firstField, lastField){
		var text_error_first = '<p class="input-help" id="'+firstField.id+'_compare_error" style="color: #D93240;">'+firstField.message+'</p>';
		var text_error_last = '<p class="input-help" id="'+lastField.id+'_compare_error" style="color: #D93240;">'+lastField.message+'</p>';

		if(firstField.input.toString() !== lastField.input.toString()
			&& (!this.isEmpty(firstField.input)&&!this.isEmpty(lastField.input)) ){
			$('#'+firstField.id).addClass('error');
			$('#'+lastField.id).addClass('error');
			if(!$('#'+firstField.id).parent().parent().find('#'+firstField.id+'_compare_error').length)
				$('#'+firstField.id).parent().parent().append(text_error_first);
			if(!$('#'+lastField.id).parent().parent().find('#'+lastField.id+'_compare_error').length)
				$('#'+lastField.id).parent().parent().append(text_error_last);
		}else{
			$('#'+firstField.id).parent().parent().find('#'+firstField.id+'_compare_error').remove();
			$('#'+lastField.id).parent().parent().find('#'+lastField.id+'_compare_error').remove();

			if(!this.isEmpty(firstField.input) && !$('#'+firstField.id).parent().parent().find('.input-help').length)
				$('#'+firstField.id).removeClass('error');
			if(!this.isEmpty(lastField.input) && !$('#'+lastField.id).parent().parent().find('.input-help').length)
				$('#'+lastField.id).removeClass('error');
		}
	}
}

module.exports = Validation;