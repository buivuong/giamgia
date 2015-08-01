var Countries = require('languages/countries.js');

var Config = {
	baseServerUrl: 'http://localhost:3001/api/ads/v1/',
	baseServerUrlAdmin: 'http://localhost:3001/api/ads/v1/admin/',
	baseServerUrlClient: 'http://localhost:3001/api/hospital/v1/client/',
	serverTimezone: 'Asia/Ho_Chi_Minh',
	clientTimezone: 'Asia/Ho_Chi_Minh',
	lang: 'gb',
	genders: [
		{value: 'male', name: 'Male'},
		{value: 'female', name: 'Female'}
	],
	countries: Countries
}

module.exports = Config;