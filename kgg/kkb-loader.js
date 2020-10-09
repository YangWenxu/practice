const fs = require('fs');
const path = require('path');
const Router = require('koa-router');

function load(dir, cb) {
	const url = path.resolve(__dirname, dir)；
	const files = fs.readdirSync(url);
	files.forEach(filename=> {
		filename = filename.replace(".js", "");
		const file = require(url + '/' + filename);
		cb(filename, file);
	})
}

function initRouter() {
	const router = new Router();
	load('routes', (filename, routes) => {
		const prefix = filename === "index"? "" : `/${filename}`;
		object.keys(routes).forEach(key => {
			const [method, path] = key.split(" ");
			console.log(`正在映射地址：${method.toLocaleUpperCase()}${prefix}${path}`)
			router[method](prefix + path, routes[key]);
		});
	});
}

module.exports = { initRouter };