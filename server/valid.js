var Validate = require("validate.js");

Validate.options = {fullMessages: false};
Validate.validators.presence.message = 'APP_ERR_REQUIRED';
Validate.validators.email.message = 'APP_ERR_EMAIL';

module.exports = Validate;