const http = require('http')
const fs = require('fs')

let server = http.createServer((req, res) => {
	const {method, url} = req;
	if (method == 'GET' && url == '/') {
		fs.readFile('./index.html', (err, data) => {
			if (err) {
				console.log(err)
			} else {
				res.setHeader("Content-Type", "text/html");
				res.end(data)
			}
		})
	} else if ((method == 'GET' || method == 'POST' )&& url =="/api/users") {
		res.setHeader("Content-Type", "application/json");
		res.setHeader('Access-Control-Allow-Credentials', 'true');
		res.setHeader('Set-Cookie', 'cookie1=va222;')
		res.setHeader("Access-Control-Allow-Origin", 'http://localhost:3000')
		res.end(JSON.stringify([{
			name: 'zhaobuchu',
			age: 22
		}]))
	} else if (method == "OPTIONS" && url == "/api/users") {
		res.setHeader('Access-Control-Allow-Credentials', 'true');
		res.writeHead(200, {
			"Access-Control-Allow-Origin": "http://localhost:3000",
			"Access-Control-Allow-Headers": "X-Token,Content-Type",
			"Access-Control-Allow-Methods": "PUT"
		});
		res.end();
	}
})

// server.listen(3000)
module.exports = server