var XDate = require('xdate');
var Validate = require("validate.js");

Validate.options = {fullMessages: false};
Validate.validators.presence.message = 'APP_ERR_REQUIRED';
Validate.validators.email.message = 'APP_ERR_EMAIL';
Validate.validators.length.tooLong = 'APP_ERR_MAX';
Validate.validators.numericality.notValid = 'APP_ERR_NUMBER';

Validate.validators.datetime.parse = function(value, options) {
  	return new XDate(value, true).getTime();
};

Validate.validators.datetime.format = function(value, options) {
  	var format = options.dateFormat || (options.dateOnly ? "yyyy-MM-dd" : "u");
  	return new XDate(date, true).toString(format);
};

module.exports = Validate;