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
	} else if (method == 'GET' && url =="/api/users") {
		res.setHeader("Content-Type", "application/json");
		res.end(JSON.stringify([{
			name: 'zhaobuchu',
			age: 22
		}]))
	}
})

// server.listen(3000)
module.exports = server