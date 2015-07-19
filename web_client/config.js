var Countries = require('languages/countries.js');

var Config = {
	baseServerUrl: 'http://localhost:3001/api/ads/v1/',
	baseServerUrlAdmin: 'http://localhost:3001/api/ads/v1/admin/',
	baseServerUrlClient: 'http://localhost:3001/api/hospital/v1/client/',
	serverTimezone: 'Asia/Ho_Chi_Minh',
	clientTimezone: 'Asia/Ho_Chi_Minh',
	lang: 'gb',
	monthOfYear: [
		{value: "January"},
		{value: "February"},
		{value: "March"},
		{value: "April"},
		{value: "May"},
		{value: "June"},
		{value: "July"},
		{value: "August"},
		{value: "September"},
		{value: "Octorber"},
		{value: "November"},
		{value: "December"}
	],
	countries: Countries
}

module.exports = Config;