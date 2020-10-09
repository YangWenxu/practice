'use strict'

const Service = require('egg').Service;

class UserService extends Service {
	async getAll () {
		return [
			{name: 'tom'},
			{name: 'zhaobuchu'}
		]
	}
}

module.exports = UserService;