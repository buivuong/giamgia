var nodemailer = require('nodemailer');

const defaultUrl = '/api/ads/v1/';

module.exports = {
	domain: 'http://localhost:3001',
	domainClient: 'http://localhost:3002/react/src/#/',
	defaultUrl: defaultUrl,
	defaultAdminUrl: defaultUrl+'admin/'
}